import { Request, Response } from 'express';
import { Auth, gradeCreateDTO, GradeStatusEnum, ICreateGrade, Validate } from '../infrastructure';
import { AppliedTaskEntity, GradeEntity, TaskEntity } from '../domain';
import { Types } from 'mongoose';

class GradeController {
  @Validate(gradeCreateDTO, 'body')
  @Auth('teacher')
  async create(req: Request, res: Response) {
    try {
      const params = req.body as ICreateGrade;
      const appliedTask = await new AppliedTaskEntity().setId(new Types.ObjectId(params.appliedTaskId)).syncById();
      if (!appliedTask) {
        return res.status(400).json({
          message: 'Active applied task not found to grade',
        });
      }

      const task = await new TaskEntity().setId(appliedTask.getTaskId() as Types.ObjectId).syncById();
      const taskDeadline = task.getDeadline();
      const taskAppliedAt = appliedTask.getUpdatedAt();
      let penaltyPoint: number = 0;
      if (taskAppliedAt > taskDeadline) {
        const differenceInMinutes = Number(taskAppliedAt.getTime() - taskDeadline.getTime()) / (1000 * 60);
        penaltyPoint = differenceInMinutes - (differenceInMinutes % 5);
      }
      const finalPoint = params.point - penaltyPoint > 0 ? params.point - penaltyPoint : 0;
      const status = finalPoint >= task.getPassingScore() ? GradeStatusEnum.Passed : GradeStatusEnum.Failed;

      const grade = await new GradeEntity()
        .setAppliedTaskId(new Types.ObjectId(params.appliedTaskId))
        .setUserId(appliedTask.getUserId() as Types.ObjectId)
        .setOriginalPoint(params.point)
        .setPenaltyPoint(penaltyPoint)
        .setFinalPoint(finalPoint)
        .setStatus(status)
        .create();

      res.status(201).json({
        grade: grade.toSchema(),
        task: task.toSchema(),
        appliedTask: appliedTask.toSchema(),
      });
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }
}

export const gradeController = new GradeController();

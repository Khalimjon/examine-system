import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { Auth, appliedTaskCreateDTO, Validate, IAppliedTaskCreate, UserRoleEnum } from '../infrastructure';
import { AppliedTaskEntity } from '../domain';

class AppliedTaskController {
  @Validate(appliedTaskCreateDTO, 'body')
  @Auth('student')
  async create(req: Request, res: Response) {
    try {
      const params = req.body as IAppliedTaskCreate;
      console.log('User: ', req.user);
      if (!req.user) {
        return res.status(401).json({
          message: 'Unauthorized',
        });
      }
      if (req.user.role !== UserRoleEnum.Student) {
        return res.status(403).json({
          message: `Only students can apply task. For ${req.user.role} is not allowed`,
        });
      }
      const appliedTask = await new AppliedTaskEntity()
        .setUserId(req.user?.userId as Types.ObjectId)
        .setTaskId(new Types.ObjectId(params.taskId))
        .setGroupId(new Types.ObjectId(params.groupId))
        .setSourceCode(params.sourceCode)
        .create();

      return res.status(201).json(appliedTask.toSchema());
    } catch (error) {
      console.error(error);
      return res.json(error);
    }
  }
}

export const appliedTaskController = new AppliedTaskController();

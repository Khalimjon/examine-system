import { Request, Response } from 'express';
import { TaskEntity } from '../domain';
import { Types } from 'mongoose';
import { Auth } from '../infrastructure';

class TaskController {
  @Auth('teacher')
  async create(req: Request, res: Response) {
    try {
      const params = req.body;
      // TODO we should know which teacher create task
      const task = await new TaskEntity()
        .setTitle(params.title)
        .setDescription(params.description)
        .setGroupId(params.groupId)
        .setStartTime(params.startTime)
        .setDeadline(params.deadline)
        .setPassingScore(params.passingScore)
        .create();

      res.status(201).json(task.toSchema());
    } catch (error) {
      console.log(error);
    }
  }

  // That method allowed anyone --> students, admins and teachers
  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const task = await new TaskEntity().setId(new Types.ObjectId(id)).syncById();
      if (!task) {
        res.status(404).json({
          message: `task not found...`,
        });
      } else {
        res.status(200).json(task.toSchema());
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Auth('teacher')
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const title = req.body.title;

    // We can update also description and passing score
    const task = await new TaskEntity().setId(new Types.ObjectId(id)).setTitle(title).update();
    if (!task) {
      res.status(404).json({
        message: `task not found...`,
      });
    } else {
      res.status(200).json({
        message: `successfully`,
        data: task.toSchema(),
      });
    }
  }
}

export const taskController = new TaskController();

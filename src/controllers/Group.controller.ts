import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { GroupEntity } from '../domain';
import { Auth } from '../infrastructure';

class GroupController {
  @Auth('admin', 'teacher')
  async create(req: Request, res: Response) {
    try {
      const params = req.body;
      const group = await new GroupEntity().setTitle(params.title).setTeacherId(params.teacherId).create();

      res.status(200).json({
        message: `successfully`,
        data: group.toSchema(),
      });
    } catch (error) {
      console.log(error);
      // TODO send error response
    }
  }

  @Auth('admin', 'teacher')
  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const group = await new GroupEntity().setId(id as unknown as Types.ObjectId).syncById();
      if (!group) {
        res.status(404).json({
          message: `group not found...`,
        });
      } else {
        res.status(200).json({
          data: group.toSchema(),
        });
      }
    } catch (error) {
      console.log(error);
      // TODO send error response
    }
  }

  @Auth('admin', 'teacher')
  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const title = req.body.title;

      const group = await new GroupEntity().setId(new Types.ObjectId(id)).setTitle(title).update();

      if (!group) {
        res.status(404).json({
          message: `group not found...`,
        });
      } else {
        res.status(200).json({
          message: `successfully`,
          data: group.toSchema(),
        });
      }
    } catch (error) {
      console.log(error);
      // TODO send error response
    }
  }
}

export const groupController = new GroupController();

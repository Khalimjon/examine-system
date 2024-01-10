import { Request, Response } from 'express';
import { GroupMemberEntity } from '../domain';
import { Types } from 'mongoose';
import { Auth } from '../infrastructure';

export class GroupMemberController {
  @Auth('admin')
  async create(req: Request, res: Response) {
    try {
      const params = req.body;
      // TODO check user is exist in our system as student
      // TODO check group is exist
      const groupMember = await new GroupMemberEntity().setGroupId(params.groupId).setUserId(params.userId).create();

      res.status(200).json(groupMember.toSchema());
    } catch (error) {
      console.log(error);
    }
  }

  @Auth('admin', 'teacher')
  async findOne(req: Request, res: Response) {
    const id = req.params.id;
    const groupMember = await new GroupMemberEntity().setId(id as unknown as Types.ObjectId).syncById();

    if (!groupMember) {
      res.status(404).json({
        message: `Member not found...`,
      });
    } else {
      res.status(200).json(groupMember.toSchema());
    }
  }
}

export const groupMemberController = new GroupMemberController();

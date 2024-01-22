import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class GroupMemberSchema extends BaseSchema {
  @prop()
  userId?: Types.ObjectId;

  @prop()
  groupId?: Types.ObjectId;
}

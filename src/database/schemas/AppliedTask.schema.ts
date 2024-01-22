import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class AppliedTaskSchema extends BaseSchema {
  @prop()
  userId?: Types.ObjectId;

  @prop()
  groupId?: Types.ObjectId;

  @prop()
  taskId?: Types.ObjectId;

  @prop()
  sourceCodeLink?: string;
}

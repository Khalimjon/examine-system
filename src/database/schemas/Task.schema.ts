import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class TaskSchema extends BaseSchema {
  @prop()
  title?: string;

  @prop()
  description?: string;

  @prop()
  startTime?: Date;

  @prop()
  deadline?: Date;

  @prop()
  groupId?: Types.ObjectId;

  @prop()
  passingScore?: number;
}

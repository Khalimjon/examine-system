import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class GroupSchema extends BaseSchema {
  @prop()
  title?: string;

  @prop()
  teacherId?: Types.ObjectId;
}

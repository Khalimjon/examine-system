import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { GradeStatusEnum } from '../../infrastructure/enum';

export class GradeSchema extends BaseSchema {
  @prop()
  appliedTaskId?: Types.ObjectId;

  @prop()
  userId?: Types.ObjectId;

  @prop()
  originalPoint?: number;

  @prop()
  penaltyPoint?: number;

  @prop()
  finalPoint?: number;

  @prop()
  status?: GradeStatusEnum;
}

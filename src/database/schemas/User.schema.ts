import { BaseSchema } from './general';
import { prop } from '@typegoose/typegoose';
import { UserRoleEnum } from '../../infrastructure';

export class UserSchema extends BaseSchema {
  @prop()
  firstName?: string;

  @prop()
  lastName?: string;

  @prop()
  password?: string;

  @prop()
  phone?: string;

  @prop()
  role?: UserRoleEnum;
}

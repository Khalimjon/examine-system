import { prop } from '@typegoose/typegoose';

export class ErrorSchema {
  @prop()
  name?: string;

  @prop()
  message?: string;
}

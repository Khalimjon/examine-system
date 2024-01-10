import * as Joi from 'joi';
import { UserRoleEnum } from '../../enum';

export class UserCreateParams {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  role: string;

  constructor(params: UserCreateParams) {
    if (params) {
      this.firstName = params.firstName;
      this.lastName = params.lastName;
      this.phone = params.phone;
      this.password = params.password;
      this.role = params.role;
    }
  }

  async validate(): Promise<UserCreateParams> {
    return await userCreateDTO.validateAsync(this);
  }
}

export const userCreateDTO = Joi.object<UserCreateParams>({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  phone: Joi.string().trim().required().regex(new RegExp('^[0-9]{12}$')),
  password: Joi.string().min(6).trim().required(),
  role: Joi.string()
    .valid(...Object.values(UserRoleEnum))
    .required(),
});

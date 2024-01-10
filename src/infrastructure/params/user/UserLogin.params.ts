import * as Joi from 'joi';

export class UserLoginParams {
  phone: string;
  password: string;

  constructor(params: UserLoginParams) {
    if (params) {
      this.phone = params.phone;
      this.password = params.password;
    }
  }

  async validate() {
    return await userLoginDTO.validateAsync(this);
  }
}

export const userLoginDTO = Joi.object<UserLoginParams>({
  phone: Joi.string().trim().required().regex(new RegExp('^[0-9]{12}$')),
  password: Joi.string().min(6).trim().required(),
});

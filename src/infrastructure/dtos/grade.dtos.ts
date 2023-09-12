import * as Joi from 'joi';

export interface ICreateGrade {
  point: number;
  appliedTaskId: string;
}

export const gradeCreateDTO = Joi.object<ICreateGrade>({
  point: Joi.number().min(0).max(100).required(),
  appliedTaskId: Joi.string().trim().required().pattern(new RegExp('^[0-9a-fA-F]{24}$')),
});

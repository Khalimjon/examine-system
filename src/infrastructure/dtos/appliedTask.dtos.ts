import * as Joi from 'joi';

export interface IAppliedTaskCreate {
  taskId: string;
  groupId: string;
  sourceCode: string;
}

export const appliedTaskCreateDTO = Joi.object<IAppliedTaskCreate>({
  taskId: Joi.string().trim().required().pattern(new RegExp('^[0-9a-fA-F]{24}$')),
  groupId: Joi.string().trim().required().pattern(new RegExp('^[0-9a-fA-F]{24}$')),
  sourceCode: Joi.string().trim().required(),
});

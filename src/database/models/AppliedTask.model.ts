import { getModelForClass, Severity } from '@typegoose/typegoose';
import { AppliedTaskSchema } from '../schemas';

export const AppliedTaskModel = getModelForClass(AppliedTaskSchema, {
  schemaOptions: {
    collection: 'appliedTasks',
    minimize: true,
    timestamps: true,
    versionKey: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
});

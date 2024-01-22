import { getModelForClass, Severity } from '@typegoose/typegoose';
import { TaskSchema } from '../schemas';

export const TaskModel = getModelForClass(TaskSchema, {
  schemaOptions: {
    collection: 'task',
    minimize: true,
    timestamps: true,
    versionKey: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
});

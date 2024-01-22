import { getModelForClass, Severity } from '@typegoose/typegoose';
import { GradeSchema } from '../schemas';

export const GradeModel = getModelForClass(GradeSchema, {
  schemaOptions: {
    collection: 'grades',
    minimize: true,
    timestamps: true,
    versionKey: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
});

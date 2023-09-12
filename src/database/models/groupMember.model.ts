import { getModelForClass, Severity } from '@typegoose/typegoose';
import { GroupMemberSchema } from '../schemas';

export const GroupMemberModel = getModelForClass(GroupMemberSchema, {
  schemaOptions: {
    collection: 'groupMember',
    minimize: true,
    timestamps: true,
    versionKey: false,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
});

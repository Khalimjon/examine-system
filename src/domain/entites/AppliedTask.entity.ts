import { Types } from 'mongoose';
import { AppliedTaskModel, AppliedTaskSchema } from '../../database';

export class AppliedTaskEntity {
  protected _id?: Types.ObjectId;
  protected _groupId?: Types.ObjectId;
  protected _userId?: Types.ObjectId;
  protected _taskId?: Types.ObjectId;
  protected _sourceCode?: string;
  protected _updatedAt?: Date;
  protected _createdAt?: Date;

  setId(v: Types.ObjectId): AppliedTaskEntity {
    this._id = v;
    return this;
  }

  setGroupId(v: Types.ObjectId): AppliedTaskEntity {
    this._groupId = v;
    return this;
  }

  setUserId(v: Types.ObjectId): AppliedTaskEntity {
    this._userId = v;
    return this;
  }

  setTaskId(v: Types.ObjectId): AppliedTaskEntity {
    this._taskId = v;
    return this;
  }

  setSourceCode(sourceCode: string): AppliedTaskEntity {
    this._sourceCode = sourceCode;
    return this;
  }

  setUpdatedAt(v: Date): AppliedTaskEntity {
    this._updatedAt = v;
    return this;
  }

  setCreatedAt(v: Date): AppliedTaskEntity {
    this._createdAt = v;
    return this;
  }

  getId() {
    return this._id;
  }

  getUserId() {
    return this._userId;
  }

  getGroupId() {
    return this._groupId;
  }

  getSourceCode() {
    return this._sourceCode;
  }

  getTaskId() {
    return this._taskId;
  }

  getCratedAt() {
    return this._createdAt;
  }

  getUpdatedAt() {
    return this._updatedAt;
  }

  toEntity(v: AppliedTaskSchema) {
    return v
      ? this.setId(v._id)
          .setUserId(v.userId)
          .setTaskId(v.taskId)
          .setGroupId(v.groupId)
          .setSourceCode(v.sourceCodeLink)
          .setCreatedAt(v.createdAt)
          .setUpdatedAt(v.updatedAt)
      : null;
  }

  toSchema(): AppliedTaskSchema {
    return this
      ? {
          _id: this.getId(),
          userId: this.getUserId(),
          taskId: this.getTaskId(),
          groupId: this.getGroupId(),
          sourceCodeLink: this.getSourceCode(),
          createdAt: this.getCratedAt(),
          updatedAt: this.getUpdatedAt(),
        }
      : null;
  }

  async create(): Promise<AppliedTaskEntity> {
    const newAppliedTask = await AppliedTaskModel.create(this.toSchema());
    return this.toEntity(newAppliedTask);
  }

  async syncById() {
    const appliedTask = await AppliedTaskModel.findOne({ _id: this.getId() });
    return this.toEntity(appliedTask);
  }
}

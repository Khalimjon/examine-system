import { Types } from 'mongoose';
import { GroupModel, GroupSchema } from '../../database';

export class GroupEntity {
  protected _id?: Types.ObjectId;
  protected _title?: string;
  protected _teacherId?: Types.ObjectId;
  protected _updatedAt?: Date;
  protected _createdAt?: Date;

  setId(v: Types.ObjectId): GroupEntity {
    this._id = v;
    return this;
  }

  setTitle(title: string): GroupEntity {
    this._title = title;
    return this;
  }

  setTeacherId(v: Types.ObjectId): GroupEntity {
    this._teacherId = v;
    return this;
  }

  setUpdatedAt(v: Date): GroupEntity {
    this._updatedAt = v;
    return this;
  }

  setCreatedAt(v: Date): GroupEntity {
    this._createdAt = v;
    return this;
  }

  getId() {
    return this._id;
  }

  getTitle() {
    return this._title;
  }

  getTeacherId() {
    return this._teacherId;
  }

  getCratedAt() {
    return this._createdAt;
  }

  getUpdatedAt() {
    return this._updatedAt;
  }

  toEntity(v: GroupSchema) {
    return v
      ? this.setId(v._id)
          .setTitle(v.title)
          .setTeacherId(v.teacherId)
          .setUpdatedAt(v.updatedAt)
          .setCreatedAt(v.createdAt)
      : null;
  }

  toSchema(): GroupSchema {
    return this
      ? {
          _id: this.getId(),
          title: this.getTitle(),
          teacherId: this.getTeacherId(),
          updatedAt: this.getUpdatedAt(),
          createdAt: this.getCratedAt(),
        }
      : null;
  }

  async create(): Promise<GroupEntity> {
    const group = await GroupModel.create(this.toSchema());
    return this.toEntity(group);
  }

  async syncById(): Promise<GroupEntity> {
    const group = await GroupModel.findOne({ _id: this.getId() });
    return this.toEntity(group);
  }

  async update(): Promise<GroupEntity> {
    const schema: GroupSchema = {};
    if (this.getTitle()) schema.title = this.getTitle();

    const update = await GroupModel.findByIdAndUpdate({ _id: this.getId() }, { $set: schema }, { new: true });
    return this.toEntity(update);
  }
}

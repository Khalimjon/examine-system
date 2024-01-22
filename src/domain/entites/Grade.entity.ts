import { Types } from 'mongoose';
import { GradeStatusEnum } from '../../infrastructure';

export class GradeEntity {
  protected _id?: Types.ObjectId;
  protected _appliedTaskId?: Types.ObjectId;
  protected _userId?: Types.ObjectId;
  protected _originalPoint?: number;
  protected _penaltyPoint?: number;
  protected _finalPoint?: number;
  protected _status?: GradeStatusEnum;
  protected _updatedAt?: Date;
  protected _createdAt?: Date;

  setId(v: Types.ObjectId): GradeEntity {
    this._id = v;
    return this;
  }

  setAppliedTaskId(v: Types.ObjectId): GradeEntity {
    this._appliedTaskId = v;
    return this;
  }

  setUserId(v: Types.ObjectId): GradeEntity {
    this._userId = v;
    return this;
  }

  setOriginalPoint(originalPoint: number): GradeEntity {
    this._originalPoint = originalPoint;
    return this;
  }

  setPenaltyPoint(PenaltyPoint: number): GradeEntity {
    this._penaltyPoint = PenaltyPoint;
    return this;
  }

  setFinalPoint(finalPoint: number): GradeEntity {
    this._finalPoint = finalPoint;
    return this;
  }

  setStatus(status: GradeStatusEnum): GradeEntity {
    this._status = status;
    return this;
  }

  setUpdatedAt(v: Date): GradeEntity {
    this._updatedAt = v;
    return this;
  }

  setCreatedAt(v: Date): GradeEntity {
    this._createdAt = v;
    return this;
  }

  getId() {
    return this._id;
  }

  getAppliedTaskId() {
    return this._appliedTaskId;
  }

  getUserId() {
    return this._userId;
  }

  getOriginalPoint() {
    return this._originalPoint;
  }

  getPenaltyPoint() {
    return this._penaltyPoint;
  }

  getFinalPoint() {
    return this._finalPoint;
  }

  getStatus() {
    return this._status;
  }

  getCratedAt() {
    return this._createdAt;
  }

  getUpdatedAt() {
    return this._updatedAt;
  }
}

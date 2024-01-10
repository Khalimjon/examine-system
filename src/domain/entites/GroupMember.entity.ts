import {Types} from "mongoose";
import {GroupMemberModel, GroupMemberSchema} from "../../database";

export class GroupMemberEntity {
    protected _id?: Types.ObjectId;
    protected _groupId?: Types.ObjectId;
    protected _userId?: Types.ObjectId;
    protected _updatedAt?: Date;
    protected _createdAt?: Date;

    setId(v: Types.ObjectId): GroupMemberEntity {
        this._id = v
        return this
    }

    setGroupId(v: Types.ObjectId): GroupMemberEntity {
        this._groupId = v
        return this
    }

    setUserId(v: Types.ObjectId): GroupMemberEntity {
        this._userId = v
        return this
    }

    setUpdatedAt(v: Date): GroupMemberEntity {
        this._updatedAt = v;
        return this;
    }

    setCreatedAt(v: Date): GroupMemberEntity {
        this._createdAt = v;
        return this;
    }

    getId() {
        return this._id
    }

    getGroupId() {
        return this._groupId
    }

    getUserId() {
        return this._userId
    }

    getCratedAt() {
        return this._createdAt;
    }

    getUpdatedAt() {
        return this._updatedAt;
    }

    toEntity(v: GroupMemberSchema): GroupMemberEntity {
        return v
            ? this.setId(v._id)
                .setGroupId(v.groupId)
                .setUserId(v.userId)
                .setCreatedAt(v.createdAt)
                .setUpdatedAt(v.updatedAt)
            :
            null
    }

    toSchema(): {
        createdAt: Date;
        groupId: Types.ObjectId;
        _id: Types.ObjectId;
        userId: Types.ObjectId;
        updatedAt: Date
    } {
        return this
            ? {
                _id: this.getId(),
                groupId: this.getGroupId(),
                userId: this.getUserId(),
                createdAt: this.getCratedAt(),
                updatedAt: this.getUpdatedAt()
            }
            : null
    }

    async create(): Promise<GroupMemberEntity>{
        const groupMember = await GroupMemberModel.create(this.toSchema())
        return this.toEntity(groupMember)
    }

    async syncById(): Promise<GroupMemberEntity>{
        const groupMember = await GroupMemberModel.findOne({_id: this.getId()})
        return this.toEntity(groupMember)
    }

    // async update(){
    //     const schema: GroupMemberSchema = {};
    //     const groupMember =  await GroupMemberModel.findByIdAndUpdate({_id: this.getId()}, {$set: schema}, {new: true})
    // }
}


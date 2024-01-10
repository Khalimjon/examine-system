import {Types} from "mongoose";
import {TaskModel, TaskSchema} from "../../database";


export class TaskEntity {
    protected _id?: Types.ObjectId;
    protected _title?: string;
    protected _description?: string;
    protected _startTime?: Date;
    protected _deadline?: Date;
    protected _groupId?: Types.ObjectId;
    protected _passingScore?: number;
    protected _updatedAt?: Date;
    protected _createdAt?: Date;

    setId(v: Types.ObjectId): TaskEntity {
        this._id = v
        return this
    }

    setTitle(title: string): TaskEntity {
        this._title = title
        return this
    }

    setDescription(description: string): TaskEntity {
        this._description = description
        return this
    }

    setStartTime(startTime: Date): TaskEntity {
        this._startTime = startTime
        return this
    }

    setDeadline(deadline: Date): TaskEntity {
        this._deadline = deadline
        return this
    }

    setGroupId(v: Types.ObjectId): TaskEntity {
        this._groupId = v
        return this
    }

    setPassingScore(passingScore: number): TaskEntity {
        this._passingScore = passingScore
        return this
    }

    setUpdatedAt(v: Date): TaskEntity {
        this._updatedAt = v;
        return this;
    }

    setCreatedAt(v: Date): TaskEntity {
        this._createdAt = v;
        return this;
    }

    getId() {
        return this._id
    }

    getTitle() {
        return this._title
    }

    getDescription() {
        return this._description
    }

    getStartTime() {
        return this._startTime
    }

    getDeadline() {
        return this._deadline
    }

    getGroupId() {
        return this._groupId
    }

    getPassingScore() {
        return this._passingScore
    }

    getCratedAt() {
        return this._createdAt;
    }

    getUpdatedAt() {
        return this._updatedAt;
    }

    toEntity(v: TaskSchema): TaskEntity {
        return v
            ? this.setId(v._id)
                .setTitle(v.title)
                .setStartTime(v.startTime)
                .setDescription(v.description)
                .setDeadline(v.deadline)
                .setCreatedAt(v.createdAt)
                .setUpdatedAt(v.updatedAt)
                .setPassingScore(v.passingScore)
            :
            null;
    }

    toSchema(): {
        groupId: Types.ObjectId;
        description: string;
        passingScore: number;
        startTime: Date;
        _id: Types.ObjectId;
        title: string;
        deadline: Date
    } {
        return this
            ? {
                _id: this.getId(),
                title: this.getTitle(),
                description: this.getDescription(),
                startTime: this.getStartTime(),
                deadline: this.getDeadline(),
                groupId: this.getGroupId(),
                passingScore: this.getPassingScore()
            }
            : null
    }

    async create(): Promise<TaskEntity> {
        const task = await TaskModel.create(this.toSchema());
        return this.toEntity(task)
    }

    async syncById(): Promise<TaskEntity> {
        const task = await TaskModel.findOne({_id: this.getId()});
        return this.toEntity(task);
    }

    async update(): Promise<TaskEntity> {
        const schema: TaskSchema = {}
        if (this.getTitle()) schema.title = this.getTitle()
        const updated = await TaskModel.findByIdAndUpdate({_id: this.getId()}, {$set: schema}, {new: true})
        return this.toEntity(updated)
    }


}
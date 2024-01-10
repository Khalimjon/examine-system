import { ErrorSchema } from '../../../database';

export class ErrorEntity {
  protected _name?: string;
  protected _message?: string;

  setName(v: string): ErrorEntity {
    this._name = v;
    return this;
  }

  setMessage(v: string): ErrorEntity {
    this._message = v;
    return this;
  }

  getName(): string {
    return this._name;
  }

  getMessage(): string {
    return this._message;
  }

  toEntity(v: ErrorSchema): ErrorEntity {
    return v ? this.setName(v.name).setMessage(v.message) : null;
  }

  toSchema(): ErrorSchema {
    return this
      ? {
          name: this.getName(),
          message: this.getMessage(),
        }
      : null;
  }
}

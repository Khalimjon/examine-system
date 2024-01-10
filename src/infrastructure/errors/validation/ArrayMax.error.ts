import { ErrorEntity } from '../../../domain';

export class ArrayMaxError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('ArrayMaxError').setMessage(`'${field}' must contain less than or equal to ${limit} items`);
  }
}

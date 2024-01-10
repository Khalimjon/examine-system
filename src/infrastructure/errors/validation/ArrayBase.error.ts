import { ErrorEntity } from '../../../domain';

export class ArrayBaseError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('ArrayBaseError').setMessage(`'${field}' is must be a array`);
  }
}

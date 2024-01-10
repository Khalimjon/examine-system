import { ErrorEntity } from '../../../domain';

export class StringBaseError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('StringBaseError').setMessage(`'${field}' is must be a string`);
  }
}

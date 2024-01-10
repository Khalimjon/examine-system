import { ErrorEntity } from '../../../domain';

export class NumberBaseError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('NumberBaseError').setMessage(`'${field}' is must be a number`);
  }
}

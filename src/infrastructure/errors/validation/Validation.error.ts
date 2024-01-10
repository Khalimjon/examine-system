import { ErrorEntity } from '../../../domain';

export class ValidationError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('ValidationError').setMessage(`'${field}' is not validated`);
  }
}

import { ErrorEntity } from '../../../domain';

export class AnyRequiredError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('AnyRequiredError').setMessage(`'${field}' is required field`);
  }
}

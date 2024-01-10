import { ErrorEntity } from '../../../domain';

export class BooleanBaseError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('BooleanBaseError').setMessage(`'${field}' is must be a boolean`);
  }
}

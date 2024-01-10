import { ErrorEntity } from '../../../domain';

export class StringEmailError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('StringEmailError').setMessage(`'${field}' is must be email`);
  }
}

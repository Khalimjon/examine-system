import { ErrorEntity } from '../../../domain';

export class StringEmptyError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('StringEmptyError').setMessage(`'${field}' is empty field`);
  }
}

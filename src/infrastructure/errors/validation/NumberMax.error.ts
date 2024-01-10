import { ErrorEntity } from '../../../domain';

export class NumberMaxError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('NumberMaxError').setMessage(`'${field}' must be less than or equal to ${limit}`);
  }
}

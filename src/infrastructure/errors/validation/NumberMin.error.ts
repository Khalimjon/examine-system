import { ErrorEntity } from '../../../domain';

export class NumberMinError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('NumberMinError').setMessage(`'${field}' must be greater than or equal to ${limit}`);
  }
}

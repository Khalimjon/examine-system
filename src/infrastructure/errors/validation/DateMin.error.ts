import { ErrorEntity } from '../../../domain';

export class DateMinError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('DateMinError').setMessage(`'${field}' must be greater than or equal to ${limit}`);
  }
}

import { ErrorEntity } from '../../../domain';

export class DateMaxError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('DateMaxError').setMessage(`'${field}' must be less than or equal to ${limit}`);
  }
}

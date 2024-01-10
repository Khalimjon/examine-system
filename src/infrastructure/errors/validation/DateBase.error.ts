import { ErrorEntity } from '../../../domain';

export class DateBaseError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('DateBaseError').setMessage(`'${field}' is must be a date`);
  }
}

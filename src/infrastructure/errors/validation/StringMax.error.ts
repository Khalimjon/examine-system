import { ErrorEntity } from '../../../domain';

export class StringMaxError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('StringMaxError').setMessage(
      `'${field}' length must be less than or equal to ${limit} characters long`,
    );
  }
}

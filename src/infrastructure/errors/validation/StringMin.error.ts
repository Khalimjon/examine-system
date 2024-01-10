import { ErrorEntity } from '../../../domain';

export class StringMinError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('StringMinError').setMessage(`'${field}' length must be at least ${limit} characters long`);
  }
}

import { ErrorEntity } from '../../../domain';

export class BinaryMaxError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('BinaryMaxError').setMessage(`'${field}' must be less than or equal to ${limit} bytes`);
  }
}

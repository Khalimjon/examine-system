import { ErrorEntity } from '../../../domain';

export class BinaryMinError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('BinaryMinError').setMessage(`'${field}' must be at least ${limit} bytes`);
  }
}

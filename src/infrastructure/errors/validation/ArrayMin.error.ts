import { ErrorEntity } from '../../../domain';

export class ArrayMinError extends ErrorEntity {
  constructor(field: string, limit: number) {
    super();
    this.setName('ArrayMinError').setMessage(`'${field}' must contain at least ${limit} items`);
  }
}

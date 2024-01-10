import { ErrorEntity } from '../../../domain';

export class StringTokenError extends ErrorEntity {
  constructor(field: string) {
    super();
    this.setName('StringTokenError').setMessage(
      `'${field}' is must only contain alpha-numeric and underscore characters`,
    );
  }
}

import { ObjectSchema } from 'joi';
import {
  StringEmptyError,
  AnyRequiredError,
  ValidationError,
  StringBaseError,
  ArrayBaseError,
  NumberBaseError,
  BooleanBaseError,
  DateBaseError,
  StringEmailError,
  StringTokenError,
  StringMaxError,
  StringMinError,
  NumberMaxError,
  NumberMinError,
  DateMaxError,
  DateMinError,
  ArrayMaxError,
  ArrayMinError,
  BinaryMaxError,
  BinaryMinError,
} from '../infrastructure';

export class Validation<T> {
  protected _schema: ObjectSchema;

  constructor(schema: ObjectSchema) {
    this._schema = schema;
  }

  async validate(object: T): Promise<T> {
    try {
      await this._schema.validateAsync(object);
      return object;
    } catch (error) {
      const label = error?.details[0]?.context?.label;
      const limit = error?.details[0]?.context?.value;
      const type = error?.details[0]?.type;
      switch (type) {
        case 'any.required':
          throw new AnyRequiredError(label);
        case 'string.base':
          throw new StringBaseError(label);
        case 'string.empty':
          throw new StringEmptyError(label);
        case 'string.email':
          throw new StringEmailError(label);
        case 'string.token':
          throw new StringTokenError(label);
        case 'string.max':
          throw new StringMaxError(label, limit);
        case 'string.min':
          throw new StringMinError(label, limit);
        case 'number.base':
          throw new NumberBaseError(label);
        case 'number.max':
          throw new NumberMaxError(label, limit);
        case 'number.min':
          throw new NumberMinError(label, limit);
        case 'boolean.base':
          throw new BooleanBaseError(label);
        case 'date.base':
          throw new DateBaseError(label);
        case 'date.max':
          throw new DateMaxError(label, limit);
        case 'date.min':
          throw new DateMinError(label, limit);
        case 'array.base':
          throw new ArrayBaseError(label);
        case 'array.max':
          throw new ArrayMaxError(label, limit);
        case 'array.min':
          throw new ArrayMinError(label, limit);
        case 'binary.max':
          throw new BinaryMaxError(label, limit);
        case 'binary.min':
          throw new BinaryMinError(label, limit);
        default:
          throw new ValidationError(label);
      }
    }
  }
}

import { validator } from '@felte/validator-yup';
import { createForm, getValue } from 'felte';

import type { ObjectSchema } from 'yup';
import type { AnyObject } from 'yup/lib/types';
import type { AssertsShape, ObjectShape, TypeOfShape } from 'yup/lib/object';
import type { Errors, PartialWritableErrors, SubmitContext } from '@felte/core';

type ValidatorSchema = ObjectSchema<
	ObjectShape,
	AnyObject,
	TypeOfShape<ObjectShape>,
	AssertsShape<ObjectShape>
>;
type Error = PartialWritableErrors<ObjectShape> & Record<string, ObjectShape>;

export class CreateFelteForm {
	constructor(schema: ValidatorSchema, onSubmit: any) {
		this.schema = schema;
		this.onSubmit = onSubmit;
		const { form, data, errors } = createForm({
			extend: validator({ schema: this.schema }),
			validateSchema: this.schema,
			onSubmit: this.onSubmit
		});
		const keys = Object.keys(schema.fields);
		this.keys = keys;
		this.form = form;
		this.formErrors = errors
		this.formData = data;
	}
	private schema: ValidatorSchema;
	private onSubmit: (values: any, context: SubmitContext<any>) => Promise<unknown> | unknown;
	private formData;
	private formErrors;
	private keys: string[];

	private form;

	public createForm() {
    let errors = {}
    let values: Record<string, string> = {}
    this.formErrors.subscribe((error: Errors<ObjectShape>) => {
      errors = Object.keys(error).map((e) => {
        return {
          [e]: error[e],
        }
      })
    });
    for (const key of this.keys) {
      const value: string = getValue(this.formData, key) ?? '';
      values = {
        ...values,
        [key]: value
      };
    }
    return {
      errors,
      values,
      form: this.form
    }
  }
}

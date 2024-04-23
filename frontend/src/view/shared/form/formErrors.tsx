import _ from 'lodash';

export default class FormErrors {
  static errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage = null,
  ) {
    if (externalErrorMessage) {
      return externalErrorMessage;
    }

    if (!isSubmitted && !touched[name]) {
      return null;
    }

    const fieldErrors = _.get(errors,name); // Using lodash's get function to access nested error values.

    return (
      fieldErrors?.[0]?.message ||
      fieldErrors?.message ||
      fieldErrors ||
      null
    );
  }
}

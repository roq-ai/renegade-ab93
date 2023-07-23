import * as yup from 'yup';

export const accountValidationSchema = yup.object().shape({
  account_type: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});

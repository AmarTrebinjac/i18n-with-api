import * as Yup from 'yup';

// The error message should contain the key of the translation
export const basicProfileValidationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
});
import * as Yup from "yup";

export const loginScheme = Yup.object({
    password: Yup.string()
    .required('Password is required')
    .min(3,"Password must be at least 3 characters"),
    email: Yup.string()
    .required("Email is required")
    .email('Email is invalid'),
});
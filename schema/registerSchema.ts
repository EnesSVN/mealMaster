import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

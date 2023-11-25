import * as Yup from "yup";

export const adminSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

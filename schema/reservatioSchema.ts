import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  persons: Yup.number()
    .min(1, "Must be at least 1 person")
    .required("Number of persons is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string(),
});

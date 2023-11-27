import * as Yup from "yup";

export const profilSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  job: Yup.string().required("Job is required"),
  bio: Yup.string().required("Bio is required"),
  address: Yup.string().required("Address is required"),
});

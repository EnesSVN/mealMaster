import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { registerSchema } from "@/schema/registerSchema";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";

function Register() {
  const inputs = [
    { id: 1, type: "email", name: "email", placeholder: "Your Email" },
    { id: 2, type: "text", name: "fullName", placeholder: "Your Full Name" },
    { id: 3, type: "password", name: "password", placeholder: "Your Password" },
    {
      id: 4,
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
    },
  ];

  type FormValues = {
    email: string;
    fullName: string;
    password: string;

    confirmPassword: string;
  };

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(values);
    resetForm();
  };

  const {
    handleChange,
    errors,
    handleSubmit,
    values,
    touched,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: registerSchema,
  });

  return (
    <div className=" container mx-auto ">
      <form
        className=" flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title text="Register" MyClassName="text-4xl mb-6" />
        <div className="flex flex-col gap-y-4 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={values[input.name as keyof typeof values]}
              errorMessage={errors[input.name as keyof typeof errors]}
              onBlur={handleBlur}
              touched={touched[input.name as keyof typeof touched]}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className=" w-full flex flex-col gap-y-3 mt-4">
          <button className="btn-primary  w-full">Login</button>{" "}
          <Link href="/auth/login">
            {" "}
            <p className=" text-start underline">
              Already have an account?{" "}
              <span className="text-primary">Login</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
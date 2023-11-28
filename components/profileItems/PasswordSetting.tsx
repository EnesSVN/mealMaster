import { useFormik } from "formik";
import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { passwordSchema } from "@/schema/passwordSchema";

function PasswordSetting() {
  type FormValues = {
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
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: passwordSchema,
  });

  const inputs = [
    {
      id: 1,
      type: "password",
      name: "password",
      placeholder: "Your Password",
    },
    {
      id: 2,
      type: "password",
      name: "confirmPassword",
      placeholder: "Your Confirm Password",
    },
  ];
  return (
    <form
      className=" lg:p-8 mb-10 lg:my-0 mt-5 flex-1 "
      onSubmit={handleSubmit}
    >
      <Title text="Password" MyClassName=" text-4xl " />
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-4 my-5">
        {inputs.map((input) => (
          <Input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            key={input.id}
            onChange={handleChange}
            value={values[input.name as keyof typeof values]}
            errorMessage={errors[input.name as keyof typeof errors]}
            onBlur={handleBlur}
            touched={touched[input.name as keyof typeof touched]}
          />
        ))}
      </div>
      <button className="btn-primary  w-36 text-center" type="submit">
        Update
      </button>
    </form>
  );
}

export default PasswordSetting;

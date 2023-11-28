import { profilSchema } from "@/schema/profilSchema";
import { useFormik } from "formik";
import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";

function AccountSetting() {
  type FormValues = {
    fullName: string;
    phoneNumber: string;
    email: string;
    address: string;
    job: string;
    bio: string;
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
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      job: "",
      bio: "",
    },
    onSubmit,
    validationSchema: profilSchema,
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "fullName",
      placeholder: "Your Full Name",
    },
    {
      id: 2,
      type: "Number",
      name: "address",
      placeholder: "Your Phone Number",
    },
    { id: 3, type: "email", name: "email", placeholder: "Your Email" },
    {
      id: 4,
      type: "text",
      name: "address",
      placeholder: "Your Address",
    },
    { id: 5, type: "text", name: "job", placeholder: "Your Job" },
    { id: 6, type: "text", name: "bio", placeholder: "Your Bio" },
  ];

  return (
    <form className=" lg:p-8 lg:mt-0 mt-5 flex-1 " onSubmit={handleSubmit}>
      <Title text="Account Settings" MyClassName=" text-4xl " />
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
      <button className="btn-primary  w-36 text-center">Update</button>
    </form>
  );
}

export default AccountSetting;

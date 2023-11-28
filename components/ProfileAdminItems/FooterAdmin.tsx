import { useFormik } from "formik";
import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { footerSchema } from "@/schema/footerSchema";

function FooterAdmin() {
  type FormValues = {
    location: string;
    phoneNumber: string;
    email: string;
    desc: string;
    day: string;
    time: string;
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
      location: "",
      phoneNumber: "",
      email: "",
      desc: "",
      day: "",
      time: "",
    },
    onSubmit,
    validationSchema: footerSchema,
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "location",
      placeholder: "Your Location",
    },
    { id: 2, type: "email", name: "email", placeholder: "Your Email" },
    {
      id: 3,
      type: "Number",
      name: "phoneNumber",
      placeholder: "Your Phone Number",
    },
    {
      id: 4,
      type: "text",
      name: "desc",
      placeholder: "Your Description",
    },
    { id: 5, type: "text", name: "day", placeholder: "write day" },
    { id: 6, type: "text", name: "time", placeholder: "write time" },
  ];

  return (
    <form
      className=" lg:p-8 mb-10 lg:my-0 mt-5 flex-1 "
      onSubmit={handleSubmit}
    >
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
      <button className="btn-primary  w-36 text-center" type="submit">
        Update
      </button>
    </form>
  );
}

export default FooterAdmin;

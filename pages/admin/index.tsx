import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { adminSchema } from "@/schema/adminSchema";
import { useFormik } from "formik";
import React from "react";

function Admin() {
  const inputs = [
    { id: 1, type: "text", name: "username", placeholder: "Your Username" },
    { id: 2, type: "password", name: "password", placeholder: "Your Password" },
  ];

  type FormValues = {
    username: string;
    password: string;
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
      username: "",
      password: "",
    },
    onSubmit,
    validationSchema: adminSchema,
  });

  return (
    <div className=" container mx-auto ">
      <form
        className=" flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title text="Admin Login" MyClassName="text-4xl mb-6" />
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
          <button className="btn-primary  w-full"> Login</button>{" "}
        </div>
      </form>
    </div>
  );
}

export default Admin;

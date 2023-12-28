import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { adminSchema } from "@/schema/adminSchema";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";

function Admin() {
  const { push } = useRouter();
  const inputs = [
    { id: 1, type: "text", name: "username", placeholder: "Your Username" },
    { id: 2, type: "password", name: "password", placeholder: "Your Password" },
  ];

  type FormValues = {
    username: string;
    password: string;
  };
  const api = process.env.NEXT_PUBLIC_API_URL;
  const onSubmit = async (values: FormValues) => {
    try {
      const res = await axios.post(`${api}/admin`, values);
      if (res.status === 200) {
        resetForm();
        toast.success("Login Success");
        push("/admin/profile");
      }
    } catch (error) {}
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

export const getServerSideProps = (ctx: any) => {
  const { token } = ctx?.req?.cookies;

  if (token) {
    if (jwt?.verify(token, "ADMIN").username === "admin") {
      return {
        redirect: {
          destination: "/admin/profile",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {},
  };
};
export default Admin;

import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { registerSchema } from "@/schema/registerSchema";
import axios from "axios";
import { useFormik } from "formik";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

function Register() {
  const { push } = useRouter();

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
    const api = process.env.NEXT_PUBLIC_API_URL;
    try {
      console.log(values);
      const res = await axios.post(`${api}/users/register`, values);
      if (res.status === 200) {
        toast.success("Register Success");
        resetForm();
        push("/auth/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
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
          <button className="btn-primary w-full" type="submit">
            Register
          </button>{" "}
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

export async function getServerSideProps({ req: any }) {
  const session = await getSession({ req: any });

  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Register;

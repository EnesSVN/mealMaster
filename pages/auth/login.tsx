import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { logınSchema } from "@/schema/loginSchema";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { signIn, getSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function Login() {
  const { push } = useRouter();

  const inputs = [
    { id: 1, type: "email", name: "email", placeholder: "Your Email" },
    { id: 2, type: "password", name: "password", placeholder: "Your Password" },
  ];

  type FormValues = {
    email: string;
    password: string;
  };

  const onSubmit = async (values: FormValues) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };

    try {
      const res = await signIn("credentials", options);
      if (res.status === 200) {
        toast.success("Login Success");
        resetForm();
        push("/profile");
      }
    } catch (error) {
      toast.error("Login Failed");
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
      password: "",
    },
    onSubmit,
    validationSchema: logınSchema,
  });

  return (
    <div className=" container mx-auto ">
      <form
        className=" flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title text="Login" MyClassName="text-4xl mb-6" />
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
          <button className="btn-primary  w-full" type="submit">
            Login
          </button>{" "}
          <button
            className="btn-primary w-full !bg-secondary"
            type="button"
            onClick={() => signIn("github")}
          >
            GITHUB
          </button>
          <Link href="/auth/register">
            {" "}
            <p className=" text-start underline">
              {"Don't have an account? "}
              <span className="text-primary ">Register</span>
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
export default Login;

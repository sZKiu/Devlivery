"use client";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, ErrorMessage, Field, FormikProps } from "formik";

const validateName = (values: string) => {
  let name = "";

  if (!values) {
    name = "Required";
  } else if (values.length > 18) {
    name = "Too long";
  } else if (values.length < 4) {
    name = "Too short";
  }

  return name;
};

const validatePassword = (values: string) => {
  let password = "";

  if (!values) {
    password = "Required";
  } else if (values.length > 254) {
    password = "Too long";
  } else if (values.length < 4) {
    password = "Too short";
  }

  return password;
};

function Formularie() {
  const [fieldValue, setFieldValue] = useState<string | null | ArrayBuffer>(
    null
  );
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      initialStatus={false}
      onSubmit={(
        { name, password },
        { setStatus, setSubmitting, resetForm }
      ) => {
        const values = {
          name,
          password,
          img: fieldValue,
        };
        localStorage.setItem("account-devlivery-sk", JSON.stringify(values));
        setSubmitting(false);
        setStatus(true);
        setTimeout(() => {
          resetForm();
          router.replace("/");
        }, 1300);
      }}
    >
      {({ status }: FormikProps<any>) => (
        <Form className="relative flex flex-col gap-8 items-center">
          <h1 className="text-center font-semibold text-2xl pt-4">
            Login to Unlock new Things
          </h1>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-zinc-800">
                Write your name
              </label>
              <Field
                validate={validateName}
                name="name"
                id="name"
                className="border border-zinc-300 rounded-md py-0.5 pl-2 text-sm outline-none text-zinc-700"
              />
              <ErrorMessage
                component="p"
                name="name"
                className="text-xs text-orange-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="img" className="text-sm text-zinc-800">
                Select your Profile Picture
              </label>
              <input
                id="img"
                name="img"
                type="file"
                accept="image/*"
                className="w-full text-xs text-transparent bg-gray-50 focus:outline-none"
                onChange={(e) => {
                  if (e.target.files !== null) {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(e.target.files[0]);

                    fileReader.addEventListener("load", (e) => {
                      if (e.target) {
                        setFieldValue(e.target.result);
                      }
                    });
                  }
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm text-zinc-800">
                Write your pasword
              </label>
              <Field
                validate={validatePassword}
                name="password"
                id="password"
                type="password"
                className="border border-zinc-300 rounded-md py-0.5 pl-2 text-sm outline-none text-zinc-700"
              />
              <ErrorMessage
                component="p"
                name="password"
                className="text-xs text-orange-500"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-orange-400 rounded-lg border border-zinc-400 text-white transition duration-300 hover:bg-zinc-800"
            >
              Log In
            </button>
          </div>

          {status ? (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 p-4 bg-white border border-zinc-400 font-semibold rounded-lg text-green-500">
              <span>You have succesfully logged</span>
            </div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
}

export default Formularie;

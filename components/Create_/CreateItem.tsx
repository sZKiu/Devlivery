"use client";
import React, { useState, useEffect, Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { addProduct } from "../../redux/slices/allProductsSlice";
import { useDispatch } from "react-redux";
import { Cat } from "../../assets/imgData/imgData";
import { MdFastfood } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";

const validateName = (values: string) => {
  let name = "";

  if (!values) {
    name = "Name required";
  } else if (values.length > 18) {
    name = "Name too long";
  } else if (values.length < 4) {
    name = "Name too short";
  }

  return name;
};

const validateCategorie = (values: string) => {
  let categorie = "";

  if (!values) {
    categorie = "Categorie required";
  }
  return categorie;
};

const validatePrice = (values: number) => {
  let price = "";

  if (!values && values !== 0) {
    price = "Price required";
  } else if (values > 300) {
    price = "Price too expensive";
  } else if (values < 5) {
    price = "Price very cheap";
  }

  return price;
};

const validateCalories = (values: number) => {
  let calories = "";

  if (!values && values !== 0) {
    calories = "Calories required";
  } else if (values > 300) {
    calories = "Less than 300 calories";
  } else if (values < 5) {
    calories = "More than 5 calories";
  }

  return calories;
};

function CreateItem() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showImg, setShowImg] = useState({
    loading: false,
    toShow: false,
  });
  const [img, setImg] = useState<string>();

  useEffect(() => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  }, [img]);

  useEffect(() => {
    setShowModal(false);
    setShowAll(true);
  }, []);

  const validateImg = (values: string) => {
    let image = "";

    console.log(!showImg.toShow);

    if (!showImg.toShow) {
      image = "Image required";
    }

    return image;
  };

  return (
    <Formik
      initialValues={{
        name: "",
        category: "",
        calories: "",
        price: "",
        img: "",
      }}
      onSubmit={(values, actions) => {
        if (img) {
          dispatch(
            addProduct({
              name: values.name,
              categorie: values.category.toLocaleLowerCase(),
              price: Number.parseFloat(values.price),
              calories: Number.parseFloat(values.calories),
              img,
            })
          );

          actions.setSubmitting(false);
          actions.setStatus(true);
          setTimeout(() => {
            actions.resetForm();
            router.replace("/");
          }, 1300);
        }
      }}
    >
      {(props) => {
        return (
          <Form
            autoComplete="off"
            className="relative grid gap-4 w-1/2 px-4 pt-4 my-0 mx-auto border border-zinc-300"
          >
            <div className="flex items-center gap-2 h-7 border border-transparent border-b-zinc-400">
              <MdFastfood className="text-zinc-700" />
              <div className="w-full">
                <Field
                  validate={validateName}
                  required
                  name="name"
                  placeholder="Give me a title..."
                  className="h-full text-sm bg-transparent outline-none w-full text-zinc-700"
                />
              </div>
            </div>

            <div className="w-full">
              <Field
                validate={validateCategorie}
                name="category"
                component="select"
                className="h-7 w-full text-sm outline-none"
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                {Cat.map((el: string, i: number) => {
                  return (
                    <option value={el} key={i}>
                      {el}
                    </option>
                  );
                })}
              </Field>
            </div>

            <div className="relative border border-zinc-400 rounded-xl h-[16rem] flex justify-center items-center ">
              {showAll ? (
                <Fragment>
                  {img ? null : (
                    <div className="flex flex-col justify-center items-center text-zinc-700">
                      <AiOutlineCloudUpload className="text-3xl" />

                      <span className="text-sm">Click here to upload</span>
                    </div>
                  )}

                  <Field
                    validate={validateImg}
                    type="file"
                    name="img"
                    value=""
                    accept="image/*"
                    className="opacity-0 absolute top-0 bottom-0 right-0 left-0 cursor-pointer"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.files) {
                        const file = e.target.files[0];
                        const fileReader = new FileReader();
                        fileReader.readAsDataURL(file);

                        fileReader.addEventListener("progress", (e) => {
                          setShowImg({
                            loading: true,
                            toShow: true,
                          });
                        });

                        fileReader.addEventListener("load", (e) => {
                          setShowImg({ loading: false, toShow: true });
                          if (
                            e.target?.result &&
                            !(e.target?.result instanceof ArrayBuffer)
                          ) {
                            setImg(e.target?.result);
                          }
                        });
                      }
                    }}
                  />
                </Fragment>
              ) : (
                <ClipLoader color="#f97316" size={25} />
              )}

              {showImg.toShow ? (
                showImg.loading ? (
                  <ClipLoader color="#f97316" size={25} />
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <img src={img} alt="ImageSelected" className="h-[8rem]" />
                  </div>
                )
              ) : null}
            </div>

            <div className="h-7 flex justify-between">
              <div className="w-[48%] flex items-center gap-2 border border-transparent border-b-zinc-400">
                <GiKnifeFork className="text-zinc-700" />
                <Field
                  validate={validateCalories}
                  placeholder="Calories"
                  min="0"
                  max="2000"
                  type="number"
                  name="calories"
                  className="w-full h-full outline-none bg-transparent text-sm text-zinc-700"
                />
              </div>

              <div className="w-[48%] flex items-center gap-2 border border-transparent border-b-zinc-400">
                <FaDollarSign className="text-zinc-700" />
                <Field
                  validate={validatePrice}
                  min="0"
                  max="200"
                  type="number"
                  placeholder="Price"
                  name="price"
                  className="w-full h-full outline-none bg-transparent text-sm text-zinc-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="py-1 px-8 justify-self-end bg-green-500 text-white font-medium rounded-lg w-fit"
            >
              Save
            </button>

            <div>
              {showModal ? (
                <div className="absolute z-[500] top-4 left-1/2 -translate-x-1/2 py-2 px-4 bg-green-800 font-semibold rounded-lg text-white">
                  <span>Image uploaded succesfully</span>
                </div>
              ) : null}

              <ErrorMessage
                className="absolute top-4 left-1/2 w-[14rem] flex justify-center -translate-x-1/2 py-2 px-4 bg-red-800 font-semibold rounded-lg text-white"
                name="name"
                component="p"
              />

              <ErrorMessage
                className="absolute top-4 left-1/2 w-[14rem] flex justify-center -translate-x-1/2 py-2 px-4 bg-red-800 font-semibold rounded-lg text-white"
                name="category"
                component="p"
              />

              {img ? null : (
                <ErrorMessage
                  className="absolute top-4 left-1/2 w-[14rem] flex justify-center -translate-x-1/2 py-2 px-4 bg-red-800 font-semibold rounded-lg text-white"
                  name="img"
                  component="p"
                />
              )}

              <ErrorMessage
                className="absolute top-4 left-1/2 w-[14rem] flex justify-center -translate-x-1/2 py-2 px-4 bg-red-800 font-semibold rounded-lg text-white"
                name="calories"
                component="p"
              />

              <ErrorMessage
                className="absolute top-4 left-1/2 w-[14rem] flex justify-center -translate-x-1/2 py-2 px-4 bg-red-800 font-semibold rounded-lg text-white"
                name="price"
                component="p"
              />
            </div>

            {props.status ? (
              <div className="absolute top-8 left-1/2 -translate-x-1/2 p-4 w-max bg-white border border-zinc-400 font-semibold rounded-lg text-green-500">
                <span>You have succesfully posted a food</span>
              </div>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
}

export default CreateItem;

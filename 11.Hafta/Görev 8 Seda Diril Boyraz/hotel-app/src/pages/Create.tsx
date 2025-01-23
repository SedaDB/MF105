import { Field, Form, Formik } from "formik";
import Container from "../components/container";
import { toast } from "react-toastify";
import useAxios from "../hooks/useAxios";
import axios from "axios";
import { object, string, number, date, InferType, boolean } from "yup";

export default function Create() {
  const validationScheme = object().shape({
    name: string().required("Ad ismi zorunludur."),
    description: string().required("Açıklama ismi zorunludur.")
      .min(10, "Adres en az 10 karakter olmalıdır.")
      .max(255, "Adres en fazla 255 karakter olmalıdır."),
    email: string()
      .required("Email ismi zorunludur.")
      .email("Email formatı yanlış."),
    location: string().required("Lokasyon zorunludur."),
    address: string()
      .required("Adres zorunludur.")
      .min(10, "Adres en az 10 karakter olmalıdır.")
      .max(255, "Adres en fazla 255 karakter olmalıdır."),
    rating: number()
      .required("Rating zorunludur.")
      .positive("Rating pozitif bir sayıdır")
      .integer("Rating integer olmalıdırr")
      .min(1, "Rating minimum 1 olmalıdır")
      .max(5, "Rating maximum 5 olmalıdır"),
    price_per_night: number()
      .positive("Pozitif bir sayıdır")
      .required("Price per night zorunludur."),
    image_url: string()
      .url("Doğru formatta bir url girmen gerekiyor.")
      .required("Image url zorunludur."),
    availability: boolean().required("Availability zorunludur."),
  });

  const apiResponse = useAxios("/api/places", {
    method: "POST",
    body: {
      name: "Rizenin Gülü",
      location: "Rize, Türkiye",
      address: "Rize merkez",
      description:
        "A charming bungalow located right by the beach, perfect for a relaxing getaway.",
      amenities: [
        "Beach Access",
        "Free Breakfast",
        "Air Conditioning",
        "Private Terrace",
      ],
      rating: 5,
      price_per_night: 155,
      availability: true,
      image_url: "/pic2.webp",
    },
  });

  console.log("apiResponse", apiResponse);

  const inputs = [
    { name: "name", label: "Name", placeholder: "Exp:Hotel" },
    { name: "location", label: "Location", placeholder: "Exp:Ankara" },
    { name: "address", label: "Address", placeholder: "Exp:Kızılay" },
    {
      name: "description",
      label: "Description",
      placeholder:
        "Exp:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl aliquam nunc.",
    },
    {
      name: "amenities",
      label: "Amenities",
      placeholder: "Exp:Wifi, Parking, Air Conditioning",
    },
    { name: "rating", label: "Rating", placeholder: "Exp:5" },
    {
      name: "price_per_night",
      label: "Price Per Night",
      placeholder: "Exp:100",
    },
    {
      name: "availability",
      label: "Availability",
      placeholder: "Exp:true",
      type: "checkbox",
    },
    {
      name: "image_url",
      label: "Image Url",
      placeholder: "Exp:https://www.example.com/image.jpg",
    },
    { name: "id", label: "Id", placeholder: "Exp:1" },
  ];

  const onSubmit = (values: any) => {
    console.log(values);
    createPost(values);
  };

  const createPost = (values: any) => {
    axios
      .post("http://localhost:4001/api/places", values)
      .then((response) => {
        console.log("response", response);
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
    console.log(values);
  };

  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          email: "test@example.com",
          location: "",
          address: "",
          description: "",
          amenities: "",
          rating: "",
          price_per_night: "",
          image_url: "",
          availability: false,
        }}
        onSubmit={onSubmit}
        validationSchema={validationScheme}
      
      >
        {({ errors, touched, validateField, validateForm }) => (

          <Form className="max-w-2xl mx-auto grid gap-5">
            {inputs?.map((input, index) => (
              <div key={input?.name + index} className="field">
                <label className="font-semibold">{input?.label}</label>
                <Field
                  type="text"
                  name={input?.name}
                  placeholder={input?.placeholder}
                  className={input?.type !== "checkbox" ? "input w-full" : ""}
                />
                <label className="font-semibold text-red-500">
                  {touched[input?.name] && errors[input?.name]}
                </label>
              </div>
            ))}
            <button
              // disabled={true}
              type="submit"
              className="my-5 bg-blue-500 py-2 px-6 text-white font-bold rounded-md transition hover:bg-blue-600"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

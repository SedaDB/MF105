import { Field, Form } from "formik";
import Container from "../components/container";
import { toast } from "react-toastify";
import useAxios from "../hooks/useAxios";
import axios from "axios";
import { z, object, string, number, boolean } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const validationScheme = object({
  name: string("Ad ismi zorunludur."),
  description: string("Açıklama ismi zorunludur.")
    .min(10, "Adres en az 10 karakter olmalıdır.")
    .max(255, "Adres en fazla 255 karakter olmalıdır."),
  email: string().email("Email formatı yanlış."),
  location: string("Lokasyon zorunludur."),
  address: string()
    .min(10, "Adres en az 10 karakter")
    .max(255, "Adres en fazla 255 karakter"),
  rating: number("Rating zorunludur.")
    .positive("Rating pozitif bir sayıdır")
    .min(1, "Rating minimum 1 olmalıdır")
    .max(5, "Rating maximum 5 olmalıdır"),
  price_per_night: number("Price per night zorunludur.").positive(
    "Pozitif bir sayıdır"
  ),
  image_url: string().url("Doğru formatta bir url girmen gerekiyor."),
  availability: boolean("Availability zorunludur."),
});

export default function CreateHooksForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(validationScheme),
    defaultValues: {
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
    },
  });

  type FormData = z.infer<typeof validationScheme>;

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

  const onSubmit = (values: FormData) => {
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

  console.log("errors", errors);

  useEffect(() => {
    toast.error(errors.address?.message);
  }, [errors]);

  //console.log(watch("description")) // watch input value by passing the name of it
  return (
    <Container>
      <div className="max-w-2xl mx-auto grid gap-5">
        {inputs?.map((input, index) => (
          <div key={input?.name + index} className="field">
            <label className="font-semibold">{input?.label}</label>
            <input
              type="text"
              name={input?.name}
              placeholder={input?.placeholder}
              className={input?.type !== "checkbox" ? "input w-full" : ""}
              {...register(input?.name as keyof FormData)}
            />
            {errors[input?.name as keyof FormData] && (
              <label className="font-semibold text-red-500">
                {errors[input?.name as keyof FormData]?.message}
              </label>
            )}
          </div>
        ))}
        <button
          // disabled={true}
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="my-5 bg-blue-500 py-2 px-6 text-white font-bold rounded-md transition hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </Container>
  );
}

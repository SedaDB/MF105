import { toast } from "react-toastify";
import Container from "../components/container";
import useAxios from "../hooks/useAxios";
import Card from "../components/card";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import cityData from "../data/city.json";
import axios from "axios";
export default function Home() {
  const [params, setParams] = useSearchParams();

  const [formData, setFormData] = useState({
    location: params?.get("location") || "",
    order: params?.get("order") || "",
    title: params?.get("title") || "",
  });

  const notify = () => toast("Searched Filter!");

  console.log("Params", params, params?.get("location"), params?.get("order"));

  const handleChangeFilter = (
    location: string = "Ankara",
    order: string = "asc",
    title: string = ""
  ) => {
    setParams({ location, order, title });

    notify();
  };

  // useEffect(() => {
  //   handleChangeFilter(formData.location, formData.order, formData.title);
  // }, [formData])

  // http://localhost:4001/api/places

  const apiResponse = useAxios("/api/places");

  const fetchPlaces = async () => {
    // const response = await axios.get(
    //   `http://localhost:4001/api/places?location=${formData.location}&title=${formData.title}&order=${formData.order}`
    // );

    const response = await axios.get(`http://localhost:4001/api/places`, {
      params: formData,
    });

    console.table(response);
  };

  const createPlaces = async () => {
    const response = await axios.post(`http://localhost:4001/api/places`, {
      "name": "Furkanın Testidir",
      "location": "İstanbul, Türkiye",
      "address": "Sancaktepe",
      "description": "A modern apartment in the city center.",
      "amenities": ["Free WiFi", "Kitchen", "Air conditioning", "Laundry"],
      "rating": 5,
      "price_per_night": 90,
      "availability": false,
      "image_url": "/pic3.jpg"
    },);

    console.table(response);
  };

  const deletePlaces = async (id: string) => {
    //842d5e62-6c55-45ed-ab50-353d75bdbdf5

    await axios.delete(`http://localhost:4001/api/place/${id}`);
  }

  const updatedPlace = async (id: string, params: any) => {
    //842d5e62-6c55-45ed-ab50-353d75bdbdf5

    await axios.put(`http://localhost:4001/api/place/${id}`, params);
  }

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <Container>
      {/* <h1 className="text-3xl font-bold underline">Hello world Home!</h1> */}

      <button
        onClick={() => {
          updatedPlace("d5164ca4-4c85-4970-9f28-98fddbccc86b", {
            "name": "React Native Otel",
            "email": "test@example.com",
            "location": "Rize",
            "address": "Rize Merkez",
            "description": "Test açıklama ",
            "amenities": [
              "Breakfast",
              "Vineyard Tours",
              "Fireplace",
              "Air conditioning",
            ],
            "rating": 5,
            "price_per_night": 150,
            "image_url": "https://picsum.photos/452/452",
            "availability": "true",
          })
        }}
        className="bg-fuchsia-400 p-1 px-4 text-white rounded-md w-fit"
      >
        Update Hotel!
      </button>

      <button
        onClick={() => {
          deletePlaces("842d5e62-6c55-45ed-ab50-353d75bdbdf5")
        }}
        className="bg-red-900 p-1 px-4 text-white rounded-md w-fit"
      >
        Delete Hotel!
      </button>

      <button
        onClick={() => {
          handleChangeFilter(formData.location, formData.order, formData.title);
          fetchPlaces();
        }}
        className="bg-lime-900 p-1 px-4 text-white rounded-md w-fit"
      >
        Filter!
      </button>
      <button
        onClick={() => {
          createPlaces()
        }}
        className="bg-purple-900 p-1 px-4 text-white rounded-md w-fit"
      >
        Create Hotel!
      </button>
      <div className="field">
        <label htmlFor="">Select Location</label>
        <select
          value={formData.location}
          onChange={(e) => {
            setFormData({ ...formData, location: e.target.value });
          }}
        >
          {/* {cityData.map((city: any) => (
            <option value="Ankara">{city.name}</option>
          ))} */}
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>
          <option value="İzmir">İzmir</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="">Search By Hotel Name</label>
        <input
          className="input"
          placeholder="Exp:Hotel"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <button
        onClick={() => {
          setParams({});

          setFormData({ location: "", order: "", title: "" });
        }}
        className="bg-blue-500 p-1 px-4 text-white rounded-md w-fit"
      >
        Clear Filter!
      </button>

      <div className="field">
        <label htmlFor="">Select Order</label>
        <select
          value={formData.order}
          onChange={(e) => setFormData({ ...formData, order: e.target.value })}
        >
          <option value="price-asc">Price low to high</option>
          <option value="price-desc">Price high to low</option>
        </select>
      </div>

      {apiResponse?.data?.places?.map((place) => (
        <Card place={place} />
      ))}
    </Container>
  );
}

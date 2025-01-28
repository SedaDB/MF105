import { toast } from "react-toastify";
import Container from "../components/container";
import useAxios from "../hooks/useAxios";
import Card from "../components/card";
import ExampleComponent from '../components/ExampleComponent'
import { Place } from "../types";

interface ApiResponse {
  places: Place[];
}

export default function Home() {
  const notify = () => toast("Wow so easy!");

  const { data: apiResponse = { places: [] }, error } = useAxios<ApiResponse>("/api/places");

  if (error) {
    return (
      <Container>
        <div className="text-red-500">Veri yüklenirken bir hata oluştu: {error.message}</div>
      </Container>
    );
  }

  return (
    <Container>
      {apiResponse?.places?.map((place: Place) => (
        <Card key={place.id} place={place} />
      ))}

      <button
        onClick={notify}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Notify!
      </button>

      <ExampleComponent />
    </Container>
  );
}

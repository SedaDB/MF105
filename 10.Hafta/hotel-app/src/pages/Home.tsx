import { toast } from "react-toastify";
import Container from "../components/container";
import useAxios from "../hooks/useAxios";
import Card from "../components/card";
export default function Home() {
  const notify = () => toast("Wow so easy!");

  const apiResponse = useAxios("/api/places");

  console.log("apiResponse.data?.places", apiResponse.data?.places);

  return (
    <Container>
      {/* <h1 className="text-3xl font-bold underline">Hello world Home!</h1> */}

      {apiResponse?.data?.places?.map((place) => (
        <Card place={place} />
      ))}

      <button onClick={notify}>Notify!</button>
    </Container>
  );
}

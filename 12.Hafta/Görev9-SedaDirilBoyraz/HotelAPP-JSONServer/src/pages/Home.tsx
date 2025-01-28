import Container from "../components/container";
import useAxios from "../hooks/useAxios";
import Card from "../components/card";
import { Hotel } from "../services/api";

interface HotelResponse {
  hotels: Hotel[];
}

export default function Home() {
  const { data, loading } = useAxios("/hotels");

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      {(data as HotelResponse)?.hotels?.map((hotel: Hotel) => (
        <Card key={hotel.id} place={{
          id: hotel.id.toString(),
          name: hotel.name,
          description: hotel.description,
          address: hotel.location,
          price_per_night: hotel.price_per_night,
          availability: hotel.availability,
          image_url: hotel.image_url,
          location: hotel.location,
          rating: hotel.rating,
          amenities: hotel.amenities
        }} />
      ))}
    </Container>
  );
}

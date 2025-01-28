export interface Room {
  id: number;
  type: string;
  price: number;
  capacity: number;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
  rooms: Room[];
  price_per_night: number;
  availability: boolean;
  image_url: string;
}

export interface Booking {
  id?: number;
  hotelId: number;
  roomId: number;
  customerName: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
}

export const API_URL = 'http://localhost:3000'; 
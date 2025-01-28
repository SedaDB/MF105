import axios from 'axios';
import { API_URL, Hotel, Booking } from './api';

const api = axios.create({
  baseURL: API_URL,
});

export const hotelService = {
  getAllHotels: () => api.get<Hotel[]>('/hotels'),
  getHotelById: (id: number) => api.get<Hotel>(`/hotels/${id}`),
  searchHotels: (query: string) => api.get<Hotel[]>(`/hotels?q=${query}`),
  createBooking: (booking: Booking) => api.post<Booking>('/bookings', booking),
  getBookings: () => api.get<Booking[]>('/bookings'),
}; 
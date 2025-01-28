import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

interface NewData {
  name: string;
  description: string;
  price: number;
  image: string;
}

function ExampleComponent() {
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery<Item[]>({
    queryKey: ['hotels'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/hotels')
      return response.json()
    }
  })

  const mutation = useMutation({
    mutationFn: async (yeniVeri: NewData) => {
      const response = await fetch('API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(yeniVeri)
      })
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hotels'] })
    }
  })

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
  
  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        Hata: {(error as Error).message}
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Otellerimiz</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={hotel.image} 
              alt={hotel.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{hotel.name}</h2>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-gray-600">{hotel.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{hotel.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  ${hotel.price}
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Rezervasyon Yap
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Admin Panel - Yeni Otel Ekleme Formu */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Yeni Otel Ekle</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          mutation.mutate({
            name: formData.get('name') as string,
            description: formData.get('description') as string,
            price: Number(formData.get('price')),
            image: formData.get('image') as string
          })
        }} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Otel Adı</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Açıklama</label>
            <textarea
              name="description"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Fiyat</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Resim URL</label>
            <input
              type="url"
              name="image"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Otel Ekle
          </button>
        </form>
      </div>
    </div>
  )
}

export default ExampleComponent 
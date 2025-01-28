import Card from '../components/card'
import Container from '../components/container'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router'


export default function Detail() {
  const { id } = useParams()

  const apiDetailResponse = useAxios(`/api/place/${id}`)

  return (
    <Container>{id} - {apiDetailResponse?.data?.message}
      <Card place={apiDetailResponse?.data?.place} />
    </Container>
  )
}

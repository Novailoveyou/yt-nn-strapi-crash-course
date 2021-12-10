import { useParams, useNavigate, Navigate } from 'react-router'
import useFetch from '../hooks/useFetch'

const ReviewDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/reviews/${id}`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div className='review-card'>
      <div className='rating'>{data.attributes.rating}</div>
      <h2>{data.attributes.title}</h2>
      <small>console list</small>
      <p>{data.attributes.body}</p>
      <button className='btn' onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  )
}

export default ReviewDetails

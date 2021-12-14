import { useParams, useNavigate, Navigate } from 'react-router'
import { useQuery, gql } from '@apollo/client'

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`

const ReviewDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className='review-card'>
      <div className='rating'>{data.review?.data?.attributes?.rating}</div>
      <h2>{data.review?.data?.attributes?.title}</h2>
      <small>console list</small>
      <p>{data.review?.data?.attributes?.body}</p>
      <button className='btn' onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  )
}

export default ReviewDetails

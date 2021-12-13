import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
  query GetReviews {
    reviews {
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

const Homepage = () => {
  const { loading, error, data } = useQuery(REVIEWS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data.reviews?.data?.map(item => (
        <div key={item.id} className='review-card'>
          <div className='rating'>{item.attributes.rating}</div>
          <h2>{item.attributes.title}</h2>
          <small>console list</small>
          <p>{item.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${item.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}

export default Homepage

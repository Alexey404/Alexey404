import { Container } from 'react-bootstrap'
import { CardComponent } from './Card'
import './Home.css'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { postType } from '../../redux/reducers/postsReducer'

export const HomePage = () => {
  const post = useSelector((state: AppStateType) => state.post)
  return (
    <>
      <Container>
        <div className='cardContainer'>
          {post.posts.map((e: postType) => (
            <CardComponent key={e.id} post={e} />
          ))}
        </div>
      </Container>
    </>
  )
}

import { Container } from 'react-bootstrap'
import { CardComponent } from './Card'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { postType } from '../../redux/reducers/postsReducer'
import { useEffect } from 'react'

export const HomePage = () => {
  const post = useSelector((state: AppStateType) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GET_POSTS' })
  }, [])

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

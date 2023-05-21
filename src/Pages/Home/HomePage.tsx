import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { postType } from '../../redux/reducers/postsReducer'
import { AppStateType } from '../../redux/store'
import { CardComponent } from './Card'
import './Home.css'
import { GET_POSTS } from '../../redux/actions'

export const HomePage = () => {
  const post = useSelector((state: AppStateType) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_POSTS })
    console.log('render')
  }, [dispatch])

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

import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { postType } from '../../redux/reducers/postsReducer'
import { AppStateType } from '../../redux/store'
import { CardComponent } from '../../Components/Card/Card'
import './Home.css'
import { GET_POSTS } from '../../redux/actions'
import { Loader } from '../../Components/Loader/Loader'

export const HomePage = () => {
  const postState = useSelector((state: AppStateType) => state.postState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_POSTS })
  }, [dispatch])

  return (
    <>
      <Container>
        <div className='cardContainer'>
          {postState.isLoading ? (
            <Loader />
          ) : (
            postState.posts.map((post: postType) => (
              <CardComponent key={post.id} post={post} />
            ))
          )}
        </div>
      </Container>
    </>
  )
}

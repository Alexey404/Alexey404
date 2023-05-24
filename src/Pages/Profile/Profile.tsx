import { useEffect, memo } from 'react'
import { Card, Col, Container, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import { CardComponent } from '../../Components/Card/Card'
import { Loader } from '../../Components/Loader/Loader'
import { GET_PROFILE } from '../../redux/actions'
import { postType } from '../../redux/reducers/postsReducer'
import { AppStateType } from '../../redux/store'
import './Profile.css'

export const Profile = () => {
  const profileState = useSelector((state: AppStateType) => state.profileState)
  const postState = useSelector((state: AppStateType) => state.postState)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: GET_PROFILE,
      id: Number(id),
    })
  }, [dispatch, id])

  if (postState.isError || profileState.isError) {
    return <Navigate to='/error' />
  }

  return (
    <Container>
      <div className='card-сontainer'>
        {postState.isLoading && profileState.isLoading ? (
          <Loader />
        ) : (
          <>
            <Card>
              <div className='card-profile'>
                <Col xs={6} md={4}>
                  <Image src='https://placehold.it/171x180' roundedCircle />
                </Col>
                <div>
                  <h1>Автор: {profileState.author.name}</h1>
                  <div>Почта: {profileState.author.email}</div>
                </div>
              </div>
            </Card>
            {postState.posts.map((post: postType) => (
              <CardComponent key={post.id} post={post} />
            ))}
          </>
        )}
      </div>
    </Container>
  )
}

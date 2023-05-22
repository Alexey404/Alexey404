import { useEffect } from 'react'
import { Card, Col, Container, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { postType } from '../../redux/reducers/postsReducer'
import { AppStateType } from '../../redux/store'
import { CardComponent } from '../../Components/Card/Card'
import './Profile.css'
import { GET_PROFILE } from '../../redux/actions'
import { Loader } from '../../Components/Loader/Loader'

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

  return (
    <Container>
      <div className='cardContainer'>
        {postState.isLoading && profileState.isLoading ? (
          <Loader />
        ) : (
          <>
            <Card>
              <div className='cardProfile'>
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

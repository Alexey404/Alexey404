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
  const profile = useSelector((state: AppStateType) => state.profile)
  const post = useSelector((state: AppStateType) => state.post)
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
        {post.loading && post.loading ? (
          <Loader />
        ) : (
          <>
            <Card>
              <div className='cardProfile'>
                <Col xs={6} md={4}>
                  <Image src='http://placehold.it/171x180' roundedCircle />
                </Col>
                <div>
                  <h1>Автор: {profile.author.name}</h1>
                  <div>Почта: {profile.author.email}</div>
                </div>
              </div>
            </Card>
            {post.posts.map((e: postType) => (
              <CardComponent key={e.id} post={e} />
            ))}
          </>
        )}
      </div>
    </Container>
  )
}

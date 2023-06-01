import { useEffect } from 'react'
import { Card, Col, Container, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { CardComponent } from '../../Components/Card/Card'
import { Loader } from '../../Components/Loader/Loader'
import { GET_PROFILE, LOAD_POSTS } from '../../redux/action/postAction'
import { postType } from '../../redux/reducers/postsReducer'
import { AppStateType } from '../../redux/store'
import './Profile.css'
import { LOAD_AUTOR } from '../../redux/action/profileAction'

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
    return () => {
      dispatch({
        type: LOAD_AUTOR,
      })
      dispatch({
        type: LOAD_POSTS,
      })
    }
  }, [dispatch, id])

  return (
    <Container>
      <div className='card-сontainer'>
        {postState.isLoading && profileState.isLoading ? (
          <Loader />
        ) : (
          <>
            <Card>
              <div className='card-profile'>
                <Col className='images' xs={6} md={4}>
                  <Image src={profileState.author.img} />
                </Col>
                <div className='profile-name-cont'>
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

import { useEffect } from 'react'
import { Card, Col, Container, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { CardComponent } from '../../Components/Card/Card'
import { Loader } from '../../Components/Loader/Loader'
import { GET_PROFILE } from '../../redux/action/postAction'
import { postType } from '../../redux/newRedusers/postsReducer'
import { AppStateType } from '../../redux/store'
import './Profile.css'

export const Profile = () => {
  const authorState = useSelector((state: AppStateType) => state.author)
  const postState = useSelector((state: AppStateType) => state.posts)
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
      <div className='card-сontainer'>
        {postState.isLoading && authorState.isLoading ? (
          <Loader />
        ) : (
          <>
            <Card>
              <div className='card-profile'>
                <Col className='images' xs={6} md={4}>
                  <Image src={authorState.author.img} />
                </Col>
                <div className='profile-name-cont'>
                  <h1>Автор: {authorState.author.name}</h1>
                  <div>Почта: {authorState.author.email}</div>
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

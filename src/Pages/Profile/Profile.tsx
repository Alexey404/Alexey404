import { Card, Col, Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { postType } from '../../redux/reducers/postsReducer'
import { AppStateType } from '../../redux/store'
import { CardComponent } from '../Home/Card'
import './Profile.css'

export const Profile = () => {
  const profile = useSelector((state: AppStateType) => state.profile)
  const post = useSelector((state: AppStateType) => state.post)

  return (
    <Container>
      <div className='cardContainer'>
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
      </div>
    </Container>
  )
}

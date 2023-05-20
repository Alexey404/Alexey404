import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { Card, Container } from 'react-bootstrap'
import { postType } from '../../redux/reducers/postsReducer'
import { CardComponent } from '../Home/Card'
import { Author } from '../Home/Author'

export const Profile = () => {
  const profile = useSelector((state: AppStateType) => state.profile)
  console.log(profile)
  return (
    <Container>
      <div className='cardContainer'>
        <Card>
          <Author author={profile.author} />
        </Card>
        {profile.posts.map((e: postType) => (
          <CardComponent key={e.id} post={e} />
        ))}
      </div>
    </Container>
  )
}

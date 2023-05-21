import Image from 'react-bootstrap/Image'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authorType } from '../redux/reducers/postsReducer'
import { GET_PROFILE } from '../redux/actions'

type propsAuthorType = {
  author: authorType
  content?: string
}

export const Author = (props: propsAuthorType) => {
  const navigation = useNavigate()
  const { name, email, id } = props.author
  const dispatch = useDispatch()

  const clickHandler = (id: number) => {
    navigation('/profile/' + id)
    dispatch({ type: GET_PROFILE, id, author: props.author })
  }

  return (
    <div className='author-block'>
      <Image
        onClick={() => clickHandler(id)}
        className='icon-placehold'
        src='http://placehold.it/48x48/'
      />

      <div>
        <div className='author-name-block'>
          <div className='author-block-item'>{name}</div>
          <div className='author-block-item'>{email}</div>
        </div>
        <div className='comment-content'>{props?.content}</div>
      </div>
    </div>
  )
}

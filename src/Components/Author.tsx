import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom'
import { authorType } from '../redux/reducers/postsReducer'

type propsAuthorType = {
  author: authorType
  content?: string
}

export const Author = (props: propsAuthorType) => {
  const navigation = useNavigate()
  const { name, email, id } = props.author

  return (
    <div className='author-block'>
      <Image
        onClick={() => navigation('/profile/' + id)}
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

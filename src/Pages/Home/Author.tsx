import { Link } from 'react-router-dom'
import { authorType } from '../../redux/reducers/postsReducer'
import Image from 'react-bootstrap/Image'

type propsAuthorType = {
  author: authorType
  content?: string
}

export const Author = (props: propsAuthorType) => {
  const { name, email, id } = props.author
  return (
    <div className='author-block'>
      <Link to='/profile' onClick={() => console.log(id)}>
        <Image className='icon-placehold' src='http://placehold.it/48x48/' />
      </Link>
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

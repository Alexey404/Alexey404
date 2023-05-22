import { ListGroup } from 'react-bootstrap'
import { commentsType, postType } from '../redux/reducers/postsReducer'
import { Author } from './Author'
import { Loader } from './Loader/Loader'

type propsType = {
  post: postType
}

export const Comments = ({ post }: propsType) => {
  return (
    <ListGroup.Item>
      {post.isLoading ? (
        <Loader />
      ) : post.comments[0] ? (
        post.comments.map((comment: commentsType) => (
          <Author
            key={comment.id}
            author={comment.author}
            content={comment.content}
          />
        ))
      ) : (
        <div className='no-comments'>Нет комментариев</div>
      )}
    </ListGroup.Item>
  )
}

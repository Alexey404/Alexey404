import { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { commentsType, postType } from '../../redux/reducers/postsReducer'
import './Home.css'
import { Author } from './Author'
import { useDispatch } from 'react-redux'
import { GET_COMMENTS } from '../../redux/actions'

type propsType = {
  post: postType
}

export const CardComponent = ({ post }: propsType) => {
  const [isComents, setIsComents] = useState(false)
  const dispatch = useDispatch()

  const handlerClick = (id: number) => {
    dispatch({ type: GET_COMMENTS, id: id })
    setIsComents(prev => !prev)
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.heading}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <Card.Text>Автор:</Card.Text>
        <Author author={post.author} />
      </Card.Body>
      <ListGroup variant='flush'>
        {!isComents ? (
          <ListGroup.Item
            className='button-comments'
            onClick={() => handlerClick(post.id)}
          >
            Показать комментарии
          </ListGroup.Item>
        ) : (
          <>
            <ListGroup.Item>
              {post.comments[0] ? (
                post.comments?.map((comment: commentsType) => (
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
            <ListGroup.Item
              className='button-comments'
              onClick={() => setIsComents(prev => !prev)}
            >
              скрыть комментарии
            </ListGroup.Item>
          </>
        )}
      </ListGroup>
    </Card>
  )
}

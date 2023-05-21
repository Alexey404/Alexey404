import { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { GET_COMMENTS } from '../redux/actions'
import { postType } from '../redux/reducers/postsReducer'
import './../Pages/Home/Home.css'
import { Author } from './Author'
import { Comments } from './Comments'

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
            <Comments post={post} />
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

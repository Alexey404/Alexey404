import { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { GET_COMMENTS } from '../../redux/action/postAction'
import { postType } from '../../redux/reducers/postsReducer'
import './Card.css'
import { Author } from '../Author'
import { Comments } from '../Comments'

type propsType = {
  post: postType
}

export const CardComponent = ({ post }: propsType) => {
  const [isComments, setIsComments] = useState(false)
  const dispatch = useDispatch()

  const handlerClick = (id: number) => {
    dispatch({ type: GET_COMMENTS, id })
    setIsComments(prev => !prev)
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.heading}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <div className='container-autor-post'>
          <Card.Text>Автор:</Card.Text>

          <Author author={post.author} />
        </div>
      </Card.Body>

      <ListGroup variant='flush'>
        {!isComments ? (
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
              onClick={() => setIsComments(prev => !prev)}
            >
              Cкрыть комментарии
            </ListGroup.Item>
          </>
        )}
      </ListGroup>
    </Card>
  )
}

import { Card, Container } from 'react-bootstrap'

export const AboutMe = () => {
  return (
    <div>
      <Container>
        <div className='card-сontainer'>
          <Card>
            <Card.Body>
              <h2>Волик Алексей</h2>
              <Card.Title>22 года, родился 1 марта 2001</Card.Title>

              <h4>Контакты:</h4>
              <Card.Text>
                +7 (918) 077-05-22 Желательно писать в Telegram
              </Card.Text>
              <Card.Text>volik.aiii@gmail.com</Card.Text>
              <h4>Основное</h4>
              <Card.Text>
                Я Frontend разработчик с опытом работы 2 годa.
              </Card.Text>

              <Card.Text>
                Мой гит:{' '}
                <a href='https://github.com/Alexey404?tab=repositories'>
                  https://github.com/Alexey404?tab=repositories
                </a>
              </Card.Text>

              <h4>Навыки</h4>
              <Card.Text>
                React, Apollo GraphQL, Redux, Express, TypeScript, Node.js,
                Express
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  )
}

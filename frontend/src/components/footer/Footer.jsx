import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './index.sass'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="copyright">Copyright &copy; Proshop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

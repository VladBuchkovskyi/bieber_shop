import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomeScreen from './screens/HomeScreen'
import './index.css'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App

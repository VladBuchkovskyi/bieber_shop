import React from 'react'
import { Spinner } from 'react-bootstrap'
import './index.sass'

const Loader = () => {
  return (
    <Spinner className="spinner" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

export default Loader

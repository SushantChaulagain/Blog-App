import React from 'react'
import Container from '../components/Container/container'
import Postform from "../components/post-form/Postform"

function AddPost() {
  return (
    <div className="py-6">
      <Container>
        <Postform />
      </Container>
    </div>
  )
}

export default AddPost
import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Container>
        <Link to="/" className='link'><h1>Code 7 Chamados</h1></Link>
    </Container>
  )
}

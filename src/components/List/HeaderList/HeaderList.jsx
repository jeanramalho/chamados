import React from 'react';
import  {Container}  from './HeaderListStyle';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('body')

function HeaderList() {

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
    console.log('aberto')
  }

  function closeModal() {
    setIsOpen(false)
    console.log('fechado')
  }

  return (
        <Container>
            <Link to={`/`} className="link"><h2>chamados</h2></Link>
            <button onClick={openModal}>Criar</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel= "exemplo de Modal"
              overlayClassName= "modal-overlay"
              className= "modal-content"
            >
              <h1>Modal testando funciona por favor</h1>
              <br/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, iure eaque id dicta obcaecati impedit aliquam natus, quod vitae eligendi asperiores non in ab consectetur facere porro sed dignissimos iste!</p>
              <button onClick={closeModal}>Fechar</button>
            </Modal>
        </Container>        
  );
}

export default HeaderList;
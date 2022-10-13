import React from "react";
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import Board from "../components/Board"
import Modal from "../components/Modal"


function EditPage() {
  return (
     <ApolloProvider client={client}>     
        <Header />
        <Modal />
        <GlobalStyle />          
    </ ApolloProvider>
    
        
  
  );
}

export default EditPage;
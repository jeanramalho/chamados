import React from "react";
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import Modal from "../components/Modal"
import List from "../components/List";



function EditPage() {
  return (
     <ApolloProvider client={client}>     
        <Header />
        <List /> 
        <Modal />               
        <GlobalStyle />          
    </ ApolloProvider>
    
        
  
  );
}

export default EditPage;
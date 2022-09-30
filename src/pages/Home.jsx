import React from "react";

import { ApolloProvider } from '@apollo/client'

import { client } from '../lib/apollo'

import Header from "../components/Header";

import GlobalStyle from "../styles/global";

import BoardHome from "../components/BoardHome";

import Modal from "../components/Modal"



function Home() {
  return (
     <ApolloProvider client={client}>   
        <Modal />  
        <Header />
        <BoardHome />
        <GlobalStyle />          
    </ ApolloProvider>
    
        
  
  );
}

export default Home;
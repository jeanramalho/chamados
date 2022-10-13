import React from "react";
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import Board from "../components/Board"


function TicketPages() {
  return (
     <ApolloProvider client={client}>     
        <Header />
        <Board />
        <GlobalStyle />          
    </ ApolloProvider>
    
        
  
  );
}

export default TicketPages;
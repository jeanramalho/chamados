import React from "react";
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import Header from "../components/Header";
import GlobalStyle from "../styles/global";



function TicketPages() {
  return (
     <ApolloProvider client={client}>     
        <Header />
        <GlobalStyle />
    </ ApolloProvider>
    
        
  
  );
}

export default TicketPages;
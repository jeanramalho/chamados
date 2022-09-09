import React from "react";
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import Form from "../components/Form"



function TicketPages() {
  return (
     <ApolloProvider client={client}>     
        <Header />
        <Form />
        <GlobalStyle />
    </ ApolloProvider>
    
        
  
  );
}

export default TicketPages;
import React from "react";
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import Edit from "../components/Edit"



function EditPage() {
  return (
     <ApolloProvider client={client}>     
        <Header />
        <Edit />               
        <GlobalStyle />          
    </ ApolloProvider>
    
        
  
  );
}

export default EditPage;
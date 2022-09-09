import React from "react";
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import GlobalStyle from "./styles/global";
import Router from "./components/Router";
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
     <ApolloProvider client={client}>
       <BrowserRouter>
        <Router />   
        <GlobalStyle />  
       </BrowserRouter>          
    </ ApolloProvider>
    
        
  
  );
}

export default App;

import React from "react";

import { ApolloProvider } from '@apollo/client'

import { client } from './lib/apollo'

import Header from "./components/Header";

import Board from "./components/Board"

import GlobalStyle from "./styles/global";

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Board />
      <GlobalStyle />    
    </ ApolloProvider>
        
  
  );
}

export default App;

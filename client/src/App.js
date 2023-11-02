import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
// import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" Component={Home}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </ApolloProvider>
  );
};

export default App;
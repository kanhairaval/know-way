import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Categories from './components/Categories';

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
          <Route path="/categories" Component={Categories}/>
          <Route path="/login" Component={Login}/>
          <Route path="/register" Component={Register}/>
          <Route path="/about" Component={About}/>
        </Routes>
        <Footer/>
      </Router>
    </ApolloProvider>
  );
};

export default App;
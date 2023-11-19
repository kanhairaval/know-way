import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import NavBar from './components/LoggedInNavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import SuccessRegister from './components/SuccessRegister';
import About from './components/About';
import Search from './components/Search';
import CreateArticle from './components/CreateArticle';
import ArticlesList from './components/ArticlesList';
import ArticleView from './components/ArticleView';
import Career from './components/Career';
import ContactUs from './components/ContactUs';
import { RenderingCategoriesAndSearchProvider } from './utils/eventHandlersProvider';
import { RenderingRegisterModalProvider } from "./utils/eventHandlersProvider";
import { RenderingLoginModalProvider } from "./utils/eventHandlersProvider";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <RenderingCategoriesAndSearchProvider>
        <RenderingRegisterModalProvider>
        <RenderingLoginModalProvider>
          <NavBar/>
          {/* <LoggedInNavBar/> */}
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/search" Component={Search}/>
            <Route path="/login" Component={Login}/>
            <Route path="/register" Component={Register}/>
            <Route path="/successregister" Component={SuccessRegister}/>
            <Route path="/about" Component={About}/>
            <Route path="/createarticle" Component={CreateArticle}/>
            <Route path="/articleslist" Component={ArticlesList}/>
            <Route path="/articleview" Component={ArticleView}/>
            <Route path="/career" Component={Career}/>
            <Route path="/contactus" Component={ContactUs}/>
          </Routes>
          <Footer/>
        </RenderingLoginModalProvider>
        </RenderingRegisterModalProvider>
        </RenderingCategoriesAndSearchProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
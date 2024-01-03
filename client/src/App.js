import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoggedInNavBar from './components/LoggedInNavBar';
import AuthService from "./utils/auth";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import CreateArticle from './components/CreateArticle';
import ArticlesList from './components/ArticlesList';
import ArticleView from './components/ArticleView';
import { RenderingCategoriesAndSearchProvider } from './utils/eventHandlersProvider';
import { RenderingRegisterModalProvider } from "./utils/eventHandlersProvider";
import { RenderingLoginModalProvider } from "./utils/eventHandlersProvider";
import { RenderingContactUsModalProvider } from "./utils/eventHandlersProvider";
import { RenderingCareersModalProvider } from "./utils/eventHandlersProvider";
import { RenderingSuccessfulRegistrationModal } from "./utils/eventHandlersProvider";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <RenderingCategoriesAndSearchProvider>
        <RenderingRegisterModalProvider>
        <RenderingLoginModalProvider>
        <RenderingContactUsModalProvider>
        <RenderingCareersModalProvider>
        <RenderingSuccessfulRegistrationModal>
          {AuthService.loggedIn() && !AuthService.isTokenExpired() ? <LoggedInNavBar/> : <NavBar/>}
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            {AuthService.loggedIn() && !AuthService.isTokenExpired() ? (<Route path="/createarticle" Component={CreateArticle}/>) : (<Route path="/" Component={Home}/>)}
            <Route path="/articleslist" Component={ArticlesList}/>
            <Route path="/articleview" Component={ArticleView}/>
          </Routes>
          <Footer/>
        </RenderingSuccessfulRegistrationModal>
        </RenderingCareersModalProvider>
        </RenderingContactUsModalProvider>
        </RenderingLoginModalProvider>
        </RenderingRegisterModalProvider>
        </RenderingCategoriesAndSearchProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
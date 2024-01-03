import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!, $dOfb: String!) {
    addUser(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password, dOfb: $dOfb) {
      success
      message
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        userName
      }
      success
    }
  }
`;

export const CREATEARTICLE = gql`
  mutation createArticle($title: String!, $categoryName: String!, $content: String!, $author: String, $isFact: Boolean, $isOpinion: Boolean, $siteSources: [String], $articleImage: String) {
    createArticle(title: $title, categoryName: $categoryName, content: $content, author: $author, isFact: $isFact, isOpinion: $isOpinion, siteSources: $siteSources, articleImage: $articleImage) {
      ArticleResponse
    }
  }
`;

export const UPDATEARTICLE = gql`
  mutation updateArticle($_id: ID!, $title: String!, $categoryName: String!, $content: String!, $siteSources: [String], $articleImage: String) {
    updateArticle(_id: $_id, title: $title, categoryName: $categoryName, content: $content, siteSources: $siteSources, articleImage: $articleImage) {
      message
    }
  }
`;
import { gql } from "@apollo/client";

export const RESGISTER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!, $dOfb: String!, $profilePicture: String) {
    addUser(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password, dOfB: $dOfb, profilePicture: $profilePicture) {
      message: "You have successfully registered, please login to create and publish an article."
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATEARTICLE = gql`
  mutation createArticle($title: String!, $categoryName: String!, $content: String!, $author: String, $isFact: Boolean, $isOpinion: Boolean, $siteSources: [String], $articleImage: String) {
    createArticle(title: $title, categoryName: $categoryName, content: $content, author: $author, isFact: $isFact, isOpinion: $isOpinion, siteSources: $siteSources, articleImage: $articleImage) {
      message: "Your article has been successfully published."
    }
  }
`;

export const UPDATEARTICLE = gql`
  mutation updateArticle($_id: ID!, $title: String!, categoryName: String!, $content: String!, $siteSources: String, articleImage: String) {
    updateArticle(_id: $_id, title: $title, categoryName: $categoryName, content: $content, siteSources: $siteSources, articleImage: $articleImage) {
      message: "Article has been successfully updated."
    }
`;
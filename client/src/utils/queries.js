import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
query getArticles($categoryName: String!) {
    articles(categoryName: $categoryName) {
      title
      author
      publicationDate
      isFact
      isOpinion
      categoryName
      content
    }
  }
  `;

export const QUERY_ARTICLE = gql`
query getArticle($title: String!) {
  article(title: $title) {
    title
    author
    publicationDate
    isFact
    isOpinion
    articleImage
    categoryName
    content
  }
}
`;
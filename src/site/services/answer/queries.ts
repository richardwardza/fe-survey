import gql from 'graphql-tag';

export const GET_ANSWERS = gql`
  query getAnswers($uuid: String) {
    getAnswers(uuid: $uuid) {
      id
      question {
        id
        question
        position
      }
      uuid
      answer
      createdAt
      updatedAt
    }
  }
`;

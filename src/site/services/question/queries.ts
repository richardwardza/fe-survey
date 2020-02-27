import gql from 'graphql-tag';

export const GET_QUESTIONS = gql`
  query GetQuestions {
    getQuestions {
      id
      position
      question
      questionType
      active
    }
  }
`; 
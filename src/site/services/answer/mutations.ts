import gql from 'graphql-tag';

export const SAVE_ANSWER = gql`
  mutation saveAnswer($answerInput: AnswerInput) {
    saveAnswer(answerInput: $answerInput) {
      id     
      uuid
      answer
      createdAt
      updatedAt
    }
  }
`;

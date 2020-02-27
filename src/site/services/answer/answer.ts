import { Answer, AnswerInput } from "../../../generated/graphql";
import { ApolloClient } from "apollo-boost";
import { SAVE_ANSWER } from "./mutations";
import { GET_ANSWERS } from "./queries";


export const answerMutation = {
  saveAnswer: async (client: ApolloClient<any>, input: AnswerInput): Promise<Answer> => {
    const { data } = await client.mutate({
      mutation: SAVE_ANSWER,
      variables: {
        answerInput: input
      }
    })
    return data.saveAnswer;
  },
}

export const answerQuery = {
  getAnswers: async (client: ApolloClient<any>, uuid: string): Promise<Answer[]> => {
    const { data } = await client.query({
      query: GET_ANSWERS,
      variables: {
        uuid: uuid
      }
    });
    return data.getAnswers;
  },
}




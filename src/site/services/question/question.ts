import { Question } from "../../../generated/graphql";
import { ApolloClient } from "apollo-boost";
import { GET_QUESTIONS } from "./queries";

export const questionQuery = {
  getQuestions: async (client: ApolloClient<any>): Promise<Question[]> => {

    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: GET_QUESTIONS
    })
    return data.getQuestions;
  },
}
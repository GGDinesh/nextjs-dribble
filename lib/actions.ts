import { createUserMutation, getUserQuery } from "@/graphql";
import { GraphQLClient } from "graphql-request";


const client = new GraphQLClient(apiUrl);
const makeGraphQLRequest = async(query: string, variables={}) => {
    try {
        return await client.request(query, variables)
    } catch (error) {
        throw error;
    }
}

export const getUser = (email: string) => {
    return makeGraphQLRequest(getUserQuery, { email });
  };

  export const createUser = (name: string, email: string, avatarUrl: string) => {
    const variables = {
      input: {
        name: name,
        email: email,
        avatarUrl: avatarUrl
      },
    };
    return makeGraphQLRequest(createUserMutation, variables);
  };
  
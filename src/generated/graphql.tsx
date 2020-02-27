import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type Answer = {
   __typename?: 'Answer',
  id: Scalars['String'],
  question: Question,
  uuid?: Maybe<Scalars['String']>,
  answer?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type AnswerInput = {
  id?: Maybe<Scalars['String']>,
  question?: Maybe<Scalars['String']>,
  uuid?: Maybe<Scalars['String']>,
  answer?: Maybe<Scalars['String']>,
};


export type Mutation = {
   __typename?: 'Mutation',
  saveAnswer?: Maybe<Answer>,
  addQuestion?: Maybe<Question>,
};


export type MutationSaveAnswerArgs = {
  answerInput?: Maybe<AnswerInput>
};


export type MutationAddQuestionArgs = {
  questionInput?: Maybe<QuestionInput>
};

export type Query = {
   __typename?: 'Query',
  getAnswers?: Maybe<Array<Maybe<Answer>>>,
  getQuestions?: Maybe<Array<Maybe<Question>>>,
};


export type QueryGetAnswersArgs = {
  uuid?: Maybe<Scalars['String']>
};

export type Question = {
   __typename?: 'Question',
  id: Scalars['String'],
  position?: Maybe<Scalars['Int']>,
  question?: Maybe<Scalars['String']>,
  questionType?: Maybe<QuestionType>,
  active?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type QuestionInput = {
  position?: Maybe<Scalars['Int']>,
  question?: Maybe<Scalars['String']>,
  questionType?: Maybe<QuestionType>,
  active?: Maybe<Scalars['Boolean']>,
};

export enum QuestionType {
  Text = 'TEXT',
  Dropdown = 'DROPDOWN',
  Toggle = 'TOGGLE',
  Textarea = 'TEXTAREA',
  Email = 'EMAIL',
  Date = 'DATE'
}



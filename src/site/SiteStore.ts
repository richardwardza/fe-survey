import { observable, computed } from 'mobx';
import { Question, AnswerInput, QuestionType } from '../generated/graphql';
import { ApolloClient } from "apollo-boost";
import { questionQuery } from "./services/question/question"
import { answerMutation, answerQuery } from "./services/answer/answer"
import { ChangeEvent } from 'react';
const uuidv4 = require('uuid/v4');

export class SiteStore {
  @observable
  public client: ApolloClient<any>;

  @observable
  public isLoading: boolean = false;

  @observable
  public questions: Question[] = [];

  @observable
  public currentQuestion: number = 0;

  @observable
  public answers: any = {};

  @observable.ref
  public allAnswers: any = {};

  public uuid: string = uuidv4();

  @observable
  public newUUID: string = "";

  constructor(client: ApolloClient<any>) {
    this.client = client;
    this.init();
  }

  async init() {
    await this.getQuestions()
    await this.getAnswers(this.uuid)
  }

  getQuestions = async () => {
    this.questions = await questionQuery.getQuestions(this.client);
    //add ina marker for the download screen
    this.questions.push({
      id: "",
      position: this.questions.length + 1,
      question: "finished",
      questionType: QuestionType.Text,
      active: true,
    });
  }

  getAnswers = async (uuid: string) => {
    const answers = await answerQuery.getAnswers(this.client, uuid);
    answers.forEach(answer => {
      this.allAnswers[answer.question.id] = answer.answer;
      this.answers[answer.question.id] = answer.answer;
    });
  }


  nextQuestion = async () => {
    await this.saveAnswer();
    this.currentQuestion = this.currentQuestion + 1 > this.questions.length - 1 ? this.questions.length - 1 : this.currentQuestion + 1;
  }

  prevQuestion = async () => {
    await this.saveAnswer();
    this.currentQuestion = this.currentQuestion - 1 < 0 ? 0 : this.currentQuestion - 1;
  }

  @computed
  get question(): Question {
    return this.questions[this.currentQuestion];
  }

  @computed
  get currentAnswer(): string {

    return this.answers[this.question.id] || "";
  }

  saveAnswer = async () => {
    const currentAnswer = this.answers[this.question.id];
    const storedAnswer = this.allAnswers[this.question.id];

    if (currentAnswer !== storedAnswer) {
      this.isLoading = true;
      console.log("Loading set")
      const input: AnswerInput = {
        uuid: this.uuid,
        question: this.question.id,
        answer: currentAnswer
      }
      await answerMutation.saveAnswer(this.client, input);
      this.isLoading = false;
      console.log("Loading unset")
    }
    this.allAnswers[this.question.id] = currentAnswer;
  }

  updateAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    if (this.answers[this.question.id] === undefined) {
      this.answers[this.question.id] = "";
    }
    this.answers[this.question.id] = event.target.value;
  }

  updateUUID = async (event: ChangeEvent<HTMLInputElement>) => {
    this.newUUID = event.target.value;
  }

  loadNew = async () => {
    await this.getAnswers(this.newUUID);
  }

  finish = () => {
    console.log("Finished...")
  }

  keyHandler = async (event: KeyboardEvent) => {
    const key = event.key;
    switch (key) {
      case "ArrowRight":
      case "Enter":
        await this.nextQuestion();
        break;
      case "ArrowLeft":
        await this.prevQuestion();
        break;
    }
  }
}
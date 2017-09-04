﻿import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Question } from './question.model';
import { QuestionBase } from './question';
import { QuestionDisplay } from '../questions/question-display';
import { DifficultyLevel } from '../questions/enum-difficultylevel';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class QuestionsService {
    private questionsApiUrl = 'api/question';
    public categorySelected = new BehaviorSubject<any>(null);
    public difficultySelected = new BehaviorSubject<any>(null);
    public isSelected = new BehaviorSubject<any>(false);
    constructor(private httpService: HttpService) {

    }

    /**
     * Add single multiple answer question
     * @param question
     */
    addSingleMultipleAnswerQuestion(question: QuestionBase) {
        return this.httpService.post(this.questionsApiUrl, question);
    }

    /**
     * Update single multiple answer question
     * @param question
     */
    updateSingleMultipleAnswerQuestion(questionId: number, question: QuestionBase) {
        return this.httpService.put(this.questionsApiUrl + '/' + questionId, question);
    }

    /**
     *To get list of Questions
     */
    getQuestions(id: number, categoryId: number, difficultyLevel: string, searchQuestion: string) {
        return this.httpService.get(this.questionsApiUrl + '/' + id + '/' + categoryId + '/' + difficultyLevel + '/' + searchQuestion);
    }

    /**
     * gets list of coding languages
     */
    getCodingLanguage() {
        return this.httpService.get(this.questionsApiUrl + '/codinglanguage');
    }

    /**
     * Calls API to post code snippet question
     * @param question: QuestionBase class object 
     */
    addCodingQuestion(question: QuestionBase) {
        return this.httpService.post(this.questionsApiUrl, question);
    }

    /**
     * Gets Question of specific Id
     * @param id: Id of the Question
     */
    getQuestionById(id: number) {
        return this.httpService.get(this.questionsApiUrl + '/' + id);
    }

    /**
     * API to delete Question
     * @param id:Id to delete Question
     */
    deleteQuestion(id: number) {
        return this.httpService.delete(this.questionsApiUrl + '/' + id);
    }

    /**
     * Calls API to update question by Id
     * @param id: Id of question to be updated
     * @param question: QuestionBase class object
     */
    updateQuestionById(id: number, question: QuestionBase) {
        return this.httpService.put(this.questionsApiUrl + '/' + id, question);
    }
    /**
     * Calls API to get number of questions
     * @param categoryId
     */
    countTheQuestion(categoryId: number, searchQuestion: string) {
        return this.httpService.get(this.questionsApiUrl + '/numberOfQuestions/' + categoryId + '/' + searchQuestion);
    }
}
﻿using Promact.Trappist.DomainModel.Models.Question;
using System.Collections.Generic;

namespace Promact.Trappist.Repository.Questions
{
    public interface IQuestionRepository
    {
        /// <summary>
        /// Get all questions
        /// </summary>
        /// <returns>Question list</returns>
        List<SingleMultipleAnswerQuestion> GetAllQuestions();

        /// <summary>
        /// Add single multiple answer question into SingleMultipleAnswerQuestion model
        /// </summary>
        /// <param name="singleMultipleAnswerQuestion"></param>
        void AddSingleMultipleAnswerQuestion(SingleMultipleAnswerQuestion singleMultipleAnswerQuestion);

        /// <summary>
        /// Add options of single multiple answer question to SingleMultipleAnswerQuestionOption model
        /// </summary>
        /// <param name="singleMultipleAnswerQuestionOption"></param>
        void AddSingleMultipleAnswerQuestionOption(SingleMultipleAnswerQuestionOption singleMultipleAnswerQuestionOption);
    }
    
}
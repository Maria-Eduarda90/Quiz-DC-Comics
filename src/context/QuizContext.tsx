import { createContext, ReactNode, useReducer } from 'react';
import { question } from '../data/questions';

type Action = | { type: 'CHANGE_STATE' } | { type: 'REORDER_QUESTIONS' } | { type: 'CHANGE_QUESTION' };

type ElementChildren = {
    children: ReactNode;
};

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    question,
    currentQuestion: 0,
};

function quizReducer(state: any, action: Action){
    console.log(state, action);
    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
        case "REORDER_QUESTIONS":
            const reorderedQuestions = question.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                question: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if(!question[nextQuestion]){
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
            };

        default:
            return state;
    }
}

export const QuizContext = createContext({} as any);

export function QuizProvider({ children }: ElementChildren){
    const value = useReducer(quizReducer, initialState);

    return(
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
}
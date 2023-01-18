import { createContext, ReactNode, useReducer } from 'react';
import { question } from '../data/questions';

type Action = | { type: 'CHANGE_STATE'}

type ElementChildren = {
    children: ReactNode;
};

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    question,
};

function quizReducer(state: any, action: Action){
    console.log(state, action);
    switch(action.type){
        case "CHANGE_STATE":
            return state;
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
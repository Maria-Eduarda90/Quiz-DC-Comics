import { createContext, ReactNode } from 'react';

type ElementChildren = {
    children: ReactNode;
}

export const QuizContext = createContext({});

export function QuizProvider({ children }: ElementChildren){
    return(
        <QuizContext.Provider value={{ name: 'maria' }}>
            {children}
        </QuizContext.Provider>
    );
}
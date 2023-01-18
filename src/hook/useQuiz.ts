import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export function useQuiz() {
    const context = useContext(QuizContext);

    return context;
}
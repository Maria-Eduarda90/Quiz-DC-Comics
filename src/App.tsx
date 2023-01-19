import { useEffect } from "react";
import { GameOver } from "./components/GameOver";
import { Questions } from "./components/Questions";
import { Welcome } from "./components/Welcome";
import { useQuiz } from "./hook/useQuiz";

export function App() {
  const [quizState, dispatch] = useQuiz();

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);
  
  return (
    <>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver/>}
    </>
  )
}

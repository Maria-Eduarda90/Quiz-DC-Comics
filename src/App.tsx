import { Questions } from "./components/Questions";
import { Welcome } from "./components/Welcome";
import { useQuiz } from "./hook/useQuiz";

export function App() {
  const [quizState, dispatch] = useQuiz();
  
  return (
    <>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </>
  )
}

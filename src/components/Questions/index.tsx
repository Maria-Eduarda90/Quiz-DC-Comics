import { useQuiz } from '../../hook/useQuiz';
import styles from './styles.module.scss';

export function Questions(){
    const [quizState, dispatch] = useQuiz();
    const currentQuestion = quizState.question[quizState.currentQuestion];
    
    return(
        <div className={styles.container}>
            <div className={styles.questions}>
                <p>
                    Pergunta {quizState.currentQuestion + 1} de {quizState.question.length}
                </p>
                <h2>
                    {currentQuestion.question}
                </h2>
                <div className={styles.optionsContainer}>
                    <p>Opções</p>
                </div>
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
            </div>
        </div>
    );
}
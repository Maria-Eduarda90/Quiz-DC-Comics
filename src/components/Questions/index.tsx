import { useQuiz } from '../../hook/useQuiz';
import { Option } from '../Option';
import styles from './styles.module.scss';

export function Questions(){
    const [quizState, dispatch] = useQuiz();
    const currentQuestion = quizState.question[quizState.currentQuestion];

    function onSelectOption(option: string){
        dispatch({
            type: "CHECK_ANSWER",
            payload: {
                answer: currentQuestion.answer, option
            },
        })
    }
    
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
                    <Option
                      selectOption={() => onSelectOption(currentQuestion.options)}
                      answer={currentQuestion.answer} 
                      option={currentQuestion.options.map((option: string) => {
                        return(
                            <div
                                className={`${quizState.answerSelected && option === currentQuestion.answer ? styles.correct : ''} 
                                ${quizState.answerSelected && option !== currentQuestion.answer ? styles.wrong : ''}`} 
                             key={option} 
                             onClick={() => onSelectOption(option)}
                            >
                                <p>{option}</p>
                            </div>
                        );
                    })} />
                </div>
                {quizState.answerSelected && (
                    <button
                        onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
                    >
                        Continuar
                    </button>
                )}
            </div>
        </div>
    );
}
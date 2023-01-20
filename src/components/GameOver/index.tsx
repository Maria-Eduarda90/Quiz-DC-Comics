import { useQuiz } from '../../hook/useQuiz';
import styles from './styles.module.scss';

import ImgDone from '../../img/done.png';

export function GameOver(){
    const [quizState, dispatch] = useQuiz();

    return(
        <div className={styles.done}>
            <h2>Fim de jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.question.length} perguntas</p>
            <img src={ImgDone} alt="Fim do quiz" />
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
        </div>
    );
}
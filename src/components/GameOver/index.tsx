import { useQuiz } from '../../hook/useQuiz';
import styles from './styles.module.scss';

import ImgDone from '../../img/done.png';

export function GameOver(){
    const [quizState, dispatch] = useQuiz();

    return(
        <div className={styles.done}>
            <h2>Fim de jogo!</h2>
            <p>Pontuação: x</p>
            <p>Você acertou y de z perguntas</p>
            <img src={ImgDone} alt="Fim do quiz" />
            <button>Reiniciar</button>
        </div>
    );
}
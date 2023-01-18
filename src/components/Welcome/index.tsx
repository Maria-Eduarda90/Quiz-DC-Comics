import styles from './styles.module.scss';
import HomeDc from '../../img/home.png';
import { useQuiz } from '../../hook/useQuiz';

export function Welcome(){
    const [quizState, dispatch] = useQuiz();
    
    console.log(quizState);
    return(
        <div className={styles.container}>
            <h1>Seja bem vindo!</h1>
            <img src={HomeDc} alt="" />
            <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>Começar Quiz</button>
        </div>
    );
}
import styles from './styles.module.scss';
import HomeDc from '../../img/home.png';
import { useQuiz } from '../../hook/useQuiz';

export function Welcome(){
    const teste = useQuiz();
    console.log(teste)
    return(
        <div className={styles.container}>
            <h1>Seja bem vindo!</h1>
            <img src={HomeDc} alt="" />
            <button>Começar Quiz</button>
        </div>
    );
}
import classNames from "classnames";
import styles from './styles.module.scss';

interface RunningMessageProps {
    message: string;
    direction: string;
}

const RunningMessage:React.FC<RunningMessageProps> = ({message, direction}) => {
    let cls = {
        [styles.fromRight] : direction === "from-right",
        [styles.fromLeft] : direction === "from-left",
    }

    return (
        <div className={styles.runningMessage}>
            <div className={styles.runningMessage__container}>
                <div className={classNames(cls)}>
                    <h1>{message}</h1>
                </div>
                <div className={classNames(cls)}>
                    <h1>{message}</h1>
                </div>


            </div> 
        </div>
    );
}

export default RunningMessage;
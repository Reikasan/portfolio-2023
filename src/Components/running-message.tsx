import classNames from "classnames";

interface RunningMessageProps {
    message: string;
    direction: string;
}

const RunningMessage:React.FC<RunningMessageProps> = ({message, direction}) => {
    let cls = {
        "running-message__text": true,
        'from-right' : direction === "from-right",
        'from-left': direction === "from-left",
    }

    return (
        <div className="running-message">
            <p className={classNames(cls)}>{message}</p>
        </div>
    );
}

export default RunningMessage;
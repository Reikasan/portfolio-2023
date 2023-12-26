import classNames from "classnames";

interface RunningMessageProps {
    message: string;
    direction: string;
}

const RunningMessage:React.FC<RunningMessageProps> = ({message, direction}) => {
    let cls = {
        'from-right' : direction === "from-right",
        'from-left': direction === "from-left",
    }

    return (
        <div className="running-message">
            <div className="running-message__container">
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
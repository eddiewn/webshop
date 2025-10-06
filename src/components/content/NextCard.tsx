
type Props = {
    onClick: () => void;
}

const NextCard = ({onClick}: Props) => {
    return(
        <div 
        onClick={() => {
            onClick();
        }}
        className="bg-teal-950 w-3/4 h-100 p-3 rounded">
            <h1>Next</h1>
        </div>
    )
}

export default NextCard;
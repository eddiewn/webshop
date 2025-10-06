type Props = {
    key: number;
    skinName: string;
    skinImage: string;
    skinPrice: string;
};

const ContentCard = ({key, skinName, skinImage, skinPrice}: Props) => {
    return(
        <div key={key} className="bg-teal-950 w-3/4 h-100 p-3 rounded">
            <img src={skinImage} alt="" />
            <h1>{skinName}</h1>
            <p>{skinPrice}</p>
        </div>
    )
}

export default ContentCard;
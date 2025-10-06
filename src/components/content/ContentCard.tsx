type Props = {
    key: number;
    skinName: string;
    skinImage: string;
    skinPrice: string;
    addToCart: () => void;
    rarity: string;
};

const ContentCard = ({key, skinName, skinImage, skinPrice, rarity}: Props) => {
    return(
        <div key={key} className="bg-teal-950 w-full lg:w-3/4 h-100 p-3 rounded">
            <img src={skinImage} alt="" />
            <h1>{skinName}</h1>
            <p>{skinPrice}</p>
            <p>{rarity}</p>
            <button className="cursor-pointer">Add to cart</button>
        </div>
    )
}

export default ContentCard;
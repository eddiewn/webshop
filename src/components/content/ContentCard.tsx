import type { SkinProps } from "../../types";

type Props = {
    key: number;
    skinName: string;
    skinImage: string;
    skinPrice: string;
    setCart: React.Dispatch<React.SetStateAction<SkinProps[]>>;
    rarity: string;
    skin: SkinProps;
    cart: SkinProps[];
};

const ContentCard = ({key, skinName, skinImage, skinPrice, setCart,rarity, skin, cart}: Props) => {
    return(
        <div key={key} className=" flex flex-col items-center bg-teal-950 w-full lg:w-3/4 h-100 rounded-4xl shadow-[5px_10px_10px_rgba(0,0,0,0.7)]">
            <img className="rounded-t-4xl" src={skinImage} alt="" />
            <h1 className="text-yellow-600 text-2xl text-center">{skinName}</h1>
            <p>{skinPrice}</p>
            <p>{rarity}</p>
            <button className="cursor-pointer bg-teal-900 border-teal-800 border-2 rounded-full py-3 px-6 w-4/5 mt-auto mb-8" onClick={() => {
                if(cart.some(item => item.id === skin.id)){
                    console.log("Already in cart") 
                    return;
                }
                setCart(cart => [...cart, skin])
            }}>Add to cart</button>
        </div>
    )
}

export default ContentCard;
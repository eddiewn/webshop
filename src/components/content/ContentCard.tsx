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
            <div key={key} className="flex flex-col items-center gap-3
            bg-white w-full lg:w-3/4 h-110 rounded-4xl shadow-[10px_10px_10px_rgba(0,0,0,0.2)]">
                <div className="relative">
                    <img
                        src={skinImage}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 -z-10"
                    />
                    <img 
                        className="rounded-t-4xl w-full h-48 object-cover" 
                        loading="lazy" 
                        src={skinImage} 
                        alt="" 
                    />
                </div>
                <h1 className="text-yellow-600 text-2xl text-center">{skinName}</h1>
                <p>{skinPrice}</p>
                <p>{rarity}</p>
                <button className="text-xl cursor-pointer text-teal-50 bg-[var(--secondary-bg)] rounded-full py-3 px-6 w-4/5 mt-auto mb-8" onClick={() => {
                    if(cart.some(item => item.id === skin.id)){
                        const newCart = cart.filter(item => item.id !== skin.id)
                        setCart(newCart)
                        return;
                    }
                    setCart(cart => [...cart, skin])
                }}>{cart.some(item => item.id === skin.id) ? "Remove from Cart" : "Add to cart"}</button>
            </div>
    )
}

export default ContentCard;
import { useEffect, useState } from "react";

import products from "../../data/products";
import ContentCard from "./ContentCard";
import type { SkinProps } from "../../types";

type Props = {
    filterChamp: string | null;
    startIndex: number;
    setStartIndex: (startIndex: number) => void
    setCart: React.Dispatch<React.SetStateAction<SkinProps[]>>;
    cart: SkinProps[];
    rarityFilter: string | null;
}

const ContentProducts = ({filterChamp, startIndex, setStartIndex, setCart, cart, rarityFilter}: Props) => {
    const contentList = products();

    const [displayContent, setDisplayContent] = useState<SkinProps[]>(contentList.slice(startIndex, (startIndex+9)));

    useEffect(() => {
        if(filterChamp !== null) return;
        setDisplayContent(contentList.slice(startIndex, (startIndex+9)))
    },[filterChamp, startIndex])

    useEffect(() => {
    let filtered = contentList;
        if (filterChamp !== null) {
            filtered = filtered.filter(product => product.champ === filterChamp);
        }

        if (rarityFilter !== null) {
            filtered = filtered.filter(product => product.rarity === rarityFilter);
        }
        setDisplayContent(filtered.slice(startIndex, startIndex + 9));
    },[filterChamp, startIndex, rarityFilter])

    useEffect(() => {
        console.log(rarityFilter)
    },[rarityFilter])

    return(
            <section className="w-full lg:w-6/8 h-full bg-[var(--primary-bg)  p-5">
                <h1 className="text-2xl">Product Listings</h1>
                <div className="grid grid-cols-1 grid-rows-9 lg:grid-rows-3 lg:grid-cols-3 gap-10 items-center justify-center">
                    {
                        displayContent.map((skin) => {
                                return(
                                    <ContentCard 
                                        key={skin.id}
                                        skinName={skin.name} 
                                        skinImage={skin.image} 
                                        skinPrice={skin.rpPrice}
                                        setCart={setCart}
                                        rarity={skin.rarity}
                                        skin={skin}
                                        cart={cart}
                                    />
                                )
                        }                                                    
                    )}
                </div>
                <div className="flex flex-row-reverse justify-center gap-10">
                    <button
                        className="cursor-pointer"
                        onClick={() => {
                            if(displayContent.length > 8){
                                setStartIndex(startIndex + 9)
                            }
                        }}
                    >Next
                    </button>
                    <button
                        className="cursor-pointer"
                        onClick={() => {
                            if(startIndex > 0){
                                setStartIndex(startIndex - 9)
                            }
                        }}
                    >Back</button>
                </div>
            </section>
    )
}

export default ContentProducts;
import { useEffect, useState } from "react";

import products from "../../data/products";
import ContentCard from "./ContentCard";

type Props = {
    filterChamp: string | null;
    startIndex: number;
    setStartIndex: (startIndex: number) => void
}

const ContentProducts = ({filterChamp, startIndex, setStartIndex}: Props) => {

type SkinProps = {
    id: number;
    name: string;
    rpPrice: string;
    rarity: string;
    champ: string;
    image: string;
};

    const contentList = products();

    const [displayContent, setDisplayContent] = useState<SkinProps[]>(contentList.slice(startIndex, (startIndex+9)));

    useEffect(() => {
        if(filterChamp !== null) return;
        setDisplayContent(contentList.slice(startIndex, (startIndex+9)))
    },[startIndex])

    useEffect(() => {
        if(filterChamp !== null){
            const newFilterArray = contentList.filter(product => product.champ === filterChamp)
            setDisplayContent(newFilterArray.slice(startIndex, (startIndex+9)))
        }
    },[filterChamp, startIndex])

    return(
            <section className="w-full lg:w-6/8 h-full bg-teal-800 border-teal-900 border-2 rounded-xl p-5">
                <h1 className="text-2xl">Product Listings</h1>
                <div className="grid grid-cols-1 grid-rows-9 lg:grid-rows-3 lg:grid-cols-3 gap-3 items-center justify-center">
                    {
                        displayContent.map((skin) => {
                                return(
                                    <ContentCard 
                                        key={skin.id}
                                        skinName={skin.name} 
                                        skinImage={skin.image} 
                                        skinPrice={skin.rpPrice}
                                        rarity={skin.rarity}
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
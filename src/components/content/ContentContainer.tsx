import { useState } from "react";

import ContentAside from "./ContentAside";
import ContentProducts from "./ContentProducts";
import type { SkinProps } from "../../types"

type Props = {
    filterChamp: string | null;
    setStartIndex: (startIndex: number) => void;
    startIndex: number;
    setCart: React.Dispatch<React.SetStateAction<SkinProps[]>>;
    cart: SkinProps[];
    filterSpecificSkin: string | null;
    setFilterSpecificSkin: (name: string | null) => void;
}

const ContentContainer = ({filterChamp, startIndex, setStartIndex, setCart, cart,filterSpecificSkin, setFilterSpecificSkin}: Props) => {

    const [rarityFilter, setRarityFilter] = useState<string | null>(null)

return(
    <section className="flex gap-6 flex-col lg:flex-row justify-between w-9/10 m-auto">
        <ContentAside setRarityFilter={setRarityFilter} rarityFilter={rarityFilter} setStartIndex={setStartIndex} setFilterSpecificSkin={setFilterSpecificSkin}/>
        <ContentProducts filterChamp={filterChamp} startIndex={startIndex} setStartIndex={setStartIndex} setCart={setCart} cart={cart} rarityFilter={rarityFilter} filterSpecificSkin={filterSpecificSkin} setFilterSpecificSkin={setFilterSpecificSkin}/>
    </section>
)
}

export default ContentContainer;
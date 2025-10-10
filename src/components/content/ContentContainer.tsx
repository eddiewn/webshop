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
    setRarityFilter: React.Dispatch<React.SetStateAction<string | null>>;
    rarityFilter: string | null;
}   

const ContentContainer = ({filterChamp, startIndex, setStartIndex, setCart, cart,filterSpecificSkin, setFilterSpecificSkin,rarityFilter, setRarityFilter}: Props) => {


return(
    <section className="flex flex-col justify-between gap-6 m-auto lg:flex-row w-9/10">
        <ContentAside setRarityFilter={setRarityFilter} rarityFilter={rarityFilter} setStartIndex={setStartIndex} setFilterSpecificSkin={setFilterSpecificSkin}/>
        <ContentProducts filterChamp={filterChamp} startIndex={startIndex} setStartIndex={setStartIndex} setCart={setCart} cart={cart} rarityFilter={rarityFilter} filterSpecificSkin={filterSpecificSkin} setFilterSpecificSkin={setFilterSpecificSkin}/>
    </section>
)
}

export default ContentContainer;
import {useEffect, useState} from "react";

import products from "../../data/products";
import ContentCard from "./ContentCard";
import type {SkinProps} from "../../types";

type Props = {
    filterChamp: string | null;
    startIndex: number;
    setStartIndex: (startIndex: number) => void;
    setCart: React.Dispatch<React.SetStateAction<SkinProps[]>>;
    cart: SkinProps[];
    rarityFilter: string | null;
    filterSpecificSkin: string | null;
    setFilterSpecificSkin: (name: string) => void;
};

const ContentProducts = ({
    filterChamp,
    startIndex,
    setStartIndex,
    setCart,
    cart,
    rarityFilter,
    filterSpecificSkin,
}: Props) => {
    const contentList = products();

    const [displayContent, setDisplayContent] = useState<SkinProps[]>(
        contentList.slice(startIndex, startIndex + 9)
    );

    useEffect(() => {
        if (filterChamp !== null) return;
        setDisplayContent(contentList.slice(startIndex, startIndex + 9));
    }, [filterChamp, startIndex]);

    useEffect(() => {
        let filtered = contentList;
        if (filterChamp !== null) {
            filtered = filtered.filter(
                (product) => product.champ === filterChamp
            );
        }

        if (rarityFilter !== null) {
            filtered = filtered.filter(
                (product) => product.rarity === rarityFilter
            );
        }

        if (filterSpecificSkin !== null) {
            filtered = filtered.filter(
                (product) => product.name === filterSpecificSkin
            );
        }
        setDisplayContent(filtered.slice(startIndex, startIndex + 9));
    }, [filterChamp, startIndex, rarityFilter, filterSpecificSkin]);

    useEffect(() => {
        console.log(rarityFilter);
    }, [rarityFilter]);

    return (
        <section className="flex flex-col w-full lg:w-6/8 h-full bg-[var(--primary-bg)] p-5">
            <h1 className="text-4xl text-center mb-8">Product Listings</h1>
            <div
                className="
                    grid grid-cols-1 grid-rows-9 place-items-center gap-y-10 auto-rows-fr
                    lg:grid-rows-1 md:grid-rows-3 lg:grid-cols-3" 
            >
                {displayContent.map((skin) => {
                    return (
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
                    );
                })}
            </div>
        { displayContent.length >= 9 || startIndex > 1 ?
            <div className="flex flex-row-reverse justify-center gap-10 mt-8 text-white bg-white py-3 rounded w-1/5 m-auto shadow">
                {displayContent.length >= 9 ? (
                    <button
                        className="cursor-pointer w-20 h-10 bg-[var(--secondary-bg)] rounded-xl"
                        onClick={() => {
                            if (displayContent.length > 8) {
                                setStartIndex(startIndex + 9);
                            }
                        }}
                    >
                        Next
                    </button>
                ) : (
                    ""
                )}
                {startIndex > 1 ? (
                    <button
                        className="cursor-pointer w-20 h-10 bg-[var(--secondary-bg)] rounded-xl"
                        onClick={() => {
                            if (startIndex > 0) {
                                setStartIndex(startIndex - 9);
                            }
                        }}
                    >
                        Back
                    </button>
                ) : (
                    ""
                )}
            </div>
        : ""}
        </section>
    );
};

export default ContentProducts;

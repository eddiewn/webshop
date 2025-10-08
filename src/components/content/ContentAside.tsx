
type Props = {
    setRarityFilter: React.Dispatch<React.SetStateAction<string | null>>;
    rarityFilter: string | null;
}

const ContentAside = ({setRarityFilter, rarityFilter}: Props) => {

    const allRarities = [
        "All",
        "Base",
        "Standard",
        "Legacy",
        "Rare",
        "Deluxe",
        "Epic",
        "Legendary",
        "Ultimate",
        "Mythic",
        "Prestige",
        "Exalted", 
    ]

    return(
        <aside className="w-full lg:w-2/10 h-full bg-white rounded-xl">
            <section className="p-5 text-2xl">
            <h1 className="pb-3 text-center">Filter Rarities</h1>
                <ul className="flex flex-col gap-2 w-full h-full text-xl rounded">
                    {allRarities.map((rarity) => {
                        return(
                            <li className={`cursor-pointer ${rarity === rarityFilter || (rarity === "All" && rarityFilter === null) ? "text-blue-300" : ""}`} onClick={(() => {
                                setRarityFilter(rarity == "All" ? null : rarity)
                        })}>{rarity}</li>
                        )
                    })}
                </ul>
            </section>
        </aside>
    )
}

export default ContentAside;
type Props = {
    setRarityFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

const ContentAside = ({setRarityFilter}: Props) => {

    const allRarities = [
        "All",
        "Base",
        "Standard",
        "Deluxe",
        "Epic",
        "Legendary",
        "Ultimate",
        "Mythic",
        "Prestige",
    ]

    return(
        <aside className="w-full lg:w-2/10 h-full bg-teal-800 border-teal-900 border-2 rounded-xl">
            <section className="p-5 text-2xl">
            <h1 className="mb-2">Filter Rarities</h1>
                <ul className="flex flex-col gap-2 w-full h-full bg-teal-900 text-xl rounded p-3">
                    {allRarities.map((rarity) => {
                        return(
                            <li className="cursor-pointer" onClick={(() => {
                                setRarityFilter(rarity)
                        })}>{rarity}</li>
                        )
                    })}
                </ul>
            </section>
        </aside>
    )
}

export default ContentAside;
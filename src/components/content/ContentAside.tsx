const ContentAside = () => {
    return(
        <aside className="w-full lg:w-2/10 h-full bg-teal-800 border-teal-900 border-2 rounded-xl">
            <section className="p-5 text-2xl">
            <h1 className="mb-2">Filter Rarities</h1>
                <ul className="flex flex-col gap-2 w-full h-full bg-teal-900 text-xl rounded p-3">
                    <li>All</li>
                    <li>Base</li>
                    <li>Standard</li>
                    <li>Deluxe</li>
                    <li>Epic</li>
                    <li>Legendary</li>
                    <li>Ultimate</li>
                    <li>Mythic</li>
                    <li>Prestige</li>
                </ul>
            </section>
        </aside>
    )
}

export default ContentAside;
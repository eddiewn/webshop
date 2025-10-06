import { useState } from "react"

import Header from "./components/Header"
import Banner from "./components/Banner"
import ContentContainer from "./components/content/ContentContainer"
import Footer from "./components/Footer"

function App() {

    const [filterChamp, setFilterChamp] = useState<string | null>(null)
    const [startIndex, setStartIndex] = useState<number>(0);

    return (
        <>
            <main className="flex flex-col gap-8">
                <Header setFilterChamp={setFilterChamp} setStartIndex={setStartIndex}/>
                <Banner />
                <ContentContainer filterChamp={filterChamp} startIndex={startIndex} setStartIndex={setStartIndex}/>
                <Footer />
            </main>
        </>
    )
}

export default App

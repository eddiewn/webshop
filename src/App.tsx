import { useEffect,useState } from "react"

import Header from "./components/Header"
import Banner from "./components/Banner"
import ContentContainer from "./components/content/ContentContainer"
import Footer from "./components/Footer"
import type { SkinProps } from "./types"



function App() {

    const [filterChamp, setFilterChamp] = useState<string | null>(null)
    const [startIndex, setStartIndex] = useState<number>(0);
    const [cart, setCart] = useState<SkinProps[]>([])
    
    useEffect(() => {
        console.log(cart)
    },[cart])

    return (
        <>
            <main className="flex flex-col gap-8">
                <Header cart={cart} setFilterChamp={setFilterChamp} setStartIndex={setStartIndex}/>
                <Banner />
                <ContentContainer filterChamp={filterChamp} startIndex={startIndex} setStartIndex={setStartIndex} setCart={setCart} cart={cart}/>
                <Footer />
            </main>
        </>
    )
}

export default App

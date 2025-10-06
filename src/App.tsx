import Header from "./components/Header"
import Banner from "./components/Banner"
import ContentContainer from "./components/content/ContentContainer"
import Footer from "./components/Footer"

function App() {

    return (
        <>
            <main className="flex flex-col gap-8">
                <Header />
                <Banner />
                <ContentContainer />
                <Footer />
            </main>
        </>
    )
}

export default App

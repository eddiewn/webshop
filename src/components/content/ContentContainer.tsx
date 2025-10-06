import ContentAside from "./ContentAside";
import ContentProducts from "./ContentProducts";
import NextCard from "./NextCard";

const ContentContainer = () => {
return(
    <section className="flex flex-row justify-between w-9/10 m-auto">
        <ContentAside />
        <ContentProducts />
    </section>
)
}

export default ContentContainer;
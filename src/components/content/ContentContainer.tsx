import ContentAside from "./ContentAside";
import ContentProducts from "./ContentProducts";

const ContentContainer = () => {
return(
    <section className="flex flex-row justify-between w-9/10 h-200 m-auto">
        <ContentAside />
        <ContentProducts />
    </section>
)
}

export default ContentContainer;
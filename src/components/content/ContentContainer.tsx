import ContentAside from "./ContentAside";
import ContentProducts from "./ContentProducts";

const ContentContainer = () => {
return(
    <section className="flex gap-6 flex-col lg:flex-row justify-between w-9/10 m-auto">
        <ContentAside />
        <ContentProducts />
    </section>
)
}

export default ContentContainer;
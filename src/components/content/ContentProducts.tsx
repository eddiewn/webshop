// import products from "../../data/products";
import ContentCard from "./ContentCard";

                // {
                //     contentList.map(skin => {
                //         return(
                //             <div>{skin.name}</div>
                //         )
                //     })
                // }

const ContentProducts = () => {

    // const contentList = products();

    return(
            <section className="w-6/8 h-full bg-teal-800 border-teal-900 border-2 rounded-xl p-5">
                <h1 className="text-2xl">Product Listings</h1>
                <ContentCard />
            </section>
    )
}

export default ContentProducts;
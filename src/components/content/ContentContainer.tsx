import ContentAside from "./ContentAside";
import ContentProducts from "./ContentProducts";

type Props = {
    filterChamp: string | null;
    setStartIndex: (startIndex: number) => void;
    startIndex: number;
}

const ContentContainer = ({filterChamp, startIndex, setStartIndex}: Props) => {
return(
    <section className="flex gap-6 flex-col lg:flex-row justify-between w-9/10 m-auto">
        <ContentAside />
        <ContentProducts filterChamp={filterChamp} startIndex={startIndex} setStartIndex={setStartIndex}/>
    </section>
)
}

export default ContentContainer;
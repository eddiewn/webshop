import {useEffect, useState} from "react";
import Fuse from "fuse.js";
import products from "../data/products";

const fuse = new Fuse(products(), {
    keys: ["name", "champ"],
    threshold: 0.4,
});

type Props = {
    setFilterChamp: (champ: string | null) => void;
    setStartIndex: (startIndex: number) => void;
    cart: object[];
    filterChamp: string | null;
    setFilterSpecificSkin: (champ: string | null) => void;
    filterSpecificSkin: string | null;
    setRarityFilter: React.Dispatch<React.SetStateAction<string | null>>;
};

const Header = ({
    setFilterChamp,
    setStartIndex,
    cart,
    filterChamp,
    setFilterSpecificSkin,
    setRarityFilter,
}: Props) => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");

    const results = fuse.search(searchText ? searchText : "Viego");

    const scrollFunc = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        console.log(hamburgerToggle);
    }, [hamburgerToggle]);
    useEffect(() => {
        window.addEventListener("scroll", scrollFunc);
        return () => window.removeEventListener("scroll", scrollFunc);
    }, []);

    useEffect(() => {});

    const champs = ["All", "Viego", "Kha'Zix", "Sion", "Jarvan IV"];

    return (
        <header
            className={`m-auto sticky top-0 z-50 w-screen bg-[var(--primary-bg)] h-25 md:h-40 mt-6 text-2xl border-white border-b-0
                flex flex-col
                ease-in-out duration-300 ${
                    scrolled
                        ? "md:w-screen md:top-0 md:rounded-none border-b-2 shadow "
                        : "md:w-9/10 "
                } `}
        >
            <div
                className={`ease-in-out transition-all duration-300 flex md:flex-row justify-between items-center h-full md:h-1/2 gap-5 mr-0 ${scrolled ? "mr-10" : ""} `}
            >
                <img
                    className="h-3/5 md:h-4/5 w-20 ml-3 rounded"
                    src="/viegoChampie.webp"
                    alt=""
                />
                <div className="relative ml-auto md:w-1/5">
                        <input
                            className="border-2 border-gray-500 rounded-xl w-30 md:w-full h-3/5 pl-2 md:pl-6 bg-white text-sm md:text-2xl"
                            type="text"
                            placeholder="Search..."
                            onFocus={() => {
                                setShowResults(!showResults);
                            }}
                            onBlur={() => {
                                // if (searchText !== "") {
                                //     setShowResults(!showResults);
                                // }
                            }}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        {showResults ? (
                            <ul className="flex flex-col align-center justify-evenly top-10 w-[calc(100%+8rem)] lg:w-full absolute bg-white min-h-1/1.2 rounded p-3 ex ">
                                {results.slice(0, 5).map((result) => (
                                    <li
                                        key={result.item.id}
                                        className="cursor-pointer text-sm md:text-2xl hover:scale-110 origin-top-left"
                                        onClick={() => {
                                            setFilterSpecificSkin(
                                                result.item.name
                                            );
                                            setRarityFilter(result.item.rarity);
                                            setFilterChamp(result.item.champ);
                                            setStartIndex(0);
                                            setShowResults(!showResults);
                                        }}
                                    >
                                        {result.item.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            ""
                        )}
                </div>
                    <nav className="flex flex-row justify-center items-center h-full">
                        <img src="shoppingCart.png" alt="" />
                        <span className="text-xl">{cart.length}</span>
                    </nav>
                {/*Hamburger Menu*/}
                <div className="md:hidden flex">
                    <button
                        className="flex flex-col justify-center gap-1 mr-5"
                        onClick={() => setHamburgerToggle(!hamburgerToggle)}
                        aria-label="Toggle menu"
                    >
                        <span className="w-8 h-1 bg-white rounded"></span>
                        <span className="w-8 h-1 bg-white rounded"></span>
                        <span className="w-8 h-1 bg-white rounded"></span>
                    </button>
                </div>
            </div>
            <nav className={`${hamburgerToggle ? "" : "hidden"} md:flex flex-row w-full h-0 md:h-1/2`}>
                <ul
                    className={`flex md:flex-row flex-col items-center gap-6 lgh-full p-6 bg-white ${
                        scrolled
                            ? "rounded-tr-xl shadow-[2px_-2px_5px_-5px_rgba(0,0,0,0.5)]"
                            : "rounded-xl shadow"
                    }`}
                >
                    {champs.map((champ) => {
                        return (
                            <li
                                className={`cursor-pointer ${
                                    champ === filterChamp ||
                                    (champ === "All" && filterChamp === null)
                                        ? "text-blue-300"
                                        : ""
                                }`}
                                onClick={() => {
                                    setFilterChamp(
                                        champ == "All" ? null : champ
                                    );
                                    setStartIndex(0);
                                    setFilterSpecificSkin(null);
                                }}
                            >
                                {champ}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

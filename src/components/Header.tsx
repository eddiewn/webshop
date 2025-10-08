import {useEffect, useState} from "react";
import Fuse from "fuse.js";
import products from "../data/products";

const fuse = new Fuse(products(), {
    keys: ["name", "champ"],
});

const results = fuse.search("Viego");

console.log(results);

type Props = {
    setFilterChamp: (champ: string | null) => void;
    setStartIndex: (startIndex: number) => void;
    cart: object[];
    filterChamp: string | null;
};

const Header = ({setFilterChamp, setStartIndex, cart, filterChamp}: Props) => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(false);

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

    const champs = ["All", "Viego", "Kha'Zix", "Sion", "Jarvan IV"];

    return (
        <header
            className={`sticky top-0 z-50 w-screen bg-[var(--primary-bg)] h-30 lg:h-40 lg:m-auto lg:mt-6 lg:rounded-2xl text-2xl border-white border-b-0
                flex flex-col justify-center 
                ease-in-out duration-300 ${
                    scrolled
                        ? "lg:w-screen lg:top-0 lg:rounded-none border-b-2 "
                        : "lg:w-9/10 "
                } ${hamburgerToggle ? "h-200 fixed" : ""}`}
        >
            <div
                className={` md:flex lg:flex-row justify-between items-center h-1/2 ${
                    hamburgerToggle ? "h-56 flex-col" : "hidden"
                } `}
            >
                <img
                    className="w-20 ml-6"
                    src="../../public/placeholder.png"
                    alt=""
                />
                <section className="flex flex-col lg:flex-row h-full justify-center items-center gap-6 mr-6">
                    <div className="relative">
                        <input
                            className="border-2 border-gray-500 rounded-xl h-3/5 pl-6"
                            type="text"
                            placeholder="Search..."
                            onFocus={() => {
                                setShowResults(!showResults);
                            }}
                            onBlur={() => {
                                setShowResults(!showResults);
                            }}
                        />
                        {showResults ? (
                            <div className="absolute bg-white w-full">
                                {results.slice(0, 5).map((result) => (
                                    <h1 key={result.item.id}>
                                        {result.item.name}
                                    </h1>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <nav>
                        <ul
                            className={`flex flex-col justify-center items-center h-full gap-15 ${
                                hamburgerToggle ? "flex-col" : "flex-row"
                            }`}
                        >
                            <li>Home</li>
                            <li>Shop</li>
                            <li>
                                <div className="flex">
                                    <img src="shoppingCart.png" alt="" />
                                    <span className="text-xl">
                                        {cart.length}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
            <nav className={`${hamburgerToggle ? "" : "hidden"} md:flex h-1/2`}>
                <ul className="flex flex-col lg:flex-row items-center gap-6 h-full p-6">
                    {champs.map((champ) => {
                        return (
                            <li
                                className={`cursor-pointer ${
                                    champ === filterChamp ||
                                    (champ === "All" && filterChamp === null)
                                        ? "text-white"
                                        : ""
                                }`}
                                onClick={() => {
                                    setFilterChamp(
                                        champ == "All" ? null : champ
                                    );
                                    setStartIndex(0);
                                }}
                            >
                                {champ}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div
                onClick={() => setHamburgerToggle(!hamburgerToggle)}
                className="relative md:hidden"
            >
                <span className="absolute w-10 h-2 bg-teal-950 border-teal-900 border-2 right-15 bottom-[60%] translate-1/2 rounded"></span>
                <span className="absolute w-10 h-2 bg-teal-950 border-teal-900 border-2 right-15 bottom-[50%] translate-1/2 rounded"></span>
                <span className="absolute w-10 h-2 bg-teal-950 border-teal-900 border-2 right-15 bottom-[40%] translate-1/2 rounded-2xl"></span>
            </div>
        </header>
    );
};

export default Header;

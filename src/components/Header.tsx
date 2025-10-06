import { useEffect, useState } from "react";

type Props = {
    setFilterChamp: (champ:string | null ) => void;
    setStartIndex: (startIndex: number) => void;
}


const Header = ({setFilterChamp, setStartIndex}: Props) => {

const [scrolled, setScrolled] = useState<boolean>(false);
const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);

    const scrollFunc = () => {
        if(window.scrollY > 20){
            setScrolled(true)
        }else{
            setScrolled(false);
        }
    }
    

    useEffect(() => {
        console.log(hamburgerToggle)
    },[hamburgerToggle])
useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
},[])

    return (
            <header className={`sticky top-0 z-50 w-screen bg-teal-800 h-30 lg:h-40 lg:m-auto lg:mt-6 lg:rounded-2xl flex flex-col justify-center border-2 border-teal-900 text-2xl transition-all ease-in-out duration-300 ${scrolled ? "lg:w-screen lg:top-0 lg:rounded-none" : "lg:w-9/10" } ${hamburgerToggle ? "h-200 fixed": ""}`}>
                <div className={` md:flex lg:flex-row justify-between items-center h-1/2 ${hamburgerToggle ? "h-56 flex-col" : "hidden"} `}>
                    <img className="w-20 ml-6" src="../../public/placeholder.png" alt="" />
                    <section className="flex flex-col lg:flex-row h-full justify-center items-center gap-6 mr-6">
                    <input className="border-2 border-teal-900 rounded-xl h-3/5 pl-6 mr-6" type="text" placeholder="Search..." />
                        <nav>
                            <ul className={`flex flex-col justify-center items-center h-full gap-15 ${hamburgerToggle ? "flex-col" : "flex-row"}`}>
                                <li>Home</li>
                                <li>Shop</li>
                                <li><img src="shoppingCart.png" alt="" /></li>
                            </ul>
                        </nav>
                    </section>
                </div> 
                <nav className={`${hamburgerToggle ? "" : "hidden"} md:flex border-t-2 border-t-teal-900 h-1/2`}>
                    <ul className="flex flex-col lg:flex-row items-center gap-6 h-full p-6">
                        <li className="cursor-pointer" onClick={() => {
                            setFilterChamp(null)
                            setStartIndex(0)
                        }}>All</li>
                        <li className="cursor-pointer" onClick={() => {
                            setFilterChamp("Viego")
                            setStartIndex(0)
                        }}>Viego</li>
                        <li className="cursor-pointer" onClick={() => {
                            setFilterChamp("Kha'Zix")
                            setStartIndex(0)
                        }}>Kha'Zix</li>
                        <li className="cursor-pointer" onClick={() => {
                            setFilterChamp("Sion")
                            setStartIndex(0)
                        }}>Sion</li>
                        <li className="cursor-pointer" onClick={() =>{
                            setFilterChamp("Jarvan IV")
                            setStartIndex(0)

                        }}>Jarvan IV</li>
                    </ul>
                </nav>

                <div 
                onClick={() => setHamburgerToggle(!hamburgerToggle)}
                className="relative md:hidden">
                    <span className="absolute w-10 h-2 bg-teal-950 border-teal-900 border-2 right-15 bottom-[60%] translate-1/2 rounded"></span>
                    <span className="absolute w-10 h-2 bg-teal-950 border-teal-900 border-2 right-15 bottom-[50%] translate-1/2 rounded"></span>
                    <span className="absolute w-10 h-2 bg-teal-950 border-teal-900 border-2 right-15 bottom-[40%] translate-1/2 rounded-2xl"></span>
                </div>
            </header>

    );
};

export default Header;
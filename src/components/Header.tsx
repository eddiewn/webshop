const Header = () => {
    return (
        <header className="w-9/10 bg-teal-800 h-40 m-auto mt-6 rounded-3xl flex flex-col justify-center border-2 border-teal-900 text-2xl">
            <div className="flex flex-row justify-between items-center h-1/2">
                <img className="w-20 ml-6" src="../../public/placeholder.png" alt="" />
                <div className="flex flex-row h-full justify-center items-center gap-6 mr-6">
                <input className="border-2 border-teal-900 rounded-xl h-3/5 pl-6 mr-6" type="text" placeholder="Search..." />
                    <nav>
                        <ul className="flex flex-row justify-center items-center h-full gap-15">
                            <li>Home</li>
                            <li>Shop</li>
                            <li><img src="shoppingCart.png" alt="" /></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <nav className="border-t-2 border-t-teal-900 h-1/2">
                <ul className="flex flex-row items-center gap-6 h-full pl-6">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
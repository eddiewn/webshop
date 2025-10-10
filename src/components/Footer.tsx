const Footer = () => {
    return (
        <footer className="relative w-screen bg-[var(--secondary-bg)] text-white">
        <section className="flex flex-col items-center gap-20 pt-20 md:flex-row md:justify-around">
            <section className="flex flex-col items-center w-1/2 mb-20 md:flex-row md:justify-around">
                <section className="w-full">
                    <h2 className="text-2xl text-center ">Follow Us</h2>
                    <ul className="text-center">
                        <li>
                            <a href="https://twitter.com">Twitter</a>
                        </li>
                        <li>
                            <a href="https://facebook.com">Facebook</a>
                        </li>
                        <li>
                            <a href="https://instagram.com">Instagram</a>
                        </li>
                    </ul>
                </section>
                <section className="w-full">
                    <h3 className="text-2xl text-center">Team</h3>
                    <ul>
                        <li>Lead Developer: Eddie Wiik Nilsson</li>
                        <li>Designer: Eddie Wiik Nilsson</li>
                        <li>Chief Technology Officer: Eddie Wiik Nilsson</li>
                        <li>Cyber Security Specialist: Eddie Wiik Nilsson</li>
                        <li>Janitor: Eddie Wiik Nilsson</li>
                    </ul>
                </section>
            </section>
                <section className="w-2/5">
                    <form className="flex flex-col gap-5 text-2xl text-black">
                        <h1 className="text-white">Contact us</h1>
                        <input className="bg-white" type="text" placeholder="Subject"/>
                        <input className="bg-white" type="text" placeholder="Email" />
                        <input className="bg-white" type="text" placeholder="Message" />
                        <button>Submit</button>
                    </form>
                </section>
            </section>

            <small className="absolute bottom-0 text-center -translate-x-1/2 left-1/2">
                @2025 Viego Webshop | All Rights reserved
            </small>
        </footer>
    );
};

export default Footer;

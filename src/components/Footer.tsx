const Footer = () => {
    return (
        <footer className="relative w-screen bg-[var(--secondary-bg)]">
            <section className="flex flex-col md:flex-row items-center md:justify-around gap-20 mb-20">
                <section className="w-4/5 md:w-1/5">
                    <h2 className="text-2xl text-center">Follow Us</h2>
                    <ul>
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
                <section className="w-4/5 md:w-1/5">
                    <h3 className="text-2xl text-center">Team</h3>
                    <ul>
                        <li>Lead Developer: Eddie Wiik Nilsson</li>
                        <li>Designer: Eddie Wiik Nilsson</li>
                    </ul>
                </section>
                <section className="w-4/5 md:w-1/5">
                    <h2 className="text-2xl ">Contact us</h2>
                </section>
            </section>

            <small className="absolute text-center bottom-0 left-1/2 -translate-x-1/2">
                @2025 Viego Webshop | All Rights reserved
            </small>
        </footer>
    );
};

export default Footer;

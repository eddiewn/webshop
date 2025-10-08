const Footer = () => {
    return (
        <footer className="relative mb-auto w-screen h-100 bg-[var(--secondary-bg)]">
            <section className="flex justify-around">
                <section className="w-1/5">
                    <h2 className="text-2xl text-center">About us</h2>
                    <p>
                        The Viego website exists to celebrate and showcase the
                        lore, design, and aesthetic of Viego, the Ruined King
                        from League of Legends. It offers fans detailed insights
                        into his story, abilities, and skins while serving as a
                        creative hub for artwork, game updates, and merchandise
                        inspired by his haunting, tragic character.
                    </p>
                </section>

                <section className="w-1/5">
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
                <section className="w-1/5">
                    <h3 className="text-2xl text-center">Team</h3>
                    <ul>
                        <li>Lead Developer: Eddie Wiik Nilsson</li>
                        <li>Designer: Eddie Wiik Nilsson</li>
                    </ul>
                </section>
                <section className="w-1/5">
                    <h2 className="text-2xl ">Contact us</h2>
                </section>
            </section>

            <small className="absolute bottom-0 left-1/2 -translate-x-1/2">
                @2025 Viego Webshop | All Rights reserved
            </small>
        </footer>
    );
};

export default Footer;

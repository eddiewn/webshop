
const Banner = () => {
    return(
        <section 
        className="relative lg:h-[60vh] w-9/10 bg-[var(--bg-primary)] m-auto rounded-xl overflow-hidden shadow-xl shadow-teal-100">
            <video className="contrast-less" autoPlay loop muted playsInline src="/videos/ViegoBanner.mp4"></video>
            <button className="
                absolute right-1/2 translate-x-1/2 lg:right-40 bottom-10 
                bg-white
                rounded-xl border-1 border-[var(--secondary-bg)] text-2xl
                h-20 w-60"
            >
                Shop Skins
            </button>
        </section>
    )
}

export default Banner;
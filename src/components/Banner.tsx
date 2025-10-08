
const Banner = () => {
    return(
        <section 
        className="relative h-[60vh] w-9/10 bg-[var(--bg-primary)] m-auto rounded-xl overflow-hidden shadow-xl shadow-teal-100">
            <video className="contrast-less" autoPlay loop muted playsInline src="/videos/ViegoBanner.mp4"></video>
            <button className="absolute right-7 lg:right-20 bottom-10 bg-teal-100 border-2  rounded p-2 h-15 w-30">Shop Skins</button>
        </section>
    )
}

export default Banner;

const Banner = () => {
    return(
        <section 
        className="relative h-[60vh] w-9/10 bg-teal-800 m-auto rounded-xl border-2 border-teal-900 overflow-hidden shadow-xl shadow-teal-100">
            <video autoPlay loop muted playsInline src="/videos/ViegoBanner.mp4"></video>
            <button className="absolute right-7 lg:right-20 bottom-10 bg-teal-100 border-2 border-teal-900 rounded p-2 h-15 w-30">Button</button>
        </section>
    )
}

export default Banner;
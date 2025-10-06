
const Banner = () => {
    return(
        <section 
        style={{ backgroundImage: "url('/viego/Banner_Viego.jpg')" }}
        className="relative h-[60vh] w-9/10 bg-teal-800 m-auto rounded-xl border-2 border-teal-900 bg-right lg:bg-top bg-cover">
            <button className="absolute right-7 lg:right-20 bottom-10 bg-teal-100 border-2 border-teal-900 rounded p-2 h-15 w-30">Button</button>
        </section>
    )
}

export default Banner;
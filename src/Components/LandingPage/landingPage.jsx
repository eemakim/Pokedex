export default function LandingPage() {
    return (
        <>
            <div className="flex flex-col items-center w-[50%] m-auto mt-[8%] gap-5 lg:gap-8">
                <img src="src/assets/plogo.png"
                    alt="landing page main logo" />
                <label htmlFor="search-bar"></label>

                <div className="flex border border-black rounded-full px-4 lg:px-5 py-1 lg:py-2 pr-6 lg:pr-10 gap-2 lg:gap-3">
                    <button type="submit" className="w-[40px]"><img src="src/assets/Poké_Ball_icon.svg" className="w-[100%]" /></button>
                    <input type="text" id="search-bar"
                        placeholder="search by pokemon id"
                        className="text-lg lg:text-2xl text-center font-thin" />
                </div>
            </div>

        </>
    )
}
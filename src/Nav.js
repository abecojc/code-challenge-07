
function Nav() {

    return (
        <>
            <nav  className="show-sliding-menu fixed bg-white h-screen w-80" id="nav">
                <div className="flex flex-col">
                    <div className="text-xl whitespace-nowrap bg-red-400 px-10 pt-7 pb-8" id="head-nav">
                        Book a Table
                    </div>
                    <hr/>
                    <div className="text-sm px-6 pt-6 pb-56 flex-col flex justify-between h-screen">
                        <div className="p-4 whitespace-nowrap text-xs uppercase text-gray-300">
                            countries
                        </div>

                        <div>
                            <p className="sliding-menu text-4xl">Canada</p>
                            <p className="sliding-menu whitespace-nowrap text-4xl mb-8">United States</p>
                            <p className="p-4 whitespace-nowrap mb-4">Or Find Nearby Locations</p>
                            <p className="sliding-menu border-2 border-blue-900 inline m-4">Use My Location</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;

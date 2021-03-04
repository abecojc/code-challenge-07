function Head() {
    return (
        <>
            <div className="fixed w-screen bg-white ">
                <div className=" flex justify-between">
                    <div className="text-4xl w-44 px-10 py-6 font-serif">
                        Earls
                    </div>

                    <div className="w-screen flex flex-wrap justify-between p-2">
                        <div className="uppercase w-2/5 p-3 flex justify-between text-sm">

                            <div className="cursor-pointer p-3" >
                                Menu
                            </div>

                            <div className="p-3">
                                Locations
                            </div>

                            <div className="p-3">
                                Gift cards
                            </div>
                        </div>

                        <div className="flex  justify-center text-center m-3 border-2 border-black md:whitespace">

                            <div className="top-menu" id="location">
                                <span>Set Your Location</span>
                            </div>

                            <div className="top-menu" id="online">
                                Order Online
                            </div>

                            <div className="top-menu" id="delivery">
                                Get Delivery
                            </div>

                            <div className="top-menu text-white bg-gray-900" id="book-table-1">
                                <span>Book a Table</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Head;

import menu1 from './images/menu1.jpg';
import menu2 from './images/menu2.jpg';
import menu3 from './images/menu3.jpg';

function Body() {

    return (
        <>
            <div className="my-bg pt-44">
                <p className="text-white p-24 text-7xl font-serif h-screen">ALL <br/>THE WAYS<br/> TO HOLIDAY</p>
            </div>
            <div id="accessIcon"
                 className="ml-4 mb-4 cursor-pointer fixed text-5xl bottom-0 left-0 fas fa-universal-access">
                <div id="pop-menu"
                     className="hidden cursor-pointer rounded flex flex-col text-white h-5/6 mt-24 m-12 w-1/2 fixed bottom-0 left-0 bg-blue-900 ">
                    <h1 className="p-2 text-center">Accessibility</h1>
                    <div className="h-screen m-2 p-2 bg-white rounded">

                    </div>

                </div>

            </div>
            <div
                className="bg-yellow-900 rounded-full fixed text-white text-xl text-center bottom-0 right-0 h-40 w-40 py-14 cursor-pointer "
                id="book-table">
                <p className="w-36 text-2xl border-b-2 border-white m-2">
                    Book a Table
                </p>

            </div >

            <div className=" px-16 pb-16 pt-36 w-screen">
                <div className="flex justify-between">
                    <div className="text-7xl font-serif">
                        Feel Good <br/>Faves
                    </div>
                    <div>
                        <div>
                            Each location has a menu that's <br/>curated just for them. See what's new <br/>on the menu at your Earls.
                        </div>
                        <div>
                            <a href="Nav.js">View The Menu --></a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div id="menu">
                        <img src={ menu1 } alt="Menu1"/>
                        <p>Lobster + Prawn Ravioli</p>
                    </div>
                    <div id="menu">
                        <img src={ menu2 } alt="Menu2"/>
                        <p>Canadian Prime Sirloin</p>
                    </div>
                    <div id="menu">
                        <img src={ menu3 } alt="Menu3"/>
                        <p>Thai Prawn Curry Bowl</p>
                    </div>
                </div>
            </div>

            <div className="h-screen bg-green-400 w-screen">
                Shop Now
            </div>

            <div className="h-screen bg-yellow-400 w-screen">
                Shop Now
            </div>

        </>
    )
}

export default Body;
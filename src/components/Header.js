import Image from "next/image"
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline"

function Header() {
  return (
    <header>
        {/* top navbar container */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            {/* Amazon Logo */}
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain" className="cursor-pointer" />
            </div>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <MagnifyingGlassIcon className="h-12 p-4"/>
            </div>

            {/* Right Section */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                {/* for account info */}
                <div className="cursor-pointer hover:underline">
                    <p>Hello Abhi</p>
                    <p className="font-extrabold md:text-sm">Account & List</p>
                </div>

                {/* Returns and orders */}
                <div className="cursor-pointer hover:underline">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>

                {/* basket */}
                <div className="relative cursor-pointer hover:underline flex items-center">
                    <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 text-center rounded-full text-black font-bold">0</span>
                    <ShoppingCartIcon className="h-10"/>
                    <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                </div>
            </div>
        </div>

        {/* bottom navbar continer */}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
            <p className="cursor-pointer hover:underline flex items-center">
                <Bars3Icon className="h-6 mr-1" />
                All
            </p>
            <p className="cursor-pointer hover:underline">Prime Video</p>
            <p className="cursor-pointer hover:underline">Amazon Business</p>
            <p className="cursor-pointer hover:underline">Today's Deals</p>
            <p className="cursor-pointer hover:underline hidden lg:inline-flex">Electronics</p>
            <p className="cursor-pointer hover:underline hidden lg:inline-flex">Food & Grocery</p>
            <p className="cursor-pointer hover:underline hidden lg:inline-flex">Prime</p>
            <p className="cursor-pointer hover:underline hidden lg:inline-flex">Buy Again</p>
            <p className="cursor-pointer hover:underline hidden lg:inline-flex">Shopper Toolkit</p>
         </div>
    </header>
  )
}

export default Header
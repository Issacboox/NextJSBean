import { SearchIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";

const imageLogoUrl =
    "https://firebasestorage.googleapis.com/v0/b/beanstore-db.appspot.com/o/Store%2FLogo.png?alt=media&token=97a8b0a6-08bf-48dc-ae95-2f79c640ce97";

export default function Header() {
    return (
        <div className="shadow-md sticky top-0 left-0 right-0">
            <div className="max-w-[1280px] mx-auto h-20 flex items-center">
                <Link href="/">
                    <div className="flex flex-row items-center">
                        <div className="h-16 aspect-[3/1] w-auto">
                            <img src={imageLogoUrl} alt="logo" className="object-cover" />
                        </div>
                    </div>
                </Link>
                <div className="flex-grow flex flex-row items-center justify-end gap-4">
                    {/* <Link href="/">
                        <SearchIcon className="animate-pulse" />
                    </Link> */}

                    <a href="#">
                        <p className="hover:bg-green-400 hover:text-white text-[16px] p-3 rounded-xl" >about us</p>
                    </a>
                    <a href="#">
                        <p className="hover:bg-green-400 hover:text-white  text-[16px] p-3 rounded-xl">store</p>
                    </a>
                    <a href="/login">
                        <p className="hover:bg-green-400 hover:text-white  text-[16px] p-3 rounded-xl">login</p>
                    </a>
                    <Link href="/cart">
                        <ShoppingBag className="hover:scale-105 hover:color-red-500  text-[16px] " />
                    </Link>
                </div>
            </div>
        </div>
    );
}

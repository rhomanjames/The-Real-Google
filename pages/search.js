import Head from "next/head";
import Image from 'next/image';
import Avatar from "../components/Avatar"
import { XIcon, CogIcon, ViewGridIcon, MicrophoneIcon, DotsVerticalIcon, NewspaperIcon, VideoCameraIcon, CameraIcon} from "@heroicons/react/solid";
import { SearchIcon, BookOpenIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router"


function search() {
    return (
        <div className="overflow-x-hidden pt-3 pl-2">
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*Header*/}
            <header className="flex p-2 sm:flex-row flex-col border-b-2 border-gray-100">
                <Image 
                className="ml-4 object-contain"
                src="https://www.jobalign.com/wp-content/uploads/2018/01/google-logo-png-hd-11.png" 
                height={48} 
                width={142}
                />
                    {/* Div for search bar and tabs*/}
                    <div className="w-full">
                        {/* Div for Search bar and top right icons*/}
                        <div className="flex  w-full justify-between align-center items-center">
                            {/* Search bar*/}
                            <div className="flex shadow-md mt-5 hover:shadow-lg min-w-100vw focus-within:shadow-lg flex-grow ml-16 rounded-full border border-gray-200 p-3 items-center sm:max-w-lg lg:max-w-2xl">
                                <input type="text" className="pl-3 flex-grow focus:outline-none"/>
                                <XIcon className="h-5 pl-4 transition hover:scale-110 text-gray-500 ml-4" />
                                <MicrophoneIcon className="h-5 border-l-2 pl-4 text-blue-500 ml-4" />
                                <SearchIcon className="h-5 text-blue-500 ml-5 mr-3" />
                            </div>
                            {/* Icons*/}
                            <div className="pt-7 pr-5 space-x-1 flex flex-row">
                                <CogIcon className="h-10 transition invisible lg:visible rounded-full hover:bg-gray-100 text-gray-500 p-2" />
                                <ViewGridIcon className="h-10 transition invisible md:visible rounded-full hover:bg-gray-100 text-gray-500 p-2" />
                                <Avatar url="https://boutiquephotographer.com/wp-content/uploads/2015/04/WORK_Headshot-Square.001_WEB.jpg" className="invisible justify-end" />
                            </div>
                        </div>
                        {/* Tabs below search bar */}
                        <div className="flex mt-9 text-gray-600 max-w-xl pl-10 text-sm w-full justify-between">
                            {/*Left*/}
                            <div className="flex space-x-2 ml-4 text-xs md:space-x-4 sm:max-w-lg lg:max-w-2xl justify-between">
                                <div className="flex"><SearchIcon className="h-5 text-blue-500 ml-1 mr-1" /><p className="hover:cursor-pointer  flex invisible sm:visible md:text-sm border-b-4 pb-2  border-blue-500"> All</p></div>
                                <div className="flex"><NewspaperIcon className="h-5  text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer invisible sm:visible md:text-sm text-0 flex">News</p></div>
                                <div className="flex"><VideoCameraIcon className="h-5 text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer invisible sm:visible md:text-sm flex"> Videos</p></div>
                                <div className="flex"><BookOpenIcon className="h-5  text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer text-0 invisible sm:visible md:text-sm flex"> Books</p></div>
                                <div className="flex"><CameraIcon className="h-5  text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer invisible sm:visible md:text-sm flex">Images</p></div>
                                <div className="flex"><DotsVerticalIcon className="h-5 text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer invisible sm:visible md:text-sm flex">More</p></div>
                            </div>
                            {/*Right*/}
                            <div className="justify-right w-full ml-24 invisible md:visible">
                                <p>Tools</p>
                            </div>
                        </div>
                    </div>
                </header>
                {/*End of Header*/}
            {/*Results*/}
        </div>
    )
};

export default search

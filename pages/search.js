import Head from "next/head";
import Image from 'next/image';
import Avatar from "../components/Avatar"
import Searchresults from "../components/Searchresults"
import { XIcon, CogIcon, ViewGridIcon, MicrophoneIcon, DotsVerticalIcon, NewspaperIcon, VideoCameraIcon, CameraIcon} from "@heroicons/react/solid";
import { SearchIcon, BookOpenIcon } from "@heroicons/react/outline";
import { API_KEY, CTX_KEY } from "../keys";
import { useRouter } from "next/router"


function search( {results} ) {
    const router = useRouter();
    console.log(results);
    return (
        <div className="overflow-x-hidden pt-3 md:pt-0 pl-2">
            <Head>
                <title></title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*Header*/}
            <header className="flex pl-2 sm:flex-row flex-col border-b-2 border-gray-100">
                <Image 
                onClick={() => router.back()}
                className="object-contain md:absolute cursor-pointer"
                src="https://www.jobalign.com/wp-content/uploads/2018/01/google-logo-png-hd-11.png" 
                height={48} 
                width={142}
                />
                    {/* Div for search bar and tabs*/}
                    <div className="w-full flex flex-col flex-grow">
                        {/* Div for Search bar and top right icons*/}
                        <div className="flex  w-full justify-between">
                            {/* Search bar*/}
                            <div className="flex shadow-md mt-5 ml-5 mr-2 hover:shadow-lg lg focus-within:shadow-lg flex-grow md:ml-16 rounded-full border border-gray-200 p-3 items-center sm:max-w-lg lg:max-w-2xl">
                                <input type="text" className="pl-3 flex-grow focus:outline-none"/>
                                <XIcon className="h-5 pl-4 transition hover:scale-110 text-gray-500 ml-4" />
                                <MicrophoneIcon className="h-5 hidden md:block border-l-2 pl-4 text-blue-500 ml-4" />
                                <SearchIcon className="h-5 hidden md:block text-blue-500 ml-5 mr-3" />
                            </div>
                            {/* Icons*/}
                            <div className="pt-7 pr-5 space-x-1 hidden sm:flex flex-row">
                                <CogIcon className="h-10 transition hidden lg:block rounded-full hover:bg-gray-100 text-gray-500 p-2" />
                                <ViewGridIcon className="h-10 transition hidden md:block rounded-full hover:bg-gray-100 text-gray-500 p-2" />
                                <Avatar url="https://boutiquephotographer.com/wp-content/uploads/2015/04/WORK_Headshot-Square.001_WEB.jpg" className="invisible justify-end" />
                            </div>
                        </div>
                        {/* Tabs below search bar */}
                        <div className="flex mt-9 text-gray-600 justify-between max-w-lg md:pl-10 text-sm w-full md:justify-start">
                            {/*Left*/}
                            <div className="flex ml-6 flex-grow max-w-md space-x-3 text-xs sm:max-w-lg lg:max-w-lg justify-evenly float-left sm:flex-grow-0">
                                <div className="flex border-b-4 pb-2  border-blue-500"><SearchIcon className="h-5 text-blue-500 ml-1 mr-1" /><p className="hover:cursor-pointer hidden sm:block md:text-sm "> All</p></div>
                                <div className="flex hover:border-b-4 border-blue-500"><NewspaperIcon className="h-5  text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer hidden sm:block md:text-sm text-0 flex">News</p></div>
                                <div className="flex  hover:border-b-4 border-blue-500"><VideoCameraIcon className="h-5 text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer hidden sm:block md:text-sm flex"> Videos</p></div>
                                <div className="flex  hover:border-b-4 border-blue-500"><BookOpenIcon className="h-5  text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer text-0 hidden sm:block md:text-sm flex"> Books</p></div>
                                <div className="flex  hover:border-b-4 border-blue-500"><CameraIcon className="h-5  text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer hidden sm:block md:text-sm flex">Images</p></div>
                                <div className="flex  hover:border-b-4 border-blue-500"><DotsVerticalIcon className="h-5 text-gray-500 ml-1 mr-1" /><p className="hover:cursor-pointer hidden sm:block md:text-sm flex">More</p></div>
                            </div>
                            {/*Right*/}
                            <div className="justify-right hidden md:flex w-full ml-24 invisible md:visible">
                                <p className="link">Tools</p>
                            </div>
                        </div>
                    </div>
                </header>
                {/*End of Header*/}
            {/*Results*/}
            <Searchresults results={results} />

        </div>
    )
};

export default search

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    //Render data on server

    const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CTX_KEY}&q=${context.query.term}&start=${startIndex}`)
        .then(response => response.json());

    //After server has rendered..send results to client

    return {
        props: {
            results: data
        }

    };

}

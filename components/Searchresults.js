
function Searchresults( {results} ) {
    return (
        <div className="ml-4 pr-8 sm:ml-24 md:ml-48 lg:ml-52 mt-2">
            <p className="text-sm text-gray-400">About {results.searchInformation.formattedTotalResults} results in ({results.searchInformation.formattedSearchTime} seconds)</p>
            {results.items?.map((result) => (
                <div className="w-full group cursor-pointer mb-10" key={result.link}>
                    <a className=" line-clamp-1 text-sm" href={result.link}>{result.formattedUrl}</a>
                    <div></div>
                    <h1 className="text-lg group-hover:underline text-blue-800 font-normal">{result.title}</h1>
                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}
        </div>
    )
}

export default Searchresults


function Footer() {
    return (
        <footer className="flex w-full  p-3  bottom-0 bg-gray-100 absolute flex-col justify-center align-center text-gray-500 text-center items-center text-sm">
            <div className="flex w-full lg:invisible justify-center pb-3 lg:pb-0">
                <HeartIcon className="h-5 mr-2 text-green-600" />
                <h1 className="link">Carbon Neutral Since 2007</h1>
            </div>
            <div className="flex w-full flex-col text-center sm:flex-row justify-evenly">
                <div className="flex justify-center space-x-6">
                    <p className="link">Advertising</p>
                    <p className="link">Business</p>
                    <p className="link">How Search works</p>
                </div>
                <div className="flex invisible lg:visible justify-center">
                    <h1 className="link">Carbon Neutral Since 2007</h1>
                </div>
                <div className="flex justify-center space-x-6 ">
                    <p className="link">Privacy</p>
                    <p className="link">Terms</p>
                    <p className="link">Settings</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer

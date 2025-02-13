import { useAPI } from "@/contexts/useAPIContext"

const Home = () => {

    const {apiData} = useAPI()

    return (
        <div>
            <section className="bg-gray-200 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to Allmadas
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Your one-stop solution for all your needs.
                    </p>
                    <a className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600" href="#">
                        Get Started
                    </a>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img alt="Icon representing service 1" height="100" src="https://storage.googleapis.com/a1aa/image/mxAFkWYwysfJYrxweFURQUorrwuSArUabyIzPUU2INc.jpg" width="100" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Service 1
                            </h3>
                            <p className="text-gray-600">
                                Description of service 1.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img alt="Icon representing service 2" className="mx-auto mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/Tp-F_v3M5PbPmrmsV6dgSTqooVzO0hyZuwGOTDvXqi0.jpg" width="100" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Service 2
                            </h3>
                            <p className="text-gray-600">
                                Description of service 2.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img alt="Icon representing service 3" className="mx-auto mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/M-gjc_guxvcmPzUfbWoxdghzQ7OI_lCt4Wwb-tYVBvM.jpg" width="100" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Service 3
                            </h3>
                            <p className="text-gray-600">
                                Description of service 3.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Latest News
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img alt="Image representing news item 1" className="w-full mb-4" height="400" src="https://storage.googleapis.com/a1aa/image/Uxu7xXSZ1z1w6DTqGHQxfGAl4UYM4Jd4EEMYzhLUm2c.jpg" width="600" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                News Item 1
                            </h3>
                            <p className="text-gray-600">
                                Summary of news item 1.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img alt="Image representing news item 2" className="w-full mb-4" height="400" src="https://storage.googleapis.com/a1aa/image/C20cCq-gqO6zh_SirRYOMUTRB3Tc1lr1m4bM7H81Oio.jpg" width="600" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                News Item 2
                            </h3>
                            <p className="text-gray-600">
                                Summary of news item 2.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img alt="Image representing news item 3" className="w-full mb-4" height="400" src="https://storage.googleapis.com/a1aa/image/RF0j5ytJy_2PtmCExd5jZWQ_STbAQwyJvX48QFbMSD4.jpg" width="600" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                News Item 3
                            </h3>
                            <p className="text-gray-600">
                                Summary of news item 3.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Contact Us
                    </h2>
                    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                        <form action="#">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" type="email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="4"></textarea>
                            </div>
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
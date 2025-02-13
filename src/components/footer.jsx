const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto px-4 text-center text-white">
                <p>
                    © Um projeto de Sidney Figueiredo. Esta empresa é inteiramente ficticia.
                </p>
                <div className="mt-4 space-x-4">
                    <a className="text-white hover:text-gray-400" href="#">
                        <i className="fab fa-facebook-f">
                        </i>
                    </a>
                    <a className="text-white hover:text-gray-400" href="#">
                        <i className="fab fa-twitter">
                        </i>
                    </a>
                    <a className="text-white hover:text-gray-400" href="#">
                        <i className="fab fa-instagram">
                        </i>
                    </a>
                    <a className="text-white hover:text-gray-400" href="#">
                        <i className="fab fa-linkedin-in">
                        </i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
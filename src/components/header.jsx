import Link from "next/link";
import NavItems from "./nav_items";

const Header = () => {
    return (
        <header>
            <div className="social_offers"><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><a href=""></a><a href=""></a></div>
            <div className='header_menu_nav'>
                <img src="https://picsum.photos/300/80" alt=""/>
                <NavItems />
            </div>
        </header>
    )
}

export default Header;
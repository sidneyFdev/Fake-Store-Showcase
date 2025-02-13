import Link from "next/link"

const NavItems = () => {
    return( 
        <nav>
            <Link href="/" className="menu_item_link">Inicio</Link>
            <Link href="/products" className="menu_item_link">Produtos</Link>
            <Link href="/about" className="menu_item_link">Sobre</Link>
            <Link href="/contact" className="menu_item_link">Contato</Link>
        </nav>
    )
}

export default NavItems
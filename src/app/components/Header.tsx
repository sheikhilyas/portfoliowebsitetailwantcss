import Link from "next/link";
function Header() {
    return (
        <header className="flex items-center justify-between py-4 px-6 bg-teal-700 text-white">
            <h1 className="text-2xl font-bold">*SI*</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

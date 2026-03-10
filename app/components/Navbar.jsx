import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">Game Portal</div>
                <ul className="flex space-x-6">
                    <li>

                        <a className="hover:text-blue-600 transition-colors">Home</a>

                    </li>
                    <li>

                        <a className="hover:text-blue-600 transition-colors">About Us</a>

                    </li>
                    <li>

                        <a className="hover:text-blue-600 transition-colors">Policy</a>

                    </li>
                    <li>

                        <a className="hover:text-blue-600 transition-colors">Contact Us</a>

                    </li>
                </ul>
            </div>
        </nav>
    );
}
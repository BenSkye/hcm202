'use client'

import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-primary text-white shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link href="/" className="hover:text-secondary transition-colors">
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link href="/timeline" className="hover:text-secondary transition-colors">
                            Dòng thời gian
                        </Link>
                    </li>
                    <li>
                        <Link href="/chat" className="hover:text-secondary transition-colors">
                            Hỏi đáp AI
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header


import Link from "next/link";

import style from '@/styles/navbar.module.css'

export default function Navbar()
{
    return (
        <nav className={style.navbar_body}>
            <div className={style.navbar_links}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="about">About</Link></li>
                    <li><Link href="projects">Projects</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                    <li><Link href="impressum">Impressum</Link></li>
                </ul>
            </div>
    </nav>
    )
}
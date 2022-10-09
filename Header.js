import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <a href="https://www.crunchyroll.com/attack-on-titan"><img src="./aot.png" className="nav-logo" /></a>
                <ul className="nav-items">
                    <li>Anime</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                </ul>
            </nav>
        </header>
    )
}

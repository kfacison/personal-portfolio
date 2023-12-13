// built in components from next.js
// self-referencial links us the Link component
import Link from "next/link"

export default function NavBar(){
    return (
        <nav>
            &nbsp;
            <Link href="#home">Home</Link>
            &nbsp;
            |
            &nbsp;
            <Link href="#about">About</Link>
            &nbsp;
        </nav>
    )
}
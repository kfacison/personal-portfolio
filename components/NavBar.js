// built in components from next.js
// self-referencial links us the Link component
import Link from "next/link"
import "@/styles/globals.css"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400','500','600','700'],
})

export default function NavBar(){
    return (
        <>
        <nav id="navBar" className={montserrat.className}>
            &nbsp;
            <Link className="link" href="#">About</Link>
            &nbsp;
            
            &nbsp;
            <Link className="link" href="#skills">Skills</Link>
            &nbsp;
            
            &nbsp;
            <Link className="link" href="#projects">Projects</Link>
            &nbsp;
            
            &nbsp;
            <Link className="link" href="#contacts">Contacts</Link>
            &nbsp;
            
        </nav>
        </>
    )
}
// built in components from next.js
// self-referencial links us the Link component
import Link from "next/link"
import "@/styles/Home.module.css"

export default function NavBar(){
    return (
        <>
        <nav className="navBar">
            &nbsp;
            <Link className="link" href="#">Top</Link>
            &nbsp;
            
            &nbsp;
            <Link className="link" href="#about">About</Link>
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
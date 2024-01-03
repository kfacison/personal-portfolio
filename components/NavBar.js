// built in components from next.js
// self-referencial links us the Link component
import Link from "next/link"

export default function NavBar(){
    return (
        <>
        <style jsx>{`
            .navBar{
                color: red;
                border: 2px solid red;
            }
        `}</style>
        <nav className="navBar">
            &nbsp;
            <Link href="#top">Top</Link>
            &nbsp;
            |
            &nbsp;
            <Link href="#about">About</Link>
            &nbsp;
            |
            &nbsp;
            <Link href="#skills">Skills</Link>
            &nbsp;
            |
            &nbsp;
            <Link href="#projects">Projects</Link>
            &nbsp;
            |
            &nbsp;
            <Link href="#contacts">Contacts</Link>
            &nbsp;
            
        </nav>
        </>
    )
}
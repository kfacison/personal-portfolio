import Image from "next/image";
// import css module for this component
// any clAss defined in the module will be availible with dot notation
// import styles from "@/styles/About.module.css";
// all react hooks are availible to us
// import { useState } from "react";

export default function About(){
    return (
        <>
        <h1>About Me</h1>

        <p> work in progress </p>

        {/* <img src="/headShot.png" alt="cool pic"/> */}

        {/* <Image 
                src="/headshot.png"
                alt="me debugging my sphagetti code"
                // if you do use next Images -- hard coded width and height is required
                width={400}
                height={600}
            /> */}

            {/* using another hosting service */}
            {/* <Image 
                src="https://placekitten.com/400/600"
                alt="Cat"
                width={400}
                height={600}
            /> */}

        {/* dynaimc css with js values injected into it from state/context */}
        <style jsx>{`
            .fontSize{
                font-size: 2rem;
            }
        `}</style>

        <p className="fontSize">work in progress</p>
        </>
    )
}
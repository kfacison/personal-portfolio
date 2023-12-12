export default function About(){
    return (
        <>
        <h1>About Me</h1>

        <p> words about me</p>

        <img src="/theyThem.png" alt="cool pic"/>

        <style jsx>{`
            .fontSize{
                font-size: 2rem;
            }
        `}</style>

        <p className="fontSize">WORDS GO BRRRRR</p>
        </>
    )
}
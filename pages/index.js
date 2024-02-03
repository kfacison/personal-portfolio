import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kylie Facison - Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width," /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id='top'>
        {/* Kylie Facison === <small>Full Stack Software Developer</small>     */}
        <h1>Kylie Facison = Full-Stack Software Developer</h1>
      </header>

      <div id='about'>
        <Image 
          src="/personal/headShotSmall.png" 
          alt="Kylie Facison Headshot" 
          width={350}
          height={285}
        />
        <p style={{ maxWidth:500}}>
          As a Full-Stack developer, I love problem-solving, and the challenge of building something from scratch.
          My open-minded nature and capacity to see various viewpoints help me problem-solve and troubleshoot when coding. 
          In the future, I want to contribute to the tech industry&apos;s diversity so that other people can have equal opportunities.
        </p>
      </div>

      <div id='skills'>
        <h2>Skills</h2>
        <div>
        <p>JavaScript</p>
        <p>CSS</p>
        <p>HTML</p>
        <p>Python</p>
        <p>TypeScript</p>
        <p>Java </p>
        <p>C++</p>
        <p>C</p>
        <p>React.js</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>Next.js</p>
        <p>SQL</p>
        <p>PostgreSQL </p>
        <p>MongoDB </p>
        <p>Mongoose </p>
        <p>Django </p>
        <p>Git</p>
        <p>GitHub</p>
        <p>MathLab </p>
        </div>
      </div>

      <div id='projects'>
        <h2>Projects</h2>

        <div id='preview'>
          <span id='dec'>
          <h3>Yahtzee</h3>
          <p style={{ maxWidth:365}}>
          A dice game where you try to roll certain combinations of numbers with five dice. The project was made with HTML, CSS, and JavaScript.
          </p>
          </span>
          <Image 
          src="/screenShots/YahtzeePreview.png" 
          alt="Yahtzee Screenshot" 
          width={600}
          height={285}
          />
          <span id='preLink'>
          <Link href='https://github.com/kfacison/yahtzee_project1' target="_blank">GitHub</Link>
          <Link href='https://kfacison.github.io/yahtzee_project1/' target="_blank">Play Game</Link>
          </span>
        </div>

        <div id='preview'>
          <span id='dec'>
          <h3>Recipe Repo</h3>
          <p style={{ maxWidth:365}}>
          A full-stack application where users can store recipes. The App has Google oAuth and CRUD, made with Node, Express, and MongoDB.
          </p>
          </span>
          <Image 
          src="/screenShots/RecipeRepoPreview.png" 
          alt="Recipe Repo Screenshot" 
          width={600}
          height={285}
          />
          <span id='preLink'>
          <Link href='https://github.com/kfacison/Recipe_Repo_Project_2' target="_blank">GitHub</Link>
          <Link href='https://reciperepo-4c11628bb5b7.herokuapp.com/' target="_blank">Visit Site</Link>
          </span>
        </div>

        <div id='preview'>
          <span id='dec'>
          <h3>SpaceBook</h3>
          <p style={{ maxWidth:365}}>
          A social networking app where users can sign in, make posts, and connect with other users. The app uses a MERN Stack developed with the contribution of fellow developers.
          </p>
          </span>
          <Image 
          src="/screenShots/SpaceBookPreview.png" 
          alt="SpaceBook Screenshot" 
          width={600}
          height={285}
          />
          <span id='preLink'>
          <Link href='https://github.com/kfacison/spaceBook-P3' target="_blank">GitHub</Link>
          <Link href='https://space-book-5ba0b58adc3c.herokuapp.com/' target="_blank">Play Game</Link>
          </span>
        </div>

      </div>

      <div id='contacts'>
        <h2>Contacts</h2>
        <p>Email: kfacison1998@gmail.com</p>
        <div id='contactLink'>
          <div>
            <Link href='https://github.com/kfacison' target="_blank">
              <Image 
              src="/icons/github-mark.png" 
              alt="GitHub Icon" 
              width={75}
              height={75}
              />
              GitHub
            </Link>
          </div>

          <div>
            <Link href='https://www.linkedin.com/in/kyliefacison1998' target="_blank">
              <Image 
              src="/icons/linkedin.png" 
              alt="LinkedIn Icon" 
              width={75}
              height={75}
              />
              LinkedIn
            </Link>
          </div>

          <div>
            <Link href='/personal/Kylie_Facison_Resume 2.1.1(2024).pdf' target="_blank">
            <Image 
            src="/icons/resume-7-256.png" 
            alt="Resume Icon" 
            width={75}
            height={75}
            />
              Resume
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

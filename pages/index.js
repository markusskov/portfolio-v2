// Import Components here
import Head from 'next/head';
import Header from '../components/header/Header';
import Navigation from '../components/header/Navbar';
import Body from '../components/body/Body';
import Main from '../components/main/Main';
import Intro from '../components/intro/Intro';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Markus`s Portfolio Website</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon/ico" />
      </Head>

      <Body>
        <Header>
          <Navigation />
        </Header>
        <Main>
          <Intro />
          <Projects />
          <Skills />
          <Contact />
        </Main>
      </Body>
    </>
  );
}

import Head from 'next/head';
import Header from '../components/header/Header';
import Navigation from '../components/header/Navbar';
import Body from '../components/body/Body';
import Main from '../components/main/Main';
import Contact from '../components/contact/Contact';
import AboutSection from '../components/about/AboutSection';
import Experience from '../components/experience/Experience';
import SoMe from '../components/some/SoMe';

export default function About() {
  return (
    <>
      <Head>
        <title>Markus`s Portfolio Website | About Me</title>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon/ico" />
      </Head>

      <Body>
        <Header>
          <Navigation />
        </Header>
        <Main>
          <AboutSection />
          <Experience />
          <SoMe />
          <Contact />
        </Main>
      </Body>
    </>
  );
}

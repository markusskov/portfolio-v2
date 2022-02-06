// Import Components here
import Head from 'next/head';
import Header from '../components/header/Header';
import Navigation from '../components/header/Navbar';
import Body from '../components/body/Body';
import Main from '../components/main/Main';
import Intro from '../components/intro/Intro';

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
        </Main>
      </Body>
    </>
  );
}

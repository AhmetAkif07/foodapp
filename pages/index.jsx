import Head from 'next/head'
import Image from 'next/image'
import Home from "./home/index";
import Header from '../components/layout/Header';

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        

      </Head>
      
      <Header />
      <Home />
    </div>
  )
}
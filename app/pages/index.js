import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";
import { useMemo } from "react";
import Footer from "../components/Footer";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { AppProvider } from "../context/context";
import Head from 'next/head'
import { useAppContext } from "../context/context";
require ("@solana/wallet-adapter-react-ui/styles.css")


export default function Home() {
  const endpoint="https://solana-devnet.g.alchemy.com/v2/ttkYYDVD0U3SIW18IW7LZY7rG_P3aMQz";
  const context = useAppContext()
  
  const wallets = useMemo(()=>[
    new PhantomWalletAdapter(),
  ],[])
  return (
      <ConnectionProvider endpoint={endpoint} className={`${style.wrapper} w-[99.2vw] bg-blue-500`}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <AppProvider>
        <Head>
        <title>The Buzz Raffle</title>
        <link rel="shortcut icon" href="https://i.postimg.cc/0NfnRKZy/Progetto-senza-titolo-removebg-preview.png" />
      </Head>
        <Header />
        <PotCard />
        <Table />
        <Footer/>
          </AppProvider>
      </WalletModalProvider>
      </WalletProvider>
      </ConnectionProvider>
    
  );
}

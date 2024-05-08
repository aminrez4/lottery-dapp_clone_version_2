import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className="flex space-x-3 items-center justify-center">

      <div className={`${style.title}`}>THE BUZZ RAFFLE</div>
      <img src="https://i.postimg.cc/0NfnRKZy/Progetto-senza-titolo-removebg-preview.png" alt="" className="w-10 cursor-pointer h-10"/>
      </div>

      <WalletMultiButton/>
    </div>
  );
};

export default Header;

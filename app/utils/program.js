// Import necessary functions and constants from the Solana web3.js and SPL Token packages
import {
  Connection,
  Keypair,
  PublicKey,
  LAMPORTS_PER_SOL
} from "@solana/web3.js";

import {
  getTransferFeeAmount,
  unpackAccount,
  TOKEN_2022_PROGRAM_ID,
} from "@solana/spl-token";

import { AnchorProvider, BN, Program } from "@project-serum/anchor";
import IDL from "./idl.json";
import {
  LOTTERY_SEED,
  MASTER_SEED,
  PROGRAM_ID,
  TICKET_SEED,
} from "./constants";

const decimals = 9;
const minRequirement = 600; // MINIMUM TOKEN HELDED TO PARTICIPATE
const minRequirementAmount = BigInt(minRequirement * Math.pow(10, decimals)); // Transfer 1,000 tokens

const connection = new Connection("https://api.devnet.solana.com", "confirmed"); // CHANGE PASSING RPC FRON ENV
const mint = new PublicKey("78yuNs9f6eqYEFNcxec3mkiLERNqpLZg6SA3nkyzvPLj"); // account propietario della Mint Authority

// How to fetch our Program
export const getProgram = (connection, wallet) => {
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });
  const program = new Program(IDL, PROGRAM_ID, provider);
  return program;
};

export const getMasterAddress = async () => {
  return (
    await PublicKey.findProgramAddress([Buffer.from(MASTER_SEED)], PROGRAM_ID)
  )[0];
};

export const getLotteryAddress = async (id) => {
  return (
    await PublicKey.findProgramAddress(
      [Buffer.from(LOTTERY_SEED), new BN(id).toArrayLike(Buffer, "le", 4)],
      PROGRAM_ID
    )
  )[0];
};

export const getTicketAddress = async (lotteryPk, id) => {
  return (
    await PublicKey.findProgramAddress(
      [
        Buffer.from(TICKET_SEED),
        lotteryPk.toBuffer(),
        new BN(id).toArrayLike(Buffer, "le", 4),
      ],
      PROGRAM_ID
    )
  )[0];
};

// Return the lastTicket ID and multiply the ticket price and convert LAMPORTS PER SOL and convert it to String
export const getTotalPrize = (lottery) => {
  return new BN(lottery.lastTicketId)
    .mul(lottery.ticketPrice)
    .div(new BN(LAMPORTS_PER_SOL))
    .toString();
};

const getAllHolders = async ()=> {
  return await connection.getProgramAccounts(TOKEN_2022_PROGRAM_ID, {
    commitment: "confirmed",
    filters: [ 
      {
        memcmp: {
          offset: 0,
          bytes: mint.toString(),
        },
      },
    ],
  });
}

const getAllHoldersEligibleToWin = async ()=> {
  const allAccounts = await getAllHolders();

  const accountsEligibleToWin = [];
  console.log("Checking all accounts eligible to win with more then:", minRequirementAmount , " $BUZZ");
  for (const accountInfo of allAccounts) {
    const account =  unpackAccount(accountInfo.pubkey, accountInfo.account, TOKEN_2022_PROGRAM_ID);
    const transferFeeAmount  =  getTransferFeeAmount(account);
   
    console.log("Holder: ", account.address.toBase58());
    console.log("Token owned: ", account.amount); // recupero quantità di token posseduti
    //aggiungere check min ammount per essere elegibile.
    //escludere mint
    if (account.amount !== null && account.amount > minRequirementAmount && transferFeeAmount !== null && transferFeeAmount.withheldAmount > BigInt(0)) {
      accountsEligibleToWin.push(accountInfo.pubkey);
    }
  }
  
  console.log("accounts Eligible To Win:", accountsEligibleToWin);
  
  return accountsEligibleToWin;

}

export const getFeesAmount = async()=>{
  const allAccounts = await getAllHolders();


    const accountsToWithdrawFrom = [];
    let totalFeesAccounts= 0;
    for (const accountInfo of allAccounts) {
      const account =  unpackAccount(accountInfo.pubkey, accountInfo.account, TOKEN_2022_PROGRAM_ID);
      console.log("acoount holder", account.amount); // recupero quantità di token posseduti
      //aggiungere check min ammount per essere elegibile.
      const transferFeeAmount  =  getTransferFeeAmount(account);
      if (transferFeeAmount !== null && transferFeeAmount.withheldAmount > BigInt(0)) {
        totalFeesAccounts += (Number(transferFeeAmount.withheldAmount)/ Math.pow(10, decimals)).valueOf();
        accountsToWithdrawFrom.push(accountInfo.pubkey);
      }
    }
    console.log("holders:", accountsToWithdrawFrom);
    console.log("total fee:", totalFeesAccounts);
    console.log(getAllHoldersEligibleToWin())
    return totalFeesAccounts;
};

export const getUserWallet = async ()=> {
  
  //RETRIVE ASSOCIATED TOKEN ACCOUNT
  const ataAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet.publicKey,
    mint,
    wallet.publicKey,
    true,
    "confirmed",
    null,
    TOKEN_2022_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID
  );
  const wallet = ataAccount.address.toBase58
  console.log("WALLET  ata ADRESS PARTECIPANTE",  ataAccount.address.toBase58())
  setUserWallet(ataAccount.address.toBase58())
}






import { ethers } from "ethers";
import { abi } from "./abi";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const contractAddres: string = "0x8DD87a45502ea46f8E75e674D4bE778227069019";
const contract = new ethers.Contract(contractAddres, abi, provider);

export async function getInformationCount() {
  const count: bigint = await contract.digitalInformationCount();
  console.log(count.toString());
}

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      provider.send("eth_requestAccounts", []);
    } catch (error) {
      console.error("wallet connection failed ", error);
    }
  } else {
    alert("metamask not found please install it");
  }
};

export const viewIdentity = async (walletAddress: string) => {
  const identity: Object = await contract.viewIdentity(walletAddress);
  return identity;
};

export const registerIdentity = async (
  fullName: string,
  dateOfBirth: number,
  email: string,
  phoneNumber: string,
  photoDirectory: string,
  fingerprintHaash: string,
  documentDirectory: string
) => {
  if (!window.ethereum) {
    console.error("metamask not installed");
    return;
  }

  try {
    // Create a contract instance connected to the signer
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddres, abi, signer);
    const tx = await contract.registerIdentity(
      fullName,
      dateOfBirth,
      email,
      phoneNumber,
      photoDirectory,
      fingerprintHaash,
      documentDirectory
    );
    console.log(`transaction sent ${tx.hash}`);
    await tx.wait();
    console.log("transaction confirmed");
  } catch (error) {
    console.log("transaction failed", error);
  }
};

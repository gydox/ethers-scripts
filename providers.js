import 'dotenv/config';
import { ethers } from "ethers";

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// alternatively
// const provider = new ethers.providers.InfuraProvider(
//     "homesteed", 
//     process.env.INFURA_KEY
// )

// console.log("Current block number: ", await provider.getBlockNumber());

// console.log("atg.eth is: ", await provider.resolveName("atg.eth"));
// const vitalikBalance = (await provider.getBalance("vitalik.eth")).toString()

// console.log(
//     "vitalik.eth has: ", 
//     ethers.utils.formatEther(vitalikBalance)
// );

console.log(
    "1.5 eth is:",
    ethers.utils.formatEther(ethers.utils.parseEther("1.5")),
    "wei"
)

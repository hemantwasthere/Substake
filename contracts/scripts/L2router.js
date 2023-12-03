const {ethers, JsonRpcProvider} = require("ethers");

let fs= require('fs');
const fsPromise = fs.promises;

const ALCHEMY_RPC_URL = ""
const privateKey = ""

const substakeL2routerProxyabipath = "../out/SubstakeL2RouterProxy.sol/SubstakeL2RouterProxy.json";
const substakeL2routerProxyAddress = "";

const scrollSepoliaRPC = ""

const provider = new JsonRpcProvider(scrollSepoliaRPC);
const signer = new ethers.Wallet(privateKey, provider);

async function getAbi(path){
    const data = await fsPromise.readFile(path, 'utf-8');
    const abi = JSON.parse(data);
    return abi;substake
}

const main = ()=> {
    //_upgradeImplementation()
    //_initializeVault()
}

const _upgradeImplementation = async () => {
    const PROXY_ABI = await getAbi(substakeL2routerProxyabipath);
    const contract = new ethers.Contract(substakeL2routerProxyAddress, PROXY_ABI.abi, signer);
    const substakeL2routerImplementation = "";
    console.log("Updating implementaion.........................");
    let tx = await contract.upgradeImplementation(substakeL2routerImplementation)
    await tx.wait()
    .then(() => {
        console.log("substakeL2router Implementation Updated!");
    })
    .catch((error) => {
        console.log("Failed to update implementation.");
        console.log(error);
    })
}

const _initializeVault = async () => {
    const IMPLEMENTATION_ABI = await getAbi(substakeL2routerImplementationabipath);
    const contract = new ethers.Contract(substakeL2routerProxyAddress, IMPLEMENTATION_ABI.abi, signer);
    const admin = "0x55d9a0d367866a102eD85EA76CE46B11E62b3E88";
    const L2config ="0x7a5483542b602e130a05Db23a7E2AeC59b2F08C6";
    console.log("Initializing substakeL2router.................................");
    let tx = await contract.initialize(admin,L2config);
    await tx.wait()
    .then(() => {
        console.log("substakeL2router Initialized!");
    })
    .catch((error) => {
        console.log("Failed to initialize substakeL2router!");
        console.log(error);
    })
}

main();

const hre = require("hardhat");
require('hardhat-deploy');



async function verify(address, constructorArguments) {
  console.log(`verify  ${address} with arguments ${constructorArguments.join(',')}`)
  run("verify:verify", {
    address,
    constructorArguments
  })
}

async function main() {
  let signer = "0x16D0891C4E05BffB1f3247aB9d2a36160c409bAb";
  let tomi = "0x4385328cc4D643Ca98DfEA734360C0F596C83449";
  let cooldown = "600";
  let rewardWallet = "0xB2C52e7BF6dD149d803Ebf1Eb47Fa2CCfa5737B7";

  const rewards = await hre.ethers.deployContract("TaskRewards", [signer, tomi, cooldown, rewardWallet]);

  console.log("Deploying rewards...");

  await rewards.waitForDeployment();

  console.log("Claims deployed to:", rewards.target);

  await new Promise(resolve => setTimeout(resolve, 1000));
  verify(rewards.target, [signer, tomi, cooldown, rewardWallet]);
}

main();

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
  let signer = "0x3B0C9401816142a2aF1064a2975825fe98925fd3";
  let tomi = "0x3F28F5C870dD87c988711032E2750D0f1408AE6a";
  let cooldown = "300";
  let rewardWallet = "0xC0FC8954c62A45c3c0a13813Bd2A10d88D70750D";

  const rewards = await hre.ethers.deployContract("TaskRewards", [signer, tomi, cooldown, rewardWallet]);

  console.log("Deploying rewards...");

  await rewards.waitForDeployment();

  console.log("Claims deployed to:", rewards.target);

  await new Promise(resolve => setTimeout(resolve, 1000));
  verify(rewards.target, [signer, tomi, cooldown, rewardWallet]);
}

main();

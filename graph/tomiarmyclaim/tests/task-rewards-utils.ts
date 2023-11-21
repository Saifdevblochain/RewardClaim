import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CooldownPeriodUpdated,
  EnableRedeemUpdated,
  OwnershipTransferred,
  RewardWalletUpdated,
  SignerUpdated,
  TokensDeposited,
  TokensRedeemed
} from "../generated/TaskRewards/TaskRewards"

export function createCooldownPeriodUpdatedEvent(
  oldCoolDownPeriod: BigInt,
  newCooldownPeriod: BigInt
): CooldownPeriodUpdated {
  let cooldownPeriodUpdatedEvent = changetype<CooldownPeriodUpdated>(
    newMockEvent()
  )

  cooldownPeriodUpdatedEvent.parameters = new Array()

  cooldownPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldCoolDownPeriod",
      ethereum.Value.fromUnsignedBigInt(oldCoolDownPeriod)
    )
  )
  cooldownPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newCooldownPeriod",
      ethereum.Value.fromUnsignedBigInt(newCooldownPeriod)
    )
  )

  return cooldownPeriodUpdatedEvent
}

export function createEnableRedeemUpdatedEvent(
  oldAccess: boolean,
  newAccess: boolean
): EnableRedeemUpdated {
  let enableRedeemUpdatedEvent = changetype<EnableRedeemUpdated>(newMockEvent())

  enableRedeemUpdatedEvent.parameters = new Array()

  enableRedeemUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldAccess", ethereum.Value.fromBoolean(oldAccess))
  )
  enableRedeemUpdatedEvent.parameters.push(
    new ethereum.EventParam("newAccess", ethereum.Value.fromBoolean(newAccess))
  )

  return enableRedeemUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRewardWalletUpdatedEvent(
  oldRewardWallet: Address,
  newRewardWallet: Address
): RewardWalletUpdated {
  let rewardWalletUpdatedEvent = changetype<RewardWalletUpdated>(newMockEvent())

  rewardWalletUpdatedEvent.parameters = new Array()

  rewardWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldRewardWallet",
      ethereum.Value.fromAddress(oldRewardWallet)
    )
  )
  rewardWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRewardWallet",
      ethereum.Value.fromAddress(newRewardWallet)
    )
  )

  return rewardWalletUpdatedEvent
}

export function createSignerUpdatedEvent(
  oldSigner: Address,
  newSigner: Address
): SignerUpdated {
  let signerUpdatedEvent = changetype<SignerUpdated>(newMockEvent())

  signerUpdatedEvent.parameters = new Array()

  signerUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldSigner", ethereum.Value.fromAddress(oldSigner))
  )
  signerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )

  return signerUpdatedEvent
}

export function createTokensDepositedEvent(
  depositor: Address,
  amount: BigInt
): TokensDeposited {
  let tokensDepositedEvent = changetype<TokensDeposited>(newMockEvent())

  tokensDepositedEvent.parameters = new Array()

  tokensDepositedEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  tokensDepositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensDepositedEvent
}

export function createTokensRedeemedEvent(
  redeemer: Address,
  amount: BigInt
): TokensRedeemed {
  let tokensRedeemedEvent = changetype<TokensRedeemed>(newMockEvent())

  tokensRedeemedEvent.parameters = new Array()

  tokensRedeemedEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  tokensRedeemedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensRedeemedEvent
}

import {
  CooldownPeriodUpdated as CooldownPeriodUpdatedEvent,
  EnableRedeemUpdated as EnableRedeemUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RewardWalletUpdated as RewardWalletUpdatedEvent,
  SignerUpdated as SignerUpdatedEvent,
  TokensDeposited as TokensDepositedEvent,
  TokensRedeemed as TokensRedeemedEvent
} from "../generated/TaskRewards/TaskRewards"
import {
  CooldownPeriodUpdated,
  EnableRedeemUpdated,
  OwnershipTransferred,
  RewardWalletUpdated,
  SignerUpdated,
  TokensDeposited,
  TokensRedeemed
} from "../generated/schema"

export function handleCooldownPeriodUpdated(
  event: CooldownPeriodUpdatedEvent
): void {
  let entity = new CooldownPeriodUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldCoolDownPeriod = event.params.oldCoolDownPeriod
  entity.newCooldownPeriod = event.params.newCooldownPeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEnableRedeemUpdated(
  event: EnableRedeemUpdatedEvent
): void {
  let entity = new EnableRedeemUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAccess = event.params.oldAccess
  entity.newAccess = event.params.newAccess

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardWalletUpdated(
  event: RewardWalletUpdatedEvent
): void {
  let entity = new RewardWalletUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldRewardWallet = event.params.oldRewardWallet
  entity.newRewardWallet = event.params.newRewardWallet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignerUpdated(event: SignerUpdatedEvent): void {
  let entity = new SignerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldSigner = event.params.oldSigner
  entity.newSigner = event.params.newSigner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensDeposited(event: TokensDepositedEvent): void {
  let entity = new TokensDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensRedeemed(event: TokensRedeemedEvent): void {
  let entity = new TokensRedeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.redeemer = event.params.redeemer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

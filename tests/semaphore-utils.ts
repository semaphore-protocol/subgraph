import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  GroupAdminUpdated,
  GroupCreated,
  GroupMerkleTreeDurationUpdated,
  MemberAdded,
  MemberRemoved,
  MemberUpdated,
  ProofVerified
} from "../generated/Semaphore/Semaphore"

export function createGroupAdminUpdatedEvent(
  groupId: BigInt,
  oldAdmin: Address,
  newAdmin: Address
): GroupAdminUpdated {
  let groupAdminUpdatedEvent = changetype<GroupAdminUpdated>(newMockEvent())

  groupAdminUpdatedEvent.parameters = new Array()

  groupAdminUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  groupAdminUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  groupAdminUpdatedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return groupAdminUpdatedEvent
}

export function createGroupCreatedEvent(
  groupId: BigInt,
  merkleTreeDepth: BigInt,
  zeroValue: BigInt
): GroupCreated {
  let groupCreatedEvent = changetype<GroupCreated>(newMockEvent())

  groupCreatedEvent.parameters = new Array()

  groupCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  groupCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleTreeDepth",
      ethereum.Value.fromUnsignedBigInt(merkleTreeDepth)
    )
  )
  groupCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "zeroValue",
      ethereum.Value.fromUnsignedBigInt(zeroValue)
    )
  )

  return groupCreatedEvent
}

export function createGroupMerkleTreeDurationUpdatedEvent(
  groupId: BigInt,
  oldMerkleTreeDuration: BigInt,
  newMerkleTreeDuration: BigInt
): GroupMerkleTreeDurationUpdated {
  let groupMerkleTreeDurationUpdatedEvent = changetype<
    GroupMerkleTreeDurationUpdated
  >(newMockEvent())

  groupMerkleTreeDurationUpdatedEvent.parameters = new Array()

  groupMerkleTreeDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  groupMerkleTreeDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldMerkleTreeDuration",
      ethereum.Value.fromUnsignedBigInt(oldMerkleTreeDuration)
    )
  )
  groupMerkleTreeDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newMerkleTreeDuration",
      ethereum.Value.fromUnsignedBigInt(newMerkleTreeDuration)
    )
  )

  return groupMerkleTreeDurationUpdatedEvent
}

export function createMemberAddedEvent(
  groupId: BigInt,
  index: BigInt,
  identityCommitment: BigInt,
  merkleTreeRoot: BigInt
): MemberAdded {
  let memberAddedEvent = changetype<MemberAdded>(newMockEvent())

  memberAddedEvent.parameters = new Array()

  memberAddedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  memberAddedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  memberAddedEvent.parameters.push(
    new ethereum.EventParam(
      "identityCommitment",
      ethereum.Value.fromUnsignedBigInt(identityCommitment)
    )
  )
  memberAddedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleTreeRoot",
      ethereum.Value.fromUnsignedBigInt(merkleTreeRoot)
    )
  )

  return memberAddedEvent
}

export function createMemberRemovedEvent(
  groupId: BigInt,
  index: BigInt,
  identityCommitment: BigInt,
  merkleTreeRoot: BigInt
): MemberRemoved {
  let memberRemovedEvent = changetype<MemberRemoved>(newMockEvent())

  memberRemovedEvent.parameters = new Array()

  memberRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  memberRemovedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  memberRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "identityCommitment",
      ethereum.Value.fromUnsignedBigInt(identityCommitment)
    )
  )
  memberRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleTreeRoot",
      ethereum.Value.fromUnsignedBigInt(merkleTreeRoot)
    )
  )

  return memberRemovedEvent
}

export function createMemberUpdatedEvent(
  groupId: BigInt,
  index: BigInt,
  identityCommitment: BigInt,
  newIdentityCommitment: BigInt,
  merkleTreeRoot: BigInt
): MemberUpdated {
  let memberUpdatedEvent = changetype<MemberUpdated>(newMockEvent())

  memberUpdatedEvent.parameters = new Array()

  memberUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  memberUpdatedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  memberUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "identityCommitment",
      ethereum.Value.fromUnsignedBigInt(identityCommitment)
    )
  )
  memberUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newIdentityCommitment",
      ethereum.Value.fromUnsignedBigInt(newIdentityCommitment)
    )
  )
  memberUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleTreeRoot",
      ethereum.Value.fromUnsignedBigInt(merkleTreeRoot)
    )
  )

  return memberUpdatedEvent
}

export function createProofVerifiedEvent(
  groupId: BigInt,
  merkleTreeRoot: BigInt,
  externalNullifier: BigInt,
  nullifierHash: BigInt,
  signal: BigInt
): ProofVerified {
  let proofVerifiedEvent = changetype<ProofVerified>(newMockEvent())

  proofVerifiedEvent.parameters = new Array()

  proofVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  proofVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleTreeRoot",
      ethereum.Value.fromUnsignedBigInt(merkleTreeRoot)
    )
  )
  proofVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "externalNullifier",
      ethereum.Value.fromUnsignedBigInt(externalNullifier)
    )
  )
  proofVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierHash",
      ethereum.Value.fromUnsignedBigInt(nullifierHash)
    )
  )
  proofVerifiedEvent.parameters.push(
    new ethereum.EventParam("signal", ethereum.Value.fromUnsignedBigInt(signal))
  )

  return proofVerifiedEvent
}

import { ByteArray, log } from "@graphprotocol/graph-ts"
import {
    GroupAdminUpdated,
    GroupCreated,
    MemberAdded,
    MemberRemoved,
    ProofVerified
} from "../generated/Semaphore/Semaphore"
import { Member, Group, VerifiedProof } from "../generated/schema"
import { concat, hash } from "./utils"

/**
 * Creates a new group.
 * @param event Ethereum event emitted when a group is created.
 */
export function createGroup(event: GroupCreated): void {
    log.debug(`GroupCreated event block: {}`, [event.block.number.toString()])

    const group = new Group(event.params.groupId.toString())

    log.info("Creating group '{}'", [group.id])

    group.depth = event.params.depth
    group.zeroValue = event.params.zeroValue
    group.size = 0

    group.save()

    log.info("Group '{}' has been created", [group.id])
}

/**
 * Updates the admin of a group.
 * @param event Ethereum event emitted when a group admin is updated.
 */
export function updateGroupAdmin(event: GroupAdminUpdated): void {
    log.debug(`GroupAdminUpdated event block: {}`, [event.block.number.toString()])

    const group = Group.load(event.params.groupId.toString())

    if (group) {
        log.info("Updating admin '{}' in the group '{}'", [event.params.newAdmin.toString(), group.id])

        group.admin = event.params.newAdmin

        group.save()

        log.info("Admin '{}' of the group '{}' has been updated ", [group.admin.toString(), group.id])
    }
}

/**
 * Adds a member in a group.
 * @param event Ethereum event emitted when a member is added to a group.
 */
export function addMember(event: MemberAdded): void {
    log.debug(`MemberAdded event block {}`, [event.block.number.toString()])

    const group = Group.load(event.params.groupId.toString())

    if (group) {
        let memberId = hash(
            concat(ByteArray.fromBigInt(event.params.identityCommitment), ByteArray.fromBigInt(event.params.groupId))
        )

        while (Member.load(memberId)) {
            memberId = hash(ByteArray.fromHexString(memberId))
        }

        const member = new Member(memberId)

        log.info("Adding member '{}' in the onchain group '{}'", [member.id, group.id])

        member.group = group.id
        member.identityCommitment = event.params.identityCommitment
        member.timestamp = event.block.timestamp

        member.save()

        group.root = event.params.root
        group.size += 1

        group.save()

        log.info("Member '{}' of the onchain group '{}' has been added", [member.id, group.id])
    }
}

/**
 * Removes a member from a group.
 * @param event Ethereum event emitted when a member is removed from a group.
 */
export function removeMember(event: MemberRemoved): void {
    log.debug(`MemberRemoved event block {}`, [event.block.number.toString()])

    const group = Group.load(event.params.groupId.toString())

    if (group) {
        const memberId = hash(
            concat(ByteArray.fromBigInt(event.params.identityCommitment), ByteArray.fromBigInt(event.params.groupId))
        )

        let member = Member.load(memberId)
        let tmpMember = member

        while (tmpMember) {
            member = tmpMember
            tmpMember = Member.load(hash(ByteArray.fromHexString(member.id)))
        }

        if (member) {
            log.info("Removing member '{}' from the onchain group '{}'", [member.id, event.params.groupId.toString()])

            member.identityCommitment = group.zeroValue

            member.save()

            group.root = event.params.root
            group.size -= 1

            group.save()

            log.info("Member '{}' of the onchain group '{}' has been removed", [
                member.id,
                event.params.groupId.toString()
            ])
        }
    }
}

/**
 * Adds a verified proof in a group.
 * @param event Ethereum event emitted when a proof has been verified.
 */
export function addVerifiedProof(event: ProofVerified): void {
    log.debug(`ProofVerified event block {}`, [event.block.number.toString()])

    const group = Group.load(event.params.groupId.toString())

    if (group) {
        const verifiedProofId = hash(concat(ByteArray.fromBigInt(event.block.timestamp), event.params.signal))

        const verifiedProof = new VerifiedProof(verifiedProofId)

        log.info("Adding verified proof with signal '{}' in the onchain group '{}'", [
            event.params.signal.toHexString(),
            event.params.groupId.toString()
        ])

        verifiedProof.group = group.id
        verifiedProof.signal = event.params.signal
        verifiedProof.timestamp = event.block.timestamp

        verifiedProof.save()

        group.save()

        log.info("Verified proof with signal '{}' in the onchain group '{}' has been added", [
            event.params.signal.toHexString(),
            event.params.groupId.toString()
        ])
    }
}

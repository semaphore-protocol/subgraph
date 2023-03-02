import { Address, BigInt } from "@graphprotocol/graph-ts"
import { afterAll, assert, beforeAll, clearStore, describe, test } from "matchstick-as/assembly/index"
import { handleGroupAdminUpdated } from "../src/semaphore"
import { createGroupAdminUpdatedEvent } from "./semaphore-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
    beforeAll(() => {
        let groupId = BigInt.fromI32(234)
        let oldAdmin = Address.fromString("0x0000000000000000000000000000000000000001")
        let newAdmin = Address.fromString("0x0000000000000000000000000000000000000001")
        let newGroupAdminUpdatedEvent = createGroupAdminUpdatedEvent(groupId, oldAdmin, newAdmin)
        handleGroupAdminUpdated(newGroupAdminUpdatedEvent)
    })

    afterAll(() => {
        clearStore()
    })

    // For more test scenarios, see:
    // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

    test("GroupAdminUpdated created and stored", () => {
        assert.entityCount("GroupAdminUpdated", 1)

        // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
        assert.fieldEquals("GroupAdminUpdated", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1", "groupId", "234")
        assert.fieldEquals(
            "GroupAdminUpdated",
            "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
            "oldAdmin",
            "0x0000000000000000000000000000000000000001"
        )
        assert.fieldEquals(
            "GroupAdminUpdated",
            "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
            "newAdmin",
            "0x0000000000000000000000000000000000000001"
        )

        // More assert options:
        // https://thegraph.com/docs/en/developer/matchstick/#asserts
    })
})

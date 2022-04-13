/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crescent.farming.v1beta1";

/** PlanType enumerates the valid types of a plan. */
export enum PlanType {
  /** PLAN_TYPE_UNSPECIFIED - PLAN_TYPE_UNSPECIFIED defines the default plan type. */
  PLAN_TYPE_UNSPECIFIED = 0,
  /** PLAN_TYPE_PUBLIC - PLAN_TYPE_PUBLIC defines the public plan type. */
  PLAN_TYPE_PUBLIC = 1,
  /** PLAN_TYPE_PRIVATE - PLAN_TYPE_PRIVATE defines the private plan type. */
  PLAN_TYPE_PRIVATE = 2,
  UNRECOGNIZED = -1,
}

export function planTypeFromJSON(object: any): PlanType {
  switch (object) {
    case 0:
    case "PLAN_TYPE_UNSPECIFIED":
      return PlanType.PLAN_TYPE_UNSPECIFIED;
    case 1:
    case "PLAN_TYPE_PUBLIC":
      return PlanType.PLAN_TYPE_PUBLIC;
    case 2:
    case "PLAN_TYPE_PRIVATE":
      return PlanType.PLAN_TYPE_PRIVATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PlanType.UNRECOGNIZED;
  }
}

export function planTypeToJSON(object: PlanType): string {
  switch (object) {
    case PlanType.PLAN_TYPE_UNSPECIFIED:
      return "PLAN_TYPE_UNSPECIFIED";
    case PlanType.PLAN_TYPE_PUBLIC:
      return "PLAN_TYPE_PUBLIC";
    case PlanType.PLAN_TYPE_PRIVATE:
      return "PLAN_TYPE_PRIVATE";
    default:
      return "UNKNOWN";
  }
}

/** AddressType enumerates the available types of a address. */
export enum AddressType {
  /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
  ADDRESS_TYPE_32_BYTES = 0,
  /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
  ADDRESS_TYPE_20_BYTES = 1,
  UNRECOGNIZED = -1,
}

export function addressTypeFromJSON(object: any): AddressType {
  switch (object) {
    case 0:
    case "ADDRESS_TYPE_32_BYTES":
      return AddressType.ADDRESS_TYPE_32_BYTES;
    case 1:
    case "ADDRESS_TYPE_20_BYTES":
      return AddressType.ADDRESS_TYPE_20_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AddressType.UNRECOGNIZED;
  }
}

export function addressTypeToJSON(object: AddressType): string {
  switch (object) {
    case AddressType.ADDRESS_TYPE_32_BYTES:
      return "ADDRESS_TYPE_32_BYTES";
    case AddressType.ADDRESS_TYPE_20_BYTES:
      return "ADDRESS_TYPE_20_BYTES";
    default:
      return "UNKNOWN";
  }
}

/** Params defines the set of params for the farming module. */
export interface Params {
  /**
   * private_plan_creation_fee specifies the fee for plan creation
   * this fee prevents from spamming and is collected in the community pool
   */
  privatePlanCreationFee: Coin[];
  /**
   * next_epoch_days is the epoch length in number of days
   * it updates internal state called CurrentEpochDays that is used to process
   * staking and reward distribution in end blocker
   */
  nextEpochDays: number;
  /** farming_fee_collector is the module account address to collect fees within the farming module */
  farmingFeeCollector: string;
  /** delayed_staking_gas_fee is used to impose gas fee for the delayed staking */
  delayedStakingGasFee: Long;
  /** max_num_private_plans is the maximum number of active private plans */
  maxNumPrivatePlans: number;
}

/**
 * BasePlan defines a base plan type and contains the required fields
 * for basic farming plan functionality. Any custom farming plan type must
 * extend this type for additional functionality (for example, fixed amount plan, ratio
 * plan).
 */
export interface BasePlan {
  /** id specifies index of the farming plan */
  id: Long;
  /** name specifies the name for the plan */
  name: string;
  /**
   * type specifies the plan type; type 0 is public and 1 is private
   * public plan must be created through governance proposal and private plan is
   * created by account
   */
  type: PlanType;
  /** farming_pool_address defines the bech32-encoded address of the farming pool */
  farmingPoolAddress: string;
  /**
   * termination_address defines the Bech32-encoded address that terminates the plan
   * when the plan ends after the end time, the balance of the farming pool address
   * is transferred to the termination address
   */
  terminationAddress: string;
  /** staking_coin_weights specifies the coin weights for the plan */
  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */
  startTime?: Date;
  /** end_time specifies the end time of the plan */
  endTime?: Date;
  /** terminated indicates whether the plan has been terminated or not */
  terminated: boolean;
  /** last_distribution_time specifies the last time a distribution occurred */
  lastDistributionTime?: Date;
  /** distributed_coins specifies the total coins distributed by this plan */
  distributedCoins: Coin[];
}

/**
 * FixedAmountPlan defines a fixed amount plan that distributes a fixed amount
 * of coins for every epoch.
 */
export interface FixedAmountPlan {
  basePlan?: BasePlan;
  /** epoch_amount specifies the distributing amount for each epoch */
  epochAmount: Coin[];
}

/**
 * RatioPlan defines a plan that distributes to farmers by ratio
 * distribution for every epoch day.
 */
export interface RatioPlan {
  basePlan?: BasePlan;
  /** epoch_ratio specifies the distributing amount by ratio */
  epochRatio: string;
}

/** Staking defines a farmer's staking information. */
export interface Staking {
  amount: string;
  startingEpoch: Long;
}

/** QueuedStaking defines staking that is waiting in a queue. */
export interface QueuedStaking {
  amount: string;
}

/** TotalStakings defines the total staking amount for a staking coin denom. */
export interface TotalStakings {
  amount: string;
}

/** HistoricalRewards defines the cumulative unit rewards for a given staking coin denom and an epoch number. */
export interface HistoricalRewards {
  cumulativeUnitRewards: DecCoin[];
}

/**
 * OutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a staking coin denom.
 */
export interface OutstandingRewards {
  rewards: DecCoin[];
}

function createBaseParams(): Params {
  return {
    privatePlanCreationFee: [],
    nextEpochDays: 0,
    farmingFeeCollector: "",
    delayedStakingGasFee: Long.UZERO,
    maxNumPrivatePlans: 0,
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.privatePlanCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextEpochDays !== 0) {
      writer.uint32(16).uint32(message.nextEpochDays);
    }
    if (message.farmingFeeCollector !== "") {
      writer.uint32(26).string(message.farmingFeeCollector);
    }
    if (!message.delayedStakingGasFee.isZero()) {
      writer.uint32(32).uint64(message.delayedStakingGasFee);
    }
    if (message.maxNumPrivatePlans !== 0) {
      writer.uint32(40).uint32(message.maxNumPrivatePlans);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privatePlanCreationFee.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.nextEpochDays = reader.uint32();
          break;
        case 3:
          message.farmingFeeCollector = reader.string();
          break;
        case 4:
          message.delayedStakingGasFee = reader.uint64() as Long;
          break;
        case 5:
          message.maxNumPrivatePlans = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      privatePlanCreationFee: Array.isArray(object?.privatePlanCreationFee)
        ? object.privatePlanCreationFee.map((e: any) => Coin.fromJSON(e))
        : [],
      nextEpochDays: isSet(object.nextEpochDays)
        ? Number(object.nextEpochDays)
        : 0,
      farmingFeeCollector: isSet(object.farmingFeeCollector)
        ? String(object.farmingFeeCollector)
        : "",
      delayedStakingGasFee: isSet(object.delayedStakingGasFee)
        ? Long.fromString(object.delayedStakingGasFee)
        : Long.UZERO,
      maxNumPrivatePlans: isSet(object.maxNumPrivatePlans)
        ? Number(object.maxNumPrivatePlans)
        : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.privatePlanCreationFee) {
      obj.privatePlanCreationFee = message.privatePlanCreationFee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.privatePlanCreationFee = [];
    }
    message.nextEpochDays !== undefined &&
      (obj.nextEpochDays = Math.round(message.nextEpochDays));
    message.farmingFeeCollector !== undefined &&
      (obj.farmingFeeCollector = message.farmingFeeCollector);
    message.delayedStakingGasFee !== undefined &&
      (obj.delayedStakingGasFee = (
        message.delayedStakingGasFee || Long.UZERO
      ).toString());
    message.maxNumPrivatePlans !== undefined &&
      (obj.maxNumPrivatePlans = Math.round(message.maxNumPrivatePlans));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.privatePlanCreationFee =
      object.privatePlanCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    message.nextEpochDays = object.nextEpochDays ?? 0;
    message.farmingFeeCollector = object.farmingFeeCollector ?? "";
    message.delayedStakingGasFee =
      object.delayedStakingGasFee !== undefined &&
      object.delayedStakingGasFee !== null
        ? Long.fromValue(object.delayedStakingGasFee)
        : Long.UZERO;
    message.maxNumPrivatePlans = object.maxNumPrivatePlans ?? 0;
    return message;
  },
};

function createBaseBasePlan(): BasePlan {
  return {
    id: Long.UZERO,
    name: "",
    type: 0,
    farmingPoolAddress: "",
    terminationAddress: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    terminated: false,
    lastDistributionTime: undefined,
    distributedCoins: [],
  };
}

export const BasePlan = {
  encode(
    message: BasePlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.farmingPoolAddress !== "") {
      writer.uint32(34).string(message.farmingPoolAddress);
    }
    if (message.terminationAddress !== "") {
      writer.uint32(42).string(message.terminationAddress);
    }
    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.terminated === true) {
      writer.uint32(72).bool(message.terminated);
    }
    if (message.lastDistributionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastDistributionTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.distributedCoins) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.farmingPoolAddress = reader.string();
          break;
        case 5:
          message.terminationAddress = reader.string();
          break;
        case 6:
          message.stakingCoinWeights.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.terminated = reader.bool();
          break;
        case 10:
          message.lastDistributionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.distributedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BasePlan {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? planTypeFromJSON(object.type) : 0,
      farmingPoolAddress: isSet(object.farmingPoolAddress)
        ? String(object.farmingPoolAddress)
        : "",
      terminationAddress: isSet(object.terminationAddress)
        ? String(object.terminationAddress)
        : "",
      stakingCoinWeights: Array.isArray(object?.stakingCoinWeights)
        ? object.stakingCoinWeights.map((e: any) => DecCoin.fromJSON(e))
        : [],
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      terminated: isSet(object.terminated) ? Boolean(object.terminated) : false,
      lastDistributionTime: isSet(object.lastDistributionTime)
        ? fromJsonTimestamp(object.lastDistributionTime)
        : undefined,
      distributedCoins: Array.isArray(object?.distributedCoins)
        ? object.distributedCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BasePlan): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = planTypeToJSON(message.type));
    message.farmingPoolAddress !== undefined &&
      (obj.farmingPoolAddress = message.farmingPoolAddress);
    message.terminationAddress !== undefined &&
      (obj.terminationAddress = message.terminationAddress);
    if (message.stakingCoinWeights) {
      obj.stakingCoinWeights = message.stakingCoinWeights.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.stakingCoinWeights = [];
    }
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.terminated !== undefined && (obj.terminated = message.terminated);
    message.lastDistributionTime !== undefined &&
      (obj.lastDistributionTime = message.lastDistributionTime.toISOString());
    if (message.distributedCoins) {
      obj.distributedCoins = message.distributedCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.distributedCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BasePlan>, I>>(object: I): BasePlan {
    const message = createBaseBasePlan();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.farmingPoolAddress = object.farmingPoolAddress ?? "";
    message.terminationAddress = object.terminationAddress ?? "";
    message.stakingCoinWeights =
      object.stakingCoinWeights?.map((e) => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.terminated = object.terminated ?? false;
    message.lastDistributionTime = object.lastDistributionTime ?? undefined;
    message.distributedCoins =
      object.distributedCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFixedAmountPlan(): FixedAmountPlan {
  return { basePlan: undefined, epochAmount: [] };
}

export const FixedAmountPlan = {
  encode(
    message: FixedAmountPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.basePlan !== undefined) {
      BasePlan.encode(message.basePlan, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.epochAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FixedAmountPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixedAmountPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basePlan = BasePlan.decode(reader, reader.uint32());
          break;
        case 2:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FixedAmountPlan {
    return {
      basePlan: isSet(object.basePlan)
        ? BasePlan.fromJSON(object.basePlan)
        : undefined,
      epochAmount: Array.isArray(object?.epochAmount)
        ? object.epochAmount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FixedAmountPlan): unknown {
    const obj: any = {};
    message.basePlan !== undefined &&
      (obj.basePlan = message.basePlan
        ? BasePlan.toJSON(message.basePlan)
        : undefined);
    if (message.epochAmount) {
      obj.epochAmount = message.epochAmount.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.epochAmount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FixedAmountPlan>, I>>(
    object: I
  ): FixedAmountPlan {
    const message = createBaseFixedAmountPlan();
    message.basePlan =
      object.basePlan !== undefined && object.basePlan !== null
        ? BasePlan.fromPartial(object.basePlan)
        : undefined;
    message.epochAmount =
      object.epochAmount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRatioPlan(): RatioPlan {
  return { basePlan: undefined, epochRatio: "" };
}

export const RatioPlan = {
  encode(
    message: RatioPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.basePlan !== undefined) {
      BasePlan.encode(message.basePlan, writer.uint32(10).fork()).ldelim();
    }
    if (message.epochRatio !== "") {
      writer.uint32(18).string(message.epochRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RatioPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRatioPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basePlan = BasePlan.decode(reader, reader.uint32());
          break;
        case 2:
          message.epochRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RatioPlan {
    return {
      basePlan: isSet(object.basePlan)
        ? BasePlan.fromJSON(object.basePlan)
        : undefined,
      epochRatio: isSet(object.epochRatio) ? String(object.epochRatio) : "",
    };
  },

  toJSON(message: RatioPlan): unknown {
    const obj: any = {};
    message.basePlan !== undefined &&
      (obj.basePlan = message.basePlan
        ? BasePlan.toJSON(message.basePlan)
        : undefined);
    message.epochRatio !== undefined && (obj.epochRatio = message.epochRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RatioPlan>, I>>(
    object: I
  ): RatioPlan {
    const message = createBaseRatioPlan();
    message.basePlan =
      object.basePlan !== undefined && object.basePlan !== null
        ? BasePlan.fromPartial(object.basePlan)
        : undefined;
    message.epochRatio = object.epochRatio ?? "";
    return message;
  },
};

function createBaseStaking(): Staking {
  return { amount: "", startingEpoch: Long.UZERO };
}

export const Staking = {
  encode(
    message: Staking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (!message.startingEpoch.isZero()) {
      writer.uint32(16).uint64(message.startingEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.startingEpoch = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Staking {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      startingEpoch: isSet(object.startingEpoch)
        ? Long.fromString(object.startingEpoch)
        : Long.UZERO,
    };
  },

  toJSON(message: Staking): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.startingEpoch !== undefined &&
      (obj.startingEpoch = (message.startingEpoch || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Staking>, I>>(object: I): Staking {
    const message = createBaseStaking();
    message.amount = object.amount ?? "";
    message.startingEpoch =
      object.startingEpoch !== undefined && object.startingEpoch !== null
        ? Long.fromValue(object.startingEpoch)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueuedStaking(): QueuedStaking {
  return { amount: "" };
}

export const QueuedStaking = {
  encode(
    message: QueuedStaking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedStaking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueuedStaking {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: QueuedStaking): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueuedStaking>, I>>(
    object: I
  ): QueuedStaking {
    const message = createBaseQueuedStaking();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseTotalStakings(): TotalStakings {
  return { amount: "" };
}

export const TotalStakings = {
  encode(
    message: TotalStakings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalStakings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalStakings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalStakings {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: TotalStakings): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TotalStakings>, I>>(
    object: I
  ): TotalStakings {
    const message = createBaseTotalStakings();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseHistoricalRewards(): HistoricalRewards {
  return { cumulativeUnitRewards: [] };
}

export const HistoricalRewards = {
  encode(
    message: HistoricalRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.cumulativeUnitRewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeUnitRewards.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalRewards {
    return {
      cumulativeUnitRewards: Array.isArray(object?.cumulativeUnitRewards)
        ? object.cumulativeUnitRewards.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HistoricalRewards): unknown {
    const obj: any = {};
    if (message.cumulativeUnitRewards) {
      obj.cumulativeUnitRewards = message.cumulativeUnitRewards.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.cumulativeUnitRewards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HistoricalRewards>, I>>(
    object: I
  ): HistoricalRewards {
    const message = createBaseHistoricalRewards();
    message.cumulativeUnitRewards =
      object.cumulativeUnitRewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOutstandingRewards(): OutstandingRewards {
  return { rewards: [] };
}

export const OutstandingRewards = {
  encode(
    message: OutstandingRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutstandingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OutstandingRewards {
    return {
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OutstandingRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutstandingRewards>, I>>(
    object: I
  ): OutstandingRewards {
    const message = createBaseOutstandingRewards();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

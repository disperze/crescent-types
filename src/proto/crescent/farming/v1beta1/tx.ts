/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crescent.farming.v1beta1";

/**
 * MsgCreateFixedAmountPlan defines a SDK message for creating a new fixed
 * amount farming plan.
 */
export interface MsgCreateFixedAmountPlan {
  /** name specifies the name for the plan */
  name: string;
  /**
   * creator defines the bech32-encoded address of the creator for the private plan, termination address is also set to
   * this creator.
   */
  creator: string;
  /** staking_coin_weights specifies coins weight for the plan */
  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */
  startTime?: Date;
  /** end_time specifies the end time of the plan */
  endTime?: Date;
  /** epoch_amount specifies the distributing amount for each epoch */
  epochAmount: Coin[];
}

/** MsgCreateFixedAmountPlanResponse defines the MsgCreateFixedAmountPlanResponse response type. */
export interface MsgCreateFixedAmountPlanResponse {}

/**
 * MsgCreateRatioPlan defines a SDK message for creating a new ratio farming
 * plan.
 */
export interface MsgCreateRatioPlan {
  /** name specifies the name for the plan */
  name: string;
  /**
   * creator defines the bech32-encoded address of the creator for the private plan, termination address is also set to
   * this creator.
   */
  creator: string;
  /** staking_coin_weights specifies coins weight for the plan */
  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */
  startTime?: Date;
  /** end_time specifies the end time of the plan */
  endTime?: Date;
  /** epoch_ratio specifies the distributing amount by ratio */
  epochRatio: string;
}

/**
 * MsgCreateRatioPlanResponse  defines the Msg/MsgCreateRatioPlanResponse
 * response type.
 */
export interface MsgCreateRatioPlanResponse {}

/** MsgStake defines a SDK message for staking coins into the farming plan. */
export interface MsgStake {
  /** farmer defines the bech32-encoded address of the farmer */
  farmer: string;
  /** staking_coins specifies coins to stake */
  stakingCoins: Coin[];
}

/** MsgStakeResponse  defines the Msg/MsgStakeResponse response type. */
export interface MsgStakeResponse {}

/**
 * MsgUnstake defines a SDK message for performing unstaking of coins from the
 * farming plan.
 */
export interface MsgUnstake {
  /** farmer defines the bech32-encoded address of the farmer */
  farmer: string;
  /** unstaking_coins specifies coins to stake */
  unstakingCoins: Coin[];
}

/** MsgUnstakeResponse defines the Msg/MsgUnstakeResponse response type. */
export interface MsgUnstakeResponse {}

/** MsgHarvest defines a SDK message for claiming rewards from the farming plan. */
export interface MsgHarvest {
  /** farmer defines the bech32-encoded address of the farmer */
  farmer: string;
  /**
   * staking_coin_denoms is the set of denoms of staked coins as a source of the reward for
   * harvesting
   */
  stakingCoinDenoms: string[];
}

/** MsgHarvestResponse defines the Msg/MsgHarvestResponse response type. */
export interface MsgHarvestResponse {}

/** MsgRemovePlan defines a message for removing a terminated plan. */
export interface MsgRemovePlan {
  creator: string;
  planId: Long;
}

/** MsgRemovePlanResponse defines the Msg/RemovePlan response type. */
export interface MsgRemovePlanResponse {}

/** MsgAdvanceEpoch defines a message to advance epoch by one. */
export interface MsgAdvanceEpoch {
  /** requester defines the bech32-encoded address of the requester */
  requester: string;
}

/** MsgAdvanceEpochResponse defines the Msg/AdvanceEpoch response type. */
export interface MsgAdvanceEpochResponse {}

function createBaseMsgCreateFixedAmountPlan(): MsgCreateFixedAmountPlan {
  return {
    name: "",
    creator: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    epochAmount: [],
  };
}

export const MsgCreateFixedAmountPlan = {
  encode(
    message: MsgCreateFixedAmountPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.epochAmount) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedAmountPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFixedAmountPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.stakingCoinWeights.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFixedAmountPlan {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      stakingCoinWeights: Array.isArray(object?.stakingCoinWeights)
        ? object.stakingCoinWeights.map((e: any) => DecCoin.fromJSON(e))
        : [],
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      epochAmount: Array.isArray(object?.epochAmount)
        ? object.epochAmount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreateFixedAmountPlan): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.creator !== undefined && (obj.creator = message.creator);
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
    if (message.epochAmount) {
      obj.epochAmount = message.epochAmount.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.epochAmount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFixedAmountPlan>, I>>(
    object: I
  ): MsgCreateFixedAmountPlan {
    const message = createBaseMsgCreateFixedAmountPlan();
    message.name = object.name ?? "";
    message.creator = object.creator ?? "";
    message.stakingCoinWeights =
      object.stakingCoinWeights?.map((e) => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.epochAmount =
      object.epochAmount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateFixedAmountPlanResponse(): MsgCreateFixedAmountPlanResponse {
  return {};
}

export const MsgCreateFixedAmountPlanResponse = {
  encode(
    _: MsgCreateFixedAmountPlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedAmountPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFixedAmountPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateFixedAmountPlanResponse {
    return {};
  },

  toJSON(_: MsgCreateFixedAmountPlanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgCreateFixedAmountPlanResponse>, I>
  >(_: I): MsgCreateFixedAmountPlanResponse {
    const message = createBaseMsgCreateFixedAmountPlanResponse();
    return message;
  },
};

function createBaseMsgCreateRatioPlan(): MsgCreateRatioPlan {
  return {
    name: "",
    creator: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    epochRatio: "",
  };
}

export const MsgCreateRatioPlan = {
  encode(
    message: MsgCreateRatioPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.epochRatio !== "") {
      writer.uint32(50).string(message.epochRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRatioPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRatioPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.stakingCoinWeights.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.epochRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRatioPlan {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      stakingCoinWeights: Array.isArray(object?.stakingCoinWeights)
        ? object.stakingCoinWeights.map((e: any) => DecCoin.fromJSON(e))
        : [],
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      epochRatio: isSet(object.epochRatio) ? String(object.epochRatio) : "",
    };
  },

  toJSON(message: MsgCreateRatioPlan): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.creator !== undefined && (obj.creator = message.creator);
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
    message.epochRatio !== undefined && (obj.epochRatio = message.epochRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRatioPlan>, I>>(
    object: I
  ): MsgCreateRatioPlan {
    const message = createBaseMsgCreateRatioPlan();
    message.name = object.name ?? "";
    message.creator = object.creator ?? "";
    message.stakingCoinWeights =
      object.stakingCoinWeights?.map((e) => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.epochRatio = object.epochRatio ?? "";
    return message;
  },
};

function createBaseMsgCreateRatioPlanResponse(): MsgCreateRatioPlanResponse {
  return {};
}

export const MsgCreateRatioPlanResponse = {
  encode(
    _: MsgCreateRatioPlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateRatioPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRatioPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateRatioPlanResponse {
    return {};
  },

  toJSON(_: MsgCreateRatioPlanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRatioPlanResponse>, I>>(
    _: I
  ): MsgCreateRatioPlanResponse {
    const message = createBaseMsgCreateRatioPlanResponse();
    return message;
  },
};

function createBaseMsgStake(): MsgStake {
  return { farmer: "", stakingCoins: [] };
}

export const MsgStake = {
  encode(
    message: MsgStake,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }
    for (const v of message.stakingCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;
        case 2:
          message.stakingCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStake {
    return {
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      stakingCoins: Array.isArray(object?.stakingCoins)
        ? object.stakingCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgStake): unknown {
    const obj: any = {};
    message.farmer !== undefined && (obj.farmer = message.farmer);
    if (message.stakingCoins) {
      obj.stakingCoins = message.stakingCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.stakingCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStake>, I>>(object: I): MsgStake {
    const message = createBaseMsgStake();
    message.farmer = object.farmer ?? "";
    message.stakingCoins =
      object.stakingCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {};
}

export const MsgStakeResponse = {
  encode(
    _: MsgStakeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgStakeResponse {
    return {};
  },

  toJSON(_: MsgStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakeResponse>, I>>(
    _: I
  ): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    return message;
  },
};

function createBaseMsgUnstake(): MsgUnstake {
  return { farmer: "", unstakingCoins: [] };
}

export const MsgUnstake = {
  encode(
    message: MsgUnstake,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }
    for (const v of message.unstakingCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;
        case 2:
          message.unstakingCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstake {
    return {
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      unstakingCoins: Array.isArray(object?.unstakingCoins)
        ? object.unstakingCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgUnstake): unknown {
    const obj: any = {};
    message.farmer !== undefined && (obj.farmer = message.farmer);
    if (message.unstakingCoins) {
      obj.unstakingCoins = message.unstakingCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.unstakingCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstake>, I>>(
    object: I
  ): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.farmer = object.farmer ?? "";
    message.unstakingCoins =
      object.unstakingCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {};
}

export const MsgUnstakeResponse = {
  encode(
    _: MsgUnstakeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnstakeResponse {
    return {};
  },

  toJSON(_: MsgUnstakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakeResponse>, I>>(
    _: I
  ): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    return message;
  },
};

function createBaseMsgHarvest(): MsgHarvest {
  return { farmer: "", stakingCoinDenoms: [] };
}

export const MsgHarvest = {
  encode(
    message: MsgHarvest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }
    for (const v of message.stakingCoinDenoms) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHarvest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHarvest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;
        case 2:
          message.stakingCoinDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHarvest {
    return {
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      stakingCoinDenoms: Array.isArray(object?.stakingCoinDenoms)
        ? object.stakingCoinDenoms.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgHarvest): unknown {
    const obj: any = {};
    message.farmer !== undefined && (obj.farmer = message.farmer);
    if (message.stakingCoinDenoms) {
      obj.stakingCoinDenoms = message.stakingCoinDenoms.map((e) => e);
    } else {
      obj.stakingCoinDenoms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHarvest>, I>>(
    object: I
  ): MsgHarvest {
    const message = createBaseMsgHarvest();
    message.farmer = object.farmer ?? "";
    message.stakingCoinDenoms = object.stakingCoinDenoms?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgHarvestResponse(): MsgHarvestResponse {
  return {};
}

export const MsgHarvestResponse = {
  encode(
    _: MsgHarvestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHarvestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHarvestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgHarvestResponse {
    return {};
  },

  toJSON(_: MsgHarvestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHarvestResponse>, I>>(
    _: I
  ): MsgHarvestResponse {
    const message = createBaseMsgHarvestResponse();
    return message;
  },
};

function createBaseMsgRemovePlan(): MsgRemovePlan {
  return { creator: "", planId: Long.UZERO };
}

export const MsgRemovePlan = {
  encode(
    message: MsgRemovePlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.planId.isZero()) {
      writer.uint32(16).uint64(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.planId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemovePlan {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      planId: isSet(object.planId)
        ? Long.fromString(object.planId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgRemovePlan): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.planId !== undefined &&
      (obj.planId = (message.planId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemovePlan>, I>>(
    object: I
  ): MsgRemovePlan {
    const message = createBaseMsgRemovePlan();
    message.creator = object.creator ?? "";
    message.planId =
      object.planId !== undefined && object.planId !== null
        ? Long.fromValue(object.planId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgRemovePlanResponse(): MsgRemovePlanResponse {
  return {};
}

export const MsgRemovePlanResponse = {
  encode(
    _: MsgRemovePlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemovePlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemovePlanResponse {
    return {};
  },

  toJSON(_: MsgRemovePlanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemovePlanResponse>, I>>(
    _: I
  ): MsgRemovePlanResponse {
    const message = createBaseMsgRemovePlanResponse();
    return message;
  },
};

function createBaseMsgAdvanceEpoch(): MsgAdvanceEpoch {
  return { requester: "" };
}

export const MsgAdvanceEpoch = {
  encode(
    message: MsgAdvanceEpoch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdvanceEpoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdvanceEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAdvanceEpoch {
    return {
      requester: isSet(object.requester) ? String(object.requester) : "",
    };
  },

  toJSON(message: MsgAdvanceEpoch): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAdvanceEpoch>, I>>(
    object: I
  ): MsgAdvanceEpoch {
    const message = createBaseMsgAdvanceEpoch();
    message.requester = object.requester ?? "";
    return message;
  },
};

function createBaseMsgAdvanceEpochResponse(): MsgAdvanceEpochResponse {
  return {};
}

export const MsgAdvanceEpochResponse = {
  encode(
    _: MsgAdvanceEpochResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAdvanceEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdvanceEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAdvanceEpochResponse {
    return {};
  },

  toJSON(_: MsgAdvanceEpochResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAdvanceEpochResponse>, I>>(
    _: I
  ): MsgAdvanceEpochResponse {
    const message = createBaseMsgAdvanceEpochResponse();
    return message;
  },
};

/** Msg defines the farming Msg service. */
export interface Msg {
  /**
   * CreateFixedAmountPlan defines a method for creating a new fixed amount
   * farming plan
   */
  CreateFixedAmountPlan(
    request: MsgCreateFixedAmountPlan
  ): Promise<MsgCreateFixedAmountPlanResponse>;
  /** CreateRatioPlan defines a method for creating a new ratio farming plan */
  CreateRatioPlan(
    request: MsgCreateRatioPlan
  ): Promise<MsgCreateRatioPlanResponse>;
  /** Stake defines a method for staking coins into the farming plan */
  Stake(request: MsgStake): Promise<MsgStakeResponse>;
  /** Unstake defines a method for unstaking coins from the farming plan */
  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  /** Harvest defines a method for claiming farming rewards */
  Harvest(request: MsgHarvest): Promise<MsgHarvestResponse>;
  /** RemovePlan defines a method for removing a terminated plan. */
  RemovePlan(request: MsgRemovePlan): Promise<MsgRemovePlanResponse>;
  /**
   * AdvanceEpoch defines a method for advancing epoch by one, just for testing purpose
   * and shouldn't be used in real world
   */
  AdvanceEpoch(request: MsgAdvanceEpoch): Promise<MsgAdvanceEpochResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateFixedAmountPlan = this.CreateFixedAmountPlan.bind(this);
    this.CreateRatioPlan = this.CreateRatioPlan.bind(this);
    this.Stake = this.Stake.bind(this);
    this.Unstake = this.Unstake.bind(this);
    this.Harvest = this.Harvest.bind(this);
    this.RemovePlan = this.RemovePlan.bind(this);
    this.AdvanceEpoch = this.AdvanceEpoch.bind(this);
  }
  CreateFixedAmountPlan(
    request: MsgCreateFixedAmountPlan
  ): Promise<MsgCreateFixedAmountPlanResponse> {
    const data = MsgCreateFixedAmountPlan.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.farming.v1beta1.Msg",
      "CreateFixedAmountPlan",
      data
    );
    return promise.then((data) =>
      MsgCreateFixedAmountPlanResponse.decode(new _m0.Reader(data))
    );
  }

  CreateRatioPlan(
    request: MsgCreateRatioPlan
  ): Promise<MsgCreateRatioPlanResponse> {
    const data = MsgCreateRatioPlan.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.farming.v1beta1.Msg",
      "CreateRatioPlan",
      data
    );
    return promise.then((data) =>
      MsgCreateRatioPlanResponse.decode(new _m0.Reader(data))
    );
  }

  Stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.farming.v1beta1.Msg",
      "Stake",
      data
    );
    return promise.then((data) =>
      MsgStakeResponse.decode(new _m0.Reader(data))
    );
  }

  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.farming.v1beta1.Msg",
      "Unstake",
      data
    );
    return promise.then((data) =>
      MsgUnstakeResponse.decode(new _m0.Reader(data))
    );
  }

  Harvest(request: MsgHarvest): Promise<MsgHarvestResponse> {
    const data = MsgHarvest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.farming.v1beta1.Msg",
      "Harvest",
      data
    );
    return promise.then((data) =>
      MsgHarvestResponse.decode(new _m0.Reader(data))
    );
  }

  RemovePlan(request: MsgRemovePlan): Promise<MsgRemovePlanResponse> {
    const data = MsgRemovePlan.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.farming.v1beta1.Msg",
      "RemovePlan",
      data
    );
    return promise.then((data) =>
      MsgRemovePlanResponse.decode(new _m0.Reader(data))
    );
  }

  AdvanceEpoch(request: MsgAdvanceEpoch): Promise<MsgAdvanceEpochResponse> {
    const data = MsgAdvanceEpoch.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.farming.v1beta1.Msg",
      "AdvanceEpoch",
      data
    );
    return promise.then((data) =>
      MsgAdvanceEpochResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

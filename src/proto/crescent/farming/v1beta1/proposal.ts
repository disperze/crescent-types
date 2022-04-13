/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crescent.farming.v1beta1";

/**
 * PublicPlanProposal defines a public farming plan governance proposal that receives one of the following requests:
 * A request that creates a public farming plan, a request that updates the plan, and a request that deletes the plan.
 * For public plan creation, depending on which field is passed, either epoch amount or epoch ratio, it creates a fixed
 * amount plan or ratio plan.
 */
export interface PublicPlanProposal {
  /** title specifies the title of the plan */
  title: string;
  /** description specifies the description of the plan */
  description: string;
  /** add_plan_requests specifies AddPlanRequest object */
  addPlanRequests: AddPlanRequest[];
  /** modify_plan_requests specifies ModifyPlanRequest object */
  modifyPlanRequests: ModifyPlanRequest[];
  /** delete_plan_requests specifies DeletePlanRequest object */
  deletePlanRequests: DeletePlanRequest[];
}

/** AddPlanRequest details a proposal for creating a public plan. */
export interface AddPlanRequest {
  /** name specifies the plan name for display */
  name: string;
  /** farming_pool_address defines the bech32-encoded address of the farming pool */
  farmingPoolAddress: string;
  /**
   * termination_address defines the bech32-encoded address that terminates plan
   * when the plan ends after the end time, the balance of farming pool address
   * is transferred to the termination address
   */
  terminationAddress: string;
  /** staking_coin_weights specifies coin weights for the plan */
  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */
  startTime?: Date;
  /** end_time specifies the end time of the plan */
  endTime?: Date;
  /** epoch_amount specifies the distributing amount for each epoch */
  epochAmount: Coin[];
  /** epoch_ratio specifies the distributing amount by ratio */
  epochRatio: string;
}

/** ModifyPlanRequest details a proposal for modifying the existing public plan. */
export interface ModifyPlanRequest {
  /** plan_id specifies index of the farming plan */
  planId: Long;
  /** name specifies the plan name for display */
  name: string;
  /** farming_pool_address defines the bech32-encoded address of the farming pool */
  farmingPoolAddress: string;
  /**
   * termination_address defines the bech32-encoded address that terminates plan
   * when the plan ends after the end time, the balance of farming pool address
   * is transferred to the termination address
   */
  terminationAddress: string;
  /** staking_coin_weights specifies coin weights for the plan */
  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */
  startTime?: Date;
  /** end_time specifies the end time of the plan */
  endTime?: Date;
  /** epoch_amount specifies the distributing amount for each epoch */
  epochAmount: Coin[];
  /** epoch_ratio specifies the distributing amount by ratio */
  epochRatio: string;
}

/** DeletePlanRequest details a proposal for deleting an existing public plan. */
export interface DeletePlanRequest {
  /** plan_id specifies index of the farming plan */
  planId: Long;
}

function createBasePublicPlanProposal(): PublicPlanProposal {
  return {
    title: "",
    description: "",
    addPlanRequests: [],
    modifyPlanRequests: [],
    deletePlanRequests: [],
  };
}

export const PublicPlanProposal = {
  encode(
    message: PublicPlanProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.addPlanRequests) {
      AddPlanRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.modifyPlanRequests) {
      ModifyPlanRequest.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.deletePlanRequests) {
      DeletePlanRequest.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublicPlanProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicPlanProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.addPlanRequests.push(
            AddPlanRequest.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.modifyPlanRequests.push(
            ModifyPlanRequest.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.deletePlanRequests.push(
            DeletePlanRequest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublicPlanProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      addPlanRequests: Array.isArray(object?.addPlanRequests)
        ? object.addPlanRequests.map((e: any) => AddPlanRequest.fromJSON(e))
        : [],
      modifyPlanRequests: Array.isArray(object?.modifyPlanRequests)
        ? object.modifyPlanRequests.map((e: any) =>
            ModifyPlanRequest.fromJSON(e)
          )
        : [],
      deletePlanRequests: Array.isArray(object?.deletePlanRequests)
        ? object.deletePlanRequests.map((e: any) =>
            DeletePlanRequest.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: PublicPlanProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.addPlanRequests) {
      obj.addPlanRequests = message.addPlanRequests.map((e) =>
        e ? AddPlanRequest.toJSON(e) : undefined
      );
    } else {
      obj.addPlanRequests = [];
    }
    if (message.modifyPlanRequests) {
      obj.modifyPlanRequests = message.modifyPlanRequests.map((e) =>
        e ? ModifyPlanRequest.toJSON(e) : undefined
      );
    } else {
      obj.modifyPlanRequests = [];
    }
    if (message.deletePlanRequests) {
      obj.deletePlanRequests = message.deletePlanRequests.map((e) =>
        e ? DeletePlanRequest.toJSON(e) : undefined
      );
    } else {
      obj.deletePlanRequests = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublicPlanProposal>, I>>(
    object: I
  ): PublicPlanProposal {
    const message = createBasePublicPlanProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.addPlanRequests =
      object.addPlanRequests?.map((e) => AddPlanRequest.fromPartial(e)) || [];
    message.modifyPlanRequests =
      object.modifyPlanRequests?.map((e) => ModifyPlanRequest.fromPartial(e)) ||
      [];
    message.deletePlanRequests =
      object.deletePlanRequests?.map((e) => DeletePlanRequest.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseAddPlanRequest(): AddPlanRequest {
  return {
    name: "",
    farmingPoolAddress: "",
    terminationAddress: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    epochAmount: [],
    epochRatio: "",
  };
}

export const AddPlanRequest = {
  encode(
    message: AddPlanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.farmingPoolAddress !== "") {
      writer.uint32(18).string(message.farmingPoolAddress);
    }
    if (message.terminationAddress !== "") {
      writer.uint32(26).string(message.terminationAddress);
    }
    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.epochAmount) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.epochRatio !== "") {
      writer.uint32(66).string(message.epochRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.farmingPoolAddress = reader.string();
          break;
        case 3:
          message.terminationAddress = reader.string();
          break;
        case 4:
          message.stakingCoinWeights.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.epochRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPlanRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
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
      epochAmount: Array.isArray(object?.epochAmount)
        ? object.epochAmount.map((e: any) => Coin.fromJSON(e))
        : [],
      epochRatio: isSet(object.epochRatio) ? String(object.epochRatio) : "",
    };
  },

  toJSON(message: AddPlanRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
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
    if (message.epochAmount) {
      obj.epochAmount = message.epochAmount.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.epochAmount = [];
    }
    message.epochRatio !== undefined && (obj.epochRatio = message.epochRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddPlanRequest>, I>>(
    object: I
  ): AddPlanRequest {
    const message = createBaseAddPlanRequest();
    message.name = object.name ?? "";
    message.farmingPoolAddress = object.farmingPoolAddress ?? "";
    message.terminationAddress = object.terminationAddress ?? "";
    message.stakingCoinWeights =
      object.stakingCoinWeights?.map((e) => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.epochAmount =
      object.epochAmount?.map((e) => Coin.fromPartial(e)) || [];
    message.epochRatio = object.epochRatio ?? "";
    return message;
  },
};

function createBaseModifyPlanRequest(): ModifyPlanRequest {
  return {
    planId: Long.UZERO,
    name: "",
    farmingPoolAddress: "",
    terminationAddress: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    epochAmount: [],
    epochRatio: "",
  };
}

export const ModifyPlanRequest = {
  encode(
    message: ModifyPlanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.planId.isZero()) {
      writer.uint32(8).uint64(message.planId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.farmingPoolAddress !== "") {
      writer.uint32(26).string(message.farmingPoolAddress);
    }
    if (message.terminationAddress !== "") {
      writer.uint32(34).string(message.terminationAddress);
    }
    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    for (const v of message.epochAmount) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.epochRatio !== "") {
      writer.uint32(74).string(message.epochRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModifyPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModifyPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planId = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.farmingPoolAddress = reader.string();
          break;
        case 4:
          message.terminationAddress = reader.string();
          break;
        case 5:
          message.stakingCoinWeights.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.epochRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyPlanRequest {
    return {
      planId: isSet(object.planId)
        ? Long.fromString(object.planId)
        : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
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
      epochAmount: Array.isArray(object?.epochAmount)
        ? object.epochAmount.map((e: any) => Coin.fromJSON(e))
        : [],
      epochRatio: isSet(object.epochRatio) ? String(object.epochRatio) : "",
    };
  },

  toJSON(message: ModifyPlanRequest): unknown {
    const obj: any = {};
    message.planId !== undefined &&
      (obj.planId = (message.planId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
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
    if (message.epochAmount) {
      obj.epochAmount = message.epochAmount.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.epochAmount = [];
    }
    message.epochRatio !== undefined && (obj.epochRatio = message.epochRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModifyPlanRequest>, I>>(
    object: I
  ): ModifyPlanRequest {
    const message = createBaseModifyPlanRequest();
    message.planId =
      object.planId !== undefined && object.planId !== null
        ? Long.fromValue(object.planId)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.farmingPoolAddress = object.farmingPoolAddress ?? "";
    message.terminationAddress = object.terminationAddress ?? "";
    message.stakingCoinWeights =
      object.stakingCoinWeights?.map((e) => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.epochAmount =
      object.epochAmount?.map((e) => Coin.fromPartial(e)) || [];
    message.epochRatio = object.epochRatio ?? "";
    return message;
  },
};

function createBaseDeletePlanRequest(): DeletePlanRequest {
  return { planId: Long.UZERO };
}

export const DeletePlanRequest = {
  encode(
    message: DeletePlanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.planId.isZero()) {
      writer.uint32(8).uint64(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePlanRequest {
    return {
      planId: isSet(object.planId)
        ? Long.fromString(object.planId)
        : Long.UZERO,
    };
  },

  toJSON(message: DeletePlanRequest): unknown {
    const obj: any = {};
    message.planId !== undefined &&
      (obj.planId = (message.planId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePlanRequest>, I>>(
    object: I
  ): DeletePlanRequest {
    const message = createBaseDeletePlanRequest();
    message.planId =
      object.planId !== undefined && object.planId !== null
        ? Long.fromValue(object.planId)
        : Long.UZERO;
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

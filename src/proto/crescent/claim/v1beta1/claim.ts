/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crescent.claim.v1beta1";

/** ConditionType defines the type of condition that a recipient must execute in order to receive a claimable amount. */
export enum ConditionType {
  /** CONDITION_TYPE_UNSPECIFIED - CONDITION_TYPE_UNSPECIFIED specifies an unknown condition type */
  CONDITION_TYPE_UNSPECIFIED = 0,
  /** CONDITION_TYPE_DEPOSIT - CONDITION_TYPE_DEPOSIT specifies deposit condition type */
  CONDITION_TYPE_DEPOSIT = 1,
  /** CONDITION_TYPE_SWAP - CONDITION_TYPE_SWAP specifies swap condition type */
  CONDITION_TYPE_SWAP = 2,
  /** CONDITION_TYPE_LIQUIDSTAKE - CONDITION_TYPE_LIQUIDSTAKE specifies liquid stake condition type */
  CONDITION_TYPE_LIQUIDSTAKE = 3,
  /** CONDITION_TYPE_VOTE - CONDITION_TYPE_VOTE specifies governance vote condition type */
  CONDITION_TYPE_VOTE = 4,
  UNRECOGNIZED = -1,
}

export function conditionTypeFromJSON(object: any): ConditionType {
  switch (object) {
    case 0:
    case "CONDITION_TYPE_UNSPECIFIED":
      return ConditionType.CONDITION_TYPE_UNSPECIFIED;
    case 1:
    case "CONDITION_TYPE_DEPOSIT":
      return ConditionType.CONDITION_TYPE_DEPOSIT;
    case 2:
    case "CONDITION_TYPE_SWAP":
      return ConditionType.CONDITION_TYPE_SWAP;
    case 3:
    case "CONDITION_TYPE_LIQUIDSTAKE":
      return ConditionType.CONDITION_TYPE_LIQUIDSTAKE;
    case 4:
    case "CONDITION_TYPE_VOTE":
      return ConditionType.CONDITION_TYPE_VOTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConditionType.UNRECOGNIZED;
  }
}

export function conditionTypeToJSON(object: ConditionType): string {
  switch (object) {
    case ConditionType.CONDITION_TYPE_UNSPECIFIED:
      return "CONDITION_TYPE_UNSPECIFIED";
    case ConditionType.CONDITION_TYPE_DEPOSIT:
      return "CONDITION_TYPE_DEPOSIT";
    case ConditionType.CONDITION_TYPE_SWAP:
      return "CONDITION_TYPE_SWAP";
    case ConditionType.CONDITION_TYPE_LIQUIDSTAKE:
      return "CONDITION_TYPE_LIQUIDSTAKE";
    case ConditionType.CONDITION_TYPE_VOTE:
      return "CONDITION_TYPE_VOTE";
    default:
      return "UNKNOWN";
  }
}

/** Airdrop defines airdrop information. */
export interface Airdrop {
  /** id specifies index of the airdrop */
  id: Long;
  /**
   * source_address defines the bech32-encoded source address
   * where the source of coins from
   */
  sourceAddress: string;
  /** conditions specifies a list of conditions */
  conditions: ConditionType[];
  /** start_time specifies the start time of the airdrop */
  startTime?: Date;
  /** end_time specifies the start time of the airdrop */
  endTime?: Date;
}

/** ClaimRecord defines claim record that corresponds to the airdrop. */
export interface ClaimRecord {
  /** airdrop_id specifies airdrop id */
  airdropId: Long;
  /** recipient specifies the bech32-encoded address that is eligible to claim airdrop */
  recipient: string;
  /** initial_claimable_coins specifies the initial claimable coins */
  initialClaimableCoins: Coin[];
  /** claimable_coins specifies the unclaimed claimable coins */
  claimableCoins: Coin[];
  /**
   * claimed_conditions specifies a list of condition types
   * initial values are empty and each condition type gets appended when claim is successfully executed
   */
  claimedConditions: ConditionType[];
}

function createBaseAirdrop(): Airdrop {
  return {
    id: Long.UZERO,
    sourceAddress: "",
    conditions: [],
    startTime: undefined,
    endTime: undefined,
  };
}

export const Airdrop = {
  encode(
    message: Airdrop,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sourceAddress !== "") {
      writer.uint32(18).string(message.sourceAddress);
    }
    writer.uint32(26).fork();
    for (const v of message.conditions) {
      writer.int32(v);
    }
    writer.ldelim();
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.sourceAddress = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.conditions.push(reader.int32() as any);
            }
          } else {
            message.conditions.push(reader.int32() as any);
          }
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Airdrop {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      sourceAddress: isSet(object.sourceAddress)
        ? String(object.sourceAddress)
        : "",
      conditions: Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => conditionTypeFromJSON(e))
        : [],
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
    };
  },

  toJSON(message: Airdrop): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.sourceAddress !== undefined &&
      (obj.sourceAddress = message.sourceAddress);
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) => conditionTypeToJSON(e));
    } else {
      obj.conditions = [];
    }
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Airdrop>, I>>(object: I): Airdrop {
    const message = createBaseAirdrop();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.sourceAddress = object.sourceAddress ?? "";
    message.conditions = object.conditions?.map((e) => e) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
};

function createBaseClaimRecord(): ClaimRecord {
  return {
    airdropId: Long.UZERO,
    recipient: "",
    initialClaimableCoins: [],
    claimableCoins: [],
    claimedConditions: [],
  };
}

export const ClaimRecord = {
  encode(
    message: ClaimRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.airdropId.isZero()) {
      writer.uint32(8).uint64(message.airdropId);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.initialClaimableCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.claimableCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.claimedConditions) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropId = reader.uint64() as Long;
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.initialClaimableCoins.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.claimableCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.claimedConditions.push(reader.int32() as any);
            }
          } else {
            message.claimedConditions.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimRecord {
    return {
      airdropId: isSet(object.airdropId)
        ? Long.fromString(object.airdropId)
        : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      initialClaimableCoins: Array.isArray(object?.initialClaimableCoins)
        ? object.initialClaimableCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      claimableCoins: Array.isArray(object?.claimableCoins)
        ? object.claimableCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      claimedConditions: Array.isArray(object?.claimedConditions)
        ? object.claimedConditions.map((e: any) => conditionTypeFromJSON(e))
        : [],
    };
  },

  toJSON(message: ClaimRecord): unknown {
    const obj: any = {};
    message.airdropId !== undefined &&
      (obj.airdropId = (message.airdropId || Long.UZERO).toString());
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.initialClaimableCoins) {
      obj.initialClaimableCoins = message.initialClaimableCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.initialClaimableCoins = [];
    }
    if (message.claimableCoins) {
      obj.claimableCoins = message.claimableCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.claimableCoins = [];
    }
    if (message.claimedConditions) {
      obj.claimedConditions = message.claimedConditions.map((e) =>
        conditionTypeToJSON(e)
      );
    } else {
      obj.claimedConditions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClaimRecord>, I>>(
    object: I
  ): ClaimRecord {
    const message = createBaseClaimRecord();
    message.airdropId =
      object.airdropId !== undefined && object.airdropId !== null
        ? Long.fromValue(object.airdropId)
        : Long.UZERO;
    message.recipient = object.recipient ?? "";
    message.initialClaimableCoins =
      object.initialClaimableCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.claimableCoins =
      object.claimableCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.claimedConditions = object.claimedConditions?.map((e) => e) || [];
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

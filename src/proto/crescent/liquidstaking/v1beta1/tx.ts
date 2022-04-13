/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "crescent.liquidstaking.v1beta1";

/**
 * MsgLiquidStake defines a SDK message for performing a liquid stake of coins
 * from a delegator to whitelisted validators.
 */
export interface MsgLiquidStake {
  delegatorAddress: string;
  amount?: Coin;
}

/** MsgLiquidStakeResponse defines the Msg/LiquidStake response type. */
export interface MsgLiquidStakeResponse {}

/**
 * MsgLiquidUnstake defines a SDK message for performing an undelegation of liquid staking from a
 * delegate.
 */
export interface MsgLiquidUnstake {
  delegatorAddress: string;
  amount?: Coin;
}

/** MsgLiquidUnstakeResponse defines the Msg/LiquidUnstake response type. */
export interface MsgLiquidUnstakeResponse {
  completionTime?: Date;
}

function createBaseMsgLiquidStake(): MsgLiquidStake {
  return { delegatorAddress: "", amount: undefined };
}

export const MsgLiquidStake = {
  encode(
    message: MsgLiquidStake,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidStake {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidStake>, I>>(
    object: I
  ): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}

export const MsgLiquidStakeResponse = {
  encode(
    _: MsgLiquidStakeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();
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

  fromJSON(_: any): MsgLiquidStakeResponse {
    return {};
  },

  toJSON(_: MsgLiquidStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidStakeResponse>, I>>(
    _: I
  ): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  },
};

function createBaseMsgLiquidUnstake(): MsgLiquidUnstake {
  return { delegatorAddress: "", amount: undefined };
}

export const MsgLiquidUnstake = {
  encode(
    message: MsgLiquidUnstake,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidUnstake {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgLiquidUnstake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidUnstake>, I>>(
    object: I
  ): MsgLiquidUnstake {
    const message = createBaseMsgLiquidUnstake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgLiquidUnstakeResponse(): MsgLiquidUnstakeResponse {
  return { completionTime: undefined };
}

export const MsgLiquidUnstakeResponse = {
  encode(
    message: MsgLiquidUnstakeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(
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

  fromJSON(object: any): MsgLiquidUnstakeResponse {
    return {
      completionTime: isSet(object.completionTime)
        ? fromJsonTimestamp(object.completionTime)
        : undefined,
    };
  },

  toJSON(message: MsgLiquidUnstakeResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidUnstakeResponse>, I>>(
    object: I
  ): MsgLiquidUnstakeResponse {
    const message = createBaseMsgLiquidUnstakeResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

/** Msg defines the liquid staking Msg service. */
export interface Msg {
  /**
   * LiquidStake defines a method for performing a delegation of coins
   * from a delegator to whitelisted validators.
   */
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  /**
   * LiquidUnstake defines a method for performing an undelegation of liquid staking from a
   * delegate.
   */
  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LiquidStake = this.LiquidStake.bind(this);
    this.LiquidUnstake = this.LiquidUnstake.bind(this);
  }
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidstaking.v1beta1.Msg",
      "LiquidStake",
      data
    );
    return promise.then((data) =>
      MsgLiquidStakeResponse.decode(new _m0.Reader(data))
    );
  }

  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse> {
    const data = MsgLiquidUnstake.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidstaking.v1beta1.Msg",
      "LiquidUnstake",
      data
    );
    return promise.then((data) =>
      MsgLiquidUnstakeResponse.decode(new _m0.Reader(data))
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

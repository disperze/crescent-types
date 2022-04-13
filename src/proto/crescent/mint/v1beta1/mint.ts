/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "crescent.mint.v1beta1";

/** Params holds parameters for the mint module. */
export interface Params {
  /** mint_denom defines denomination of coin to be minted */
  mintDenom: string;
  /**
   * block_time_threshold defines block time threshold to prevent from any inflationary manipulation attacks
   * it is used for maximum block duration when calculating block inflation
   */
  blockTimeThreshold?: Duration;
  /** inflation_schedules defines a list of inflation schedules */
  inflationSchedules: InflationSchedule[];
}

/**
 * InflationSchedule defines the start and end time of the inflation period, and the amount of inflation during that
 * period.
 */
export interface InflationSchedule {
  /** start_time defines the start date time for the inflation schedule */
  startTime?: Date;
  /** end_time defines the end date time for the inflation schedule */
  endTime?: Date;
  /** amount defines the total amount of inflation for the schedule */
  amount: string;
}

function createBaseParams(): Params {
  return {
    mintDenom: "",
    blockTimeThreshold: undefined,
    inflationSchedules: [],
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.blockTimeThreshold !== undefined) {
      Duration.encode(
        message.blockTimeThreshold,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.inflationSchedules) {
      InflationSchedule.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.blockTimeThreshold = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.inflationSchedules.push(
            InflationSchedule.decode(reader, reader.uint32())
          );
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
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      blockTimeThreshold: isSet(object.blockTimeThreshold)
        ? Duration.fromJSON(object.blockTimeThreshold)
        : undefined,
      inflationSchedules: Array.isArray(object?.inflationSchedules)
        ? object.inflationSchedules.map((e: any) =>
            InflationSchedule.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.blockTimeThreshold !== undefined &&
      (obj.blockTimeThreshold = message.blockTimeThreshold
        ? Duration.toJSON(message.blockTimeThreshold)
        : undefined);
    if (message.inflationSchedules) {
      obj.inflationSchedules = message.inflationSchedules.map((e) =>
        e ? InflationSchedule.toJSON(e) : undefined
      );
    } else {
      obj.inflationSchedules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.blockTimeThreshold =
      object.blockTimeThreshold !== undefined &&
      object.blockTimeThreshold !== null
        ? Duration.fromPartial(object.blockTimeThreshold)
        : undefined;
    message.inflationSchedules =
      object.inflationSchedules?.map((e) => InflationSchedule.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseInflationSchedule(): InflationSchedule {
  return { startTime: undefined, endTime: undefined, amount: "" };
}

export const InflationSchedule = {
  encode(
    message: InflationSchedule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InflationSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InflationSchedule {
    return {
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: InflationSchedule): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InflationSchedule>, I>>(
    object: I
  ): InflationSchedule {
    const message = createBaseInflationSchedule();
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.amount = object.amount ?? "";
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

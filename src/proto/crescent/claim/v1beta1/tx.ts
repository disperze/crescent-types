/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  ConditionType,
  conditionTypeFromJSON,
  conditionTypeToJSON,
} from "../../../crescent/claim/v1beta1/claim";

export const protobufPackage = "crescent.claim.v1beta1";

/** MsgClaim defines a SDK message for claiming claimable amount. */
export interface MsgClaim {
  /** airdrop_id specifies index of the airdrop */
  airdropId: Long;
  /** recipient specifies the bech32-encoded address that is eligible to claim airdrop */
  recipient: string;
  /** condition_type specifies the condition type */
  conditionType: ConditionType;
}

export interface MsgClaimResponse {}

function createBaseMsgClaim(): MsgClaim {
  return { airdropId: Long.UZERO, recipient: "", conditionType: 0 };
}

export const MsgClaim = {
  encode(
    message: MsgClaim,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.airdropId.isZero()) {
      writer.uint32(8).uint64(message.airdropId);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.conditionType !== 0) {
      writer.uint32(24).int32(message.conditionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
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
          message.conditionType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaim {
    return {
      airdropId: isSet(object.airdropId)
        ? Long.fromString(object.airdropId)
        : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      conditionType: isSet(object.conditionType)
        ? conditionTypeFromJSON(object.conditionType)
        : 0,
    };
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.airdropId !== undefined &&
      (obj.airdropId = (message.airdropId || Long.UZERO).toString());
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.conditionType !== undefined &&
      (obj.conditionType = conditionTypeToJSON(message.conditionType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    message.airdropId =
      object.airdropId !== undefined && object.airdropId !== null
        ? Long.fromValue(object.airdropId)
        : Long.UZERO;
    message.recipient = object.recipient ?? "";
    message.conditionType = object.conditionType ?? 0;
    return message;
  },
};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}

export const MsgClaimResponse = {
  encode(
    _: MsgClaimResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
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

  fromJSON(_: any): MsgClaimResponse {
    return {};
  },

  toJSON(_: MsgClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimResponse>, I>>(
    _: I
  ): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Claim = this.Claim.bind(this);
  }
  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.claim.v1beta1.Msg",
      "Claim",
      data
    );
    return promise.then((data) =>
      MsgClaimResponse.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

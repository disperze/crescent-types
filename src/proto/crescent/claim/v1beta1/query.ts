/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Airdrop, ClaimRecord } from "../../../crescent/claim/v1beta1/claim";

export const protobufPackage = "crescent.claim.v1beta1";

/** QueryAirdropsRequest is request type for the Query/Airdrops RPC method. */
export interface QueryAirdropsRequest {
  pagination?: PageRequest;
}

/** QueryAirdropsResponse is response type for the Query/Airdrops RPC method. */
export interface QueryAirdropsResponse {
  airdrops: Airdrop[];
  pagination?: PageResponse;
}

/** QueryAirdropRequest is request type for the Query/Airdrop RPC method. */
export interface QueryAirdropRequest {
  airdropId: Long;
}

/** QueryAirdropResponse is response type for the Query/Airdrop RPC method. */
export interface QueryAirdropResponse {
  airdrop?: Airdrop;
}

/** QueryClaimRecordRequest is request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequest {
  airdropId: Long;
  recipient: string;
}

/** QueryClaimRecordResponse is response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordResponse {
  claimRecord?: ClaimRecord;
}

function createBaseQueryAirdropsRequest(): QueryAirdropsRequest {
  return { pagination: undefined };
}

export const QueryAirdropsRequest = {
  encode(
    message: QueryAirdropsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAirdropsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAirdropsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAirdropsRequest>, I>>(
    object: I
  ): QueryAirdropsRequest {
    const message = createBaseQueryAirdropsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAirdropsResponse(): QueryAirdropsResponse {
  return { airdrops: [], pagination: undefined };
}

export const QueryAirdropsResponse = {
  encode(
    message: QueryAirdropsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAirdropsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropsResponse {
    return {
      airdrops: Array.isArray(object?.airdrops)
        ? object.airdrops.map((e: any) => Airdrop.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAirdropsResponse): unknown {
    const obj: any = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) =>
        e ? Airdrop.toJSON(e) : undefined
      );
    } else {
      obj.airdrops = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAirdropsResponse>, I>>(
    object: I
  ): QueryAirdropsResponse {
    const message = createBaseQueryAirdropsResponse();
    message.airdrops =
      object.airdrops?.map((e) => Airdrop.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAirdropRequest(): QueryAirdropRequest {
  return { airdropId: Long.UZERO };
}

export const QueryAirdropRequest = {
  encode(
    message: QueryAirdropRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.airdropId.isZero()) {
      writer.uint32(8).uint64(message.airdropId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropRequest {
    return {
      airdropId: isSet(object.airdropId)
        ? Long.fromString(object.airdropId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryAirdropRequest): unknown {
    const obj: any = {};
    message.airdropId !== undefined &&
      (obj.airdropId = (message.airdropId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAirdropRequest>, I>>(
    object: I
  ): QueryAirdropRequest {
    const message = createBaseQueryAirdropRequest();
    message.airdropId =
      object.airdropId !== undefined && object.airdropId !== null
        ? Long.fromValue(object.airdropId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAirdropResponse(): QueryAirdropResponse {
  return { airdrop: undefined };
}

export const QueryAirdropResponse = {
  encode(
    message: QueryAirdropResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.airdrop !== undefined) {
      Airdrop.encode(message.airdrop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrop = Airdrop.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropResponse {
    return {
      airdrop: isSet(object.airdrop)
        ? Airdrop.fromJSON(object.airdrop)
        : undefined,
    };
  },

  toJSON(message: QueryAirdropResponse): unknown {
    const obj: any = {};
    message.airdrop !== undefined &&
      (obj.airdrop = message.airdrop
        ? Airdrop.toJSON(message.airdrop)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAirdropResponse>, I>>(
    object: I
  ): QueryAirdropResponse {
    const message = createBaseQueryAirdropResponse();
    message.airdrop =
      object.airdrop !== undefined && object.airdrop !== null
        ? Airdrop.fromPartial(object.airdrop)
        : undefined;
    return message;
  },
};

function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return { airdropId: Long.UZERO, recipient: "" };
}

export const QueryClaimRecordRequest = {
  encode(
    message: QueryClaimRecordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.airdropId.isZero()) {
      writer.uint32(8).uint64(message.airdropId);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropId = reader.uint64() as Long;
          break;
        case 2:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimRecordRequest {
    return {
      airdropId: isSet(object.airdropId)
        ? Long.fromString(object.airdropId)
        : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: QueryClaimRecordRequest): unknown {
    const obj: any = {};
    message.airdropId !== undefined &&
      (obj.airdropId = (message.airdropId || Long.UZERO).toString());
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimRecordRequest>, I>>(
    object: I
  ): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.airdropId =
      object.airdropId !== undefined && object.airdropId !== null
        ? Long.fromValue(object.airdropId)
        : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return { claimRecord: undefined };
}

export const QueryClaimRecordResponse = {
  encode(
    message: QueryClaimRecordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(
        message.claimRecord,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimRecordResponse {
    return {
      claimRecord: isSet(object.claimRecord)
        ? ClaimRecord.fromJSON(object.claimRecord)
        : undefined,
    };
  },

  toJSON(message: QueryClaimRecordResponse): unknown {
    const obj: any = {};
    message.claimRecord !== undefined &&
      (obj.claimRecord = message.claimRecord
        ? ClaimRecord.toJSON(message.claimRecord)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClaimRecordResponse>, I>>(
    object: I
  ): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord =
      object.claimRecord !== undefined && object.claimRecord !== null
        ? ClaimRecord.fromPartial(object.claimRecord)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Airdrops returns all airdrops. */
  Airdrops(request: QueryAirdropsRequest): Promise<QueryAirdropsResponse>;
  /** Airdrop returns the specific airdrop. */
  Airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
  /** ClaimRecord returns the claim record for the recipient address. */
  ClaimRecord(
    request: QueryClaimRecordRequest
  ): Promise<QueryClaimRecordResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Airdrops = this.Airdrops.bind(this);
    this.Airdrop = this.Airdrop.bind(this);
    this.ClaimRecord = this.ClaimRecord.bind(this);
  }
  Airdrops(request: QueryAirdropsRequest): Promise<QueryAirdropsResponse> {
    const data = QueryAirdropsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.claim.v1beta1.Query",
      "Airdrops",
      data
    );
    return promise.then((data) =>
      QueryAirdropsResponse.decode(new _m0.Reader(data))
    );
  }

  Airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse> {
    const data = QueryAirdropRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.claim.v1beta1.Query",
      "Airdrop",
      data
    );
    return promise.then((data) =>
      QueryAirdropResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimRecord(
    request: QueryClaimRecordRequest
  ): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.claim.v1beta1.Query",
      "ClaimRecord",
      data
    );
    return promise.then((data) =>
      QueryClaimRecordResponse.decode(new _m0.Reader(data))
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

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Params,
  Pair,
  DepositRequest,
  WithdrawRequest,
  Order,
} from "../../../crescent/liquidity/v1beta1/liquidity";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crescent.liquidity.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}

/** QueryPoolsRequest is request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
  pairId: Long;
  disabled: string;
  pagination?: PageRequest;
}

/** QueryPoolsResponse is response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
  pools: PoolResponse[];
  pagination?: PageResponse;
}

/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
  poolId: Long;
}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  pool?: PoolResponse;
}

/** QueryPoolByReserveAddressRequest is request type for the Query/PoolByReserveAddress RPC method. */
export interface QueryPoolByReserveAddressRequest {
  reserveAddress: string;
}

/** QueryPoolByPoolCoinDenomRequest is request type for the Query/PoolByPoolCoinDenom RPC method. */
export interface QueryPoolByPoolCoinDenomRequest {
  poolCoinDenom: string;
}

/** QueryPairsRequest is request type for the Query/Pairs RPC method. */
export interface QueryPairsRequest {
  denoms: string[];
  pagination?: PageRequest;
}

/** QueryPairsResponse is response type for the Query/Pairs RPC method. */
export interface QueryPairsResponse {
  pairs: Pair[];
  pagination?: PageResponse;
}

/** QueryPairRequest is request type for the Query/Pair RPC method. */
export interface QueryPairRequest {
  pairId: Long;
}

/** QueryPairResponse is response type for the Query/Pair RPC method. */
export interface QueryPairResponse {
  pair?: Pair;
}

/** QueryDepositRequestsRequest is request type for the Query/DepositRequests RPC method. */
export interface QueryDepositRequestsRequest {
  poolId: Long;
  pagination?: PageRequest;
}

/** QueryDepositRequestsResponse is response type for the Query/DepositRequests RPC method. */
export interface QueryDepositRequestsResponse {
  depositRequests: DepositRequest[];
  pagination?: PageResponse;
}

/** QueryDepositRequestRequest is request type for the Query/DepositRequest RPC method. */
export interface QueryDepositRequestRequest {
  poolId: Long;
  id: Long;
}

/** QueryDepositRequestResponse is response type for the Query/DepositRequest RPC method. */
export interface QueryDepositRequestResponse {
  depositRequest?: DepositRequest;
}

/** QueryWithdrawRequestsRequest is request type for the Query/WithdrawRequests RPC method. */
export interface QueryWithdrawRequestsRequest {
  poolId: Long;
  pagination?: PageRequest;
}

/** QueryWithdrawRequestsResponse is response type for the Query/WithdrawRequests RPC method. */
export interface QueryWithdrawRequestsResponse {
  withdrawRequests: WithdrawRequest[];
  pagination?: PageResponse;
}

/** QueryWithdrawRequestRequest is request type for the Query/WithdrawRequest RPC method. */
export interface QueryWithdrawRequestRequest {
  poolId: Long;
  id: Long;
}

/** QueryWithdrawRequestResponse is response type for the Query/WithdrawRequest RPC method. */
export interface QueryWithdrawRequestResponse {
  withdrawRequest?: WithdrawRequest;
}

/** QueryOrdersRequest is request type for the Query/Orders RPC method. */
export interface QueryOrdersRequest {
  pairId: Long;
  pagination?: PageRequest;
}

/** QueryOrdersResponse is response type for the Query/Orders RPC method. */
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}

/** QueryOrderRequest is request type for the Query/Order RPC method. */
export interface QueryOrderRequest {
  pairId: Long;
  id: Long;
}

/** QueryOrderResponse is response type for the Query/Order RPC method. */
export interface QueryOrderResponse {
  order?: Order;
}

/** QueryOrdersByOrdererRequest is request type for the Query/OrdersByOrderer RPC method. */
export interface QueryOrdersByOrdererRequest {
  orderer: string;
  pairId: Long;
  pagination?: PageRequest;
}

/** PoolResponse defines a custom pool response message. */
export interface PoolResponse {
  id: Long;
  pairId: Long;
  reserveAddress: string;
  poolCoinDenom: string;
  balances: Coin[];
  lastDepositRequestId: Long;
  lastWithdrawRequestId: Long;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return { pairId: Long.UZERO, disabled: "", pagination: undefined };
}

export const QueryPoolsRequest = {
  encode(
    message: QueryPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    if (message.disabled !== "") {
      writer.uint32(18).string(message.disabled);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        case 2:
          message.disabled = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsRequest {
    return {
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
      disabled: isSet(object.disabled) ? String(object.disabled) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(
    object: I
  ): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.disabled = object.disabled ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryPoolsResponse = {
  encode(
    message: QueryPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      PoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => PoolResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? PoolResponse.toJSON(e) : undefined
      );
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(
    object: I
  ): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map((e) => PoolResponse.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { poolId: Long.UZERO };
}

export const QueryPoolRequest = {
  encode(
    message: QueryPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(
    object: I
  ): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(
    message: QueryPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      PoolResponse.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? PoolResponse.fromJSON(object.pool) : undefined,
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PoolResponse.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(
    object: I
  ): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PoolResponse.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolByReserveAddressRequest(): QueryPoolByReserveAddressRequest {
  return { reserveAddress: "" };
}

export const QueryPoolByReserveAddressRequest = {
  encode(
    message: QueryPoolByReserveAddressRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reserveAddress !== "") {
      writer.uint32(10).string(message.reserveAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolByReserveAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByReserveAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolByReserveAddressRequest {
    return {
      reserveAddress: isSet(object.reserveAddress)
        ? String(object.reserveAddress)
        : "",
    };
  },

  toJSON(message: QueryPoolByReserveAddressRequest): unknown {
    const obj: any = {};
    message.reserveAddress !== undefined &&
      (obj.reserveAddress = message.reserveAddress);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryPoolByReserveAddressRequest>, I>
  >(object: I): QueryPoolByReserveAddressRequest {
    const message = createBaseQueryPoolByReserveAddressRequest();
    message.reserveAddress = object.reserveAddress ?? "";
    return message;
  },
};

function createBaseQueryPoolByPoolCoinDenomRequest(): QueryPoolByPoolCoinDenomRequest {
  return { poolCoinDenom: "" };
}

export const QueryPoolByPoolCoinDenomRequest = {
  encode(
    message: QueryPoolByPoolCoinDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolCoinDenom !== "") {
      writer.uint32(10).string(message.poolCoinDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolByPoolCoinDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByPoolCoinDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCoinDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolByPoolCoinDenomRequest {
    return {
      poolCoinDenom: isSet(object.poolCoinDenom)
        ? String(object.poolCoinDenom)
        : "",
    };
  },

  toJSON(message: QueryPoolByPoolCoinDenomRequest): unknown {
    const obj: any = {};
    message.poolCoinDenom !== undefined &&
      (obj.poolCoinDenom = message.poolCoinDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolByPoolCoinDenomRequest>, I>>(
    object: I
  ): QueryPoolByPoolCoinDenomRequest {
    const message = createBaseQueryPoolByPoolCoinDenomRequest();
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    return message;
  },
};

function createBaseQueryPairsRequest(): QueryPairsRequest {
  return { denoms: [], pagination: undefined };
}

export const QueryPairsRequest = {
  encode(
    message: QueryPairsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairsRequest {
    return {
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPairsRequest): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairsRequest>, I>>(
    object: I
  ): QueryPairsRequest {
    const message = createBaseQueryPairsRequest();
    message.denoms = object.denoms?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPairsResponse(): QueryPairsResponse {
  return { pairs: [], pagination: undefined };
}

export const QueryPairsResponse = {
  encode(
    message: QueryPairsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPairsResponse {
    return {
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => Pair.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPairsResponse): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? Pair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairsResponse>, I>>(
    object: I
  ): QueryPairsResponse {
    const message = createBaseQueryPairsResponse();
    message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPairRequest(): QueryPairRequest {
  return { pairId: Long.UZERO };
}

export const QueryPairRequest = {
  encode(
    message: QueryPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairRequest {
    return {
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryPairRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairRequest>, I>>(
    object: I
  ): QueryPairRequest {
    const message = createBaseQueryPairRequest();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPairResponse(): QueryPairResponse {
  return { pair: undefined };
}

export const QueryPairResponse = {
  encode(
    message: QueryPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = Pair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairResponse {
    return {
      pair: isSet(object.pair) ? Pair.fromJSON(object.pair) : undefined,
    };
  },

  toJSON(message: QueryPairResponse): unknown {
    const obj: any = {};
    message.pair !== undefined &&
      (obj.pair = message.pair ? Pair.toJSON(message.pair) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairResponse>, I>>(
    object: I
  ): QueryPairResponse {
    const message = createBaseQueryPairResponse();
    message.pair =
      object.pair !== undefined && object.pair !== null
        ? Pair.fromPartial(object.pair)
        : undefined;
    return message;
  },
};

function createBaseQueryDepositRequestsRequest(): QueryDepositRequestsRequest {
  return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryDepositRequestsRequest = {
  encode(
    message: QueryDepositRequestsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDepositRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositRequestsRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDepositRequestsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequestsRequest>, I>>(
    object: I
  ): QueryDepositRequestsRequest {
    const message = createBaseQueryDepositRequestsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDepositRequestsResponse(): QueryDepositRequestsResponse {
  return { depositRequests: [], pagination: undefined };
}

export const QueryDepositRequestsResponse = {
  encode(
    message: QueryDepositRequestsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.depositRequests) {
      DepositRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryDepositRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRequests.push(
            DepositRequest.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryDepositRequestsResponse {
    return {
      depositRequests: Array.isArray(object?.depositRequests)
        ? object.depositRequests.map((e: any) => DepositRequest.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDepositRequestsResponse): unknown {
    const obj: any = {};
    if (message.depositRequests) {
      obj.depositRequests = message.depositRequests.map((e) =>
        e ? DepositRequest.toJSON(e) : undefined
      );
    } else {
      obj.depositRequests = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequestsResponse>, I>>(
    object: I
  ): QueryDepositRequestsResponse {
    const message = createBaseQueryDepositRequestsResponse();
    message.depositRequests =
      object.depositRequests?.map((e) => DepositRequest.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDepositRequestRequest(): QueryDepositRequestRequest {
  return { poolId: Long.UZERO, id: Long.UZERO };
}

export const QueryDepositRequestRequest = {
  encode(
    message: QueryDepositRequestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDepositRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositRequestRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryDepositRequestRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequestRequest>, I>>(
    object: I
  ): QueryDepositRequestRequest {
    const message = createBaseQueryDepositRequestRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryDepositRequestResponse(): QueryDepositRequestResponse {
  return { depositRequest: undefined };
}

export const QueryDepositRequestResponse = {
  encode(
    message: QueryDepositRequestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositRequest !== undefined) {
      DepositRequest.encode(
        message.depositRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDepositRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRequest = DepositRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositRequestResponse {
    return {
      depositRequest: isSet(object.depositRequest)
        ? DepositRequest.fromJSON(object.depositRequest)
        : undefined,
    };
  },

  toJSON(message: QueryDepositRequestResponse): unknown {
    const obj: any = {};
    message.depositRequest !== undefined &&
      (obj.depositRequest = message.depositRequest
        ? DepositRequest.toJSON(message.depositRequest)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequestResponse>, I>>(
    object: I
  ): QueryDepositRequestResponse {
    const message = createBaseQueryDepositRequestResponse();
    message.depositRequest =
      object.depositRequest !== undefined && object.depositRequest !== null
        ? DepositRequest.fromPartial(object.depositRequest)
        : undefined;
    return message;
  },
};

function createBaseQueryWithdrawRequestsRequest(): QueryWithdrawRequestsRequest {
  return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryWithdrawRequestsRequest = {
  encode(
    message: QueryWithdrawRequestsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWithdrawRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawRequestsRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWithdrawRequestsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawRequestsRequest>, I>>(
    object: I
  ): QueryWithdrawRequestsRequest {
    const message = createBaseQueryWithdrawRequestsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryWithdrawRequestsResponse(): QueryWithdrawRequestsResponse {
  return { withdrawRequests: [], pagination: undefined };
}

export const QueryWithdrawRequestsResponse = {
  encode(
    message: QueryWithdrawRequestsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.withdrawRequests) {
      WithdrawRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryWithdrawRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawRequests.push(
            WithdrawRequest.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryWithdrawRequestsResponse {
    return {
      withdrawRequests: Array.isArray(object?.withdrawRequests)
        ? object.withdrawRequests.map((e: any) => WithdrawRequest.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWithdrawRequestsResponse): unknown {
    const obj: any = {};
    if (message.withdrawRequests) {
      obj.withdrawRequests = message.withdrawRequests.map((e) =>
        e ? WithdrawRequest.toJSON(e) : undefined
      );
    } else {
      obj.withdrawRequests = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawRequestsResponse>, I>>(
    object: I
  ): QueryWithdrawRequestsResponse {
    const message = createBaseQueryWithdrawRequestsResponse();
    message.withdrawRequests =
      object.withdrawRequests?.map((e) => WithdrawRequest.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryWithdrawRequestRequest(): QueryWithdrawRequestRequest {
  return { poolId: Long.UZERO, id: Long.UZERO };
}

export const QueryWithdrawRequestRequest = {
  encode(
    message: QueryWithdrawRequestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWithdrawRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawRequestRequest {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryWithdrawRequestRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawRequestRequest>, I>>(
    object: I
  ): QueryWithdrawRequestRequest {
    const message = createBaseQueryWithdrawRequestRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryWithdrawRequestResponse(): QueryWithdrawRequestResponse {
  return { withdrawRequest: undefined };
}

export const QueryWithdrawRequestResponse = {
  encode(
    message: QueryWithdrawRequestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.withdrawRequest !== undefined) {
      WithdrawRequest.encode(
        message.withdrawRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWithdrawRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawRequest = WithdrawRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawRequestResponse {
    return {
      withdrawRequest: isSet(object.withdrawRequest)
        ? WithdrawRequest.fromJSON(object.withdrawRequest)
        : undefined,
    };
  },

  toJSON(message: QueryWithdrawRequestResponse): unknown {
    const obj: any = {};
    message.withdrawRequest !== undefined &&
      (obj.withdrawRequest = message.withdrawRequest
        ? WithdrawRequest.toJSON(message.withdrawRequest)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawRequestResponse>, I>>(
    object: I
  ): QueryWithdrawRequestResponse {
    const message = createBaseQueryWithdrawRequestResponse();
    message.withdrawRequest =
      object.withdrawRequest !== undefined && object.withdrawRequest !== null
        ? WithdrawRequest.fromPartial(object.withdrawRequest)
        : undefined;
    return message;
  },
};

function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return { pairId: Long.UZERO, pagination: undefined };
}

export const QueryOrdersRequest = {
  encode(
    message: QueryOrdersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrdersRequest {
    return {
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOrdersRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrdersRequest>, I>>(
    object: I
  ): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return { orders: [], pagination: undefined };
}

export const QueryOrdersResponse = {
  encode(
    message: QueryOrdersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrdersResponse>, I>>(
    object: I
  ): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOrderRequest(): QueryOrderRequest {
  return { pairId: Long.UZERO, id: Long.UZERO };
}

export const QueryOrderRequest = {
  encode(
    message: QueryOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrderRequest {
    return {
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryOrderRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrderRequest>, I>>(
    object: I
  ): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryOrderResponse(): QueryOrderResponse {
  return { order: undefined };
}

export const QueryOrderResponse = {
  encode(
    message: QueryOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: QueryOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrderResponse>, I>>(
    object: I
  ): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

function createBaseQueryOrdersByOrdererRequest(): QueryOrdersByOrdererRequest {
  return { orderer: "", pairId: Long.UZERO, pagination: undefined };
}

export const QueryOrdersByOrdererRequest = {
  encode(
    message: QueryOrdersByOrdererRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOrdersByOrdererRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersByOrdererRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrdersByOrdererRequest {
    return {
      orderer: isSet(object.orderer) ? String(object.orderer) : "",
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOrdersByOrdererRequest): unknown {
    const obj: any = {};
    message.orderer !== undefined && (obj.orderer = message.orderer);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrdersByOrdererRequest>, I>>(
    object: I
  ): QueryOrdersByOrdererRequest {
    const message = createBaseQueryOrdersByOrdererRequest();
    message.orderer = object.orderer ?? "";
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBasePoolResponse(): PoolResponse {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    reserveAddress: "",
    poolCoinDenom: "",
    balances: [],
    lastDepositRequestId: Long.UZERO,
    lastWithdrawRequestId: Long.UZERO,
  };
}

export const PoolResponse = {
  encode(
    message: PoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(26).string(message.reserveAddress);
    }
    if (message.poolCoinDenom !== "") {
      writer.uint32(34).string(message.poolCoinDenom);
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.lastDepositRequestId.isZero()) {
      writer.uint32(48).uint64(message.lastDepositRequestId);
    }
    if (!message.lastWithdrawRequestId.isZero()) {
      writer.uint32(56).uint64(message.lastWithdrawRequestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.reserveAddress = reader.string();
          break;
        case 4:
          message.poolCoinDenom = reader.string();
          break;
        case 5:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastDepositRequestId = reader.uint64() as Long;
          break;
        case 7:
          message.lastWithdrawRequestId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolResponse {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
      reserveAddress: isSet(object.reserveAddress)
        ? String(object.reserveAddress)
        : "",
      poolCoinDenom: isSet(object.poolCoinDenom)
        ? String(object.poolCoinDenom)
        : "",
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Coin.fromJSON(e))
        : [],
      lastDepositRequestId: isSet(object.lastDepositRequestId)
        ? Long.fromString(object.lastDepositRequestId)
        : Long.UZERO,
      lastWithdrawRequestId: isSet(object.lastWithdrawRequestId)
        ? Long.fromString(object.lastWithdrawRequestId)
        : Long.UZERO,
    };
  },

  toJSON(message: PoolResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.reserveAddress !== undefined &&
      (obj.reserveAddress = message.reserveAddress);
    message.poolCoinDenom !== undefined &&
      (obj.poolCoinDenom = message.poolCoinDenom);
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    message.lastDepositRequestId !== undefined &&
      (obj.lastDepositRequestId = (
        message.lastDepositRequestId || Long.UZERO
      ).toString());
    message.lastWithdrawRequestId !== undefined &&
      (obj.lastWithdrawRequestId = (
        message.lastWithdrawRequestId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolResponse>, I>>(
    object: I
  ): PoolResponse {
    const message = createBasePoolResponse();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.reserveAddress = object.reserveAddress ?? "";
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.lastDepositRequestId =
      object.lastDepositRequestId !== undefined &&
      object.lastDepositRequestId !== null
        ? Long.fromValue(object.lastDepositRequestId)
        : Long.UZERO;
    message.lastWithdrawRequestId =
      object.lastWithdrawRequestId !== undefined &&
      object.lastWithdrawRequestId !== null
        ? Long.fromValue(object.lastWithdrawRequestId)
        : Long.UZERO;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Pools returns all liquidity pools. */
  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /** Pool returns the specific liquidity pool. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** PoolByReserveAddress returns all pools that correspond to the reserve account. */
  PoolByReserveAddress(
    request: QueryPoolByReserveAddressRequest
  ): Promise<QueryPoolResponse>;
  /** PoolByPoolCoinDenom returns all pools that correspond to the pool coin denom. */
  PoolByPoolCoinDenom(
    request: QueryPoolByPoolCoinDenomRequest
  ): Promise<QueryPoolResponse>;
  /** Pairs returns all liquidity pairs. */
  Pairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
  /** Pair returns the specific pair. */
  Pair(request: QueryPairRequest): Promise<QueryPairResponse>;
  /** DepositRequests returns all deposit requests. */
  DepositRequests(
    request: QueryDepositRequestsRequest
  ): Promise<QueryDepositRequestsResponse>;
  /** DepositRequest returns the specific deposit request. */
  DepositRequest(
    request: QueryDepositRequestRequest
  ): Promise<QueryDepositRequestResponse>;
  /** WithdrawRequests returns all withdraw requests. */
  WithdrawRequests(
    request: QueryWithdrawRequestsRequest
  ): Promise<QueryWithdrawRequestsResponse>;
  /** WithdrawRequest returns the specific withdraw request. */
  WithdrawRequest(
    request: QueryWithdrawRequestRequest
  ): Promise<QueryWithdrawRequestResponse>;
  /** Orders returns all orders within the pair. */
  Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
  /** Order returns the specific order. */
  Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /** OrdersByOrderer returns orders made by an orderer. */
  OrdersByOrderer(
    request: QueryOrdersByOrdererRequest
  ): Promise<QueryOrdersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Pools = this.Pools.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolByReserveAddress = this.PoolByReserveAddress.bind(this);
    this.PoolByPoolCoinDenom = this.PoolByPoolCoinDenom.bind(this);
    this.Pairs = this.Pairs.bind(this);
    this.Pair = this.Pair.bind(this);
    this.DepositRequests = this.DepositRequests.bind(this);
    this.DepositRequest = this.DepositRequest.bind(this);
    this.WithdrawRequests = this.WithdrawRequests.bind(this);
    this.WithdrawRequest = this.WithdrawRequest.bind(this);
    this.Orders = this.Orders.bind(this);
    this.Order = this.Order.bind(this);
    this.OrdersByOrderer = this.OrdersByOrderer.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "Pools",
      data
    );
    return promise.then((data) =>
      QueryPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PoolByReserveAddress(
    request: QueryPoolByReserveAddressRequest
  ): Promise<QueryPoolResponse> {
    const data = QueryPoolByReserveAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "PoolByReserveAddress",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PoolByPoolCoinDenom(
    request: QueryPoolByPoolCoinDenomRequest
  ): Promise<QueryPoolResponse> {
    const data = QueryPoolByPoolCoinDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "PoolByPoolCoinDenom",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  Pairs(request: QueryPairsRequest): Promise<QueryPairsResponse> {
    const data = QueryPairsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "Pairs",
      data
    );
    return promise.then((data) =>
      QueryPairsResponse.decode(new _m0.Reader(data))
    );
  }

  Pair(request: QueryPairRequest): Promise<QueryPairResponse> {
    const data = QueryPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "Pair",
      data
    );
    return promise.then((data) =>
      QueryPairResponse.decode(new _m0.Reader(data))
    );
  }

  DepositRequests(
    request: QueryDepositRequestsRequest
  ): Promise<QueryDepositRequestsResponse> {
    const data = QueryDepositRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "DepositRequests",
      data
    );
    return promise.then((data) =>
      QueryDepositRequestsResponse.decode(new _m0.Reader(data))
    );
  }

  DepositRequest(
    request: QueryDepositRequestRequest
  ): Promise<QueryDepositRequestResponse> {
    const data = QueryDepositRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "DepositRequest",
      data
    );
    return promise.then((data) =>
      QueryDepositRequestResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawRequests(
    request: QueryWithdrawRequestsRequest
  ): Promise<QueryWithdrawRequestsResponse> {
    const data = QueryWithdrawRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "WithdrawRequests",
      data
    );
    return promise.then((data) =>
      QueryWithdrawRequestsResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawRequest(
    request: QueryWithdrawRequestRequest
  ): Promise<QueryWithdrawRequestResponse> {
    const data = QueryWithdrawRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "WithdrawRequest",
      data
    );
    return promise.then((data) =>
      QueryWithdrawRequestResponse.decode(new _m0.Reader(data))
    );
  }

  Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "Orders",
      data
    );
    return promise.then((data) =>
      QueryOrdersResponse.decode(new _m0.Reader(data))
    );
  }

  Order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "Order",
      data
    );
    return promise.then((data) =>
      QueryOrderResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersByOrderer(
    request: QueryOrdersByOrdererRequest
  ): Promise<QueryOrdersResponse> {
    const data = QueryOrdersByOrdererRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crescent.liquidity.v1beta1.Query",
      "OrdersByOrderer",
      data
    );
    return promise.then((data) =>
      QueryOrdersResponse.decode(new _m0.Reader(data))
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

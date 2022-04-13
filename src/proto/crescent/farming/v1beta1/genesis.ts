/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Params,
  Staking,
  QueuedStaking,
  HistoricalRewards,
  OutstandingRewards,
} from "../../../crescent/farming/v1beta1/farming";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crescent.farming.v1beta1";

/** GenesisState defines the farming module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters for the farming module */
  params?: Params;
  globalPlanId: Long;
  /** plan_records defines the plan records used for genesis state */
  planRecords: PlanRecord[];
  stakingRecords: StakingRecord[];
  queuedStakingRecords: QueuedStakingRecord[];
  historicalRewardsRecords: HistoricalRewardsRecord[];
  outstandingRewardsRecords: OutstandingRewardsRecord[];
  currentEpochRecords: CurrentEpochRecord[];
  totalStakingsRecords: TotalStakingsRecord[];
  /**
   * reward_pool_coins specifies balance of the reward pool to be distributed in the plans
   * this param is needed for import/export validation
   */
  rewardPoolCoins: Coin[];
  /** last_epoch_time specifies the last executed epoch time of the plans */
  lastEpochTime?: Date;
  /** current_epoch_days specifies the epoch used when allocating farming rewards in end blocker */
  currentEpochDays: number;
}

/** PlanRecord is used for import/export via genesis json. */
export interface PlanRecord {
  /** plan specifies the plan interface; it can be FixedAmountPlan or RatioPlan */
  plan?: Any;
  /**
   * farming_pool_coins specifies balance of the farming pool for the plan
   * this param is needed for import/export validation
   */
  farmingPoolCoins: Coin[];
}

/** StakingRecord is used for import/export via genesis json. */
export interface StakingRecord {
  stakingCoinDenom: string;
  farmer: string;
  staking?: Staking;
}

/** QueuedStakingRecord is used for import/export via genesis json. */
export interface QueuedStakingRecord {
  stakingCoinDenom: string;
  farmer: string;
  queuedStaking?: QueuedStaking;
}

/** TotalStakingsRecord is used for import/export via genesis json. */
export interface TotalStakingsRecord {
  stakingCoinDenom: string;
  /** amount specifies total amount of the staking for the staking coin denom except queued staking */
  amount: string;
  /**
   * staking_reserve_coins specifies balance of the staking reserve account where staking and queued staking for the
   * staking coin denom is stored this param is needed for import/export validation
   */
  stakingReserveCoins: Coin[];
}

/** HistoricalRewardsRecord is used for import/export via genesis json. */
export interface HistoricalRewardsRecord {
  stakingCoinDenom: string;
  epoch: Long;
  historicalRewards?: HistoricalRewards;
}

/** OutstandingRewardsRecord is used for import/export via genesis json. */
export interface OutstandingRewardsRecord {
  stakingCoinDenom: string;
  outstandingRewards?: OutstandingRewards;
}

/** CurrentEpochRecord is used for import/export via genesis json. */
export interface CurrentEpochRecord {
  stakingCoinDenom: string;
  currentEpoch: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    globalPlanId: Long.UZERO,
    planRecords: [],
    stakingRecords: [],
    queuedStakingRecords: [],
    historicalRewardsRecords: [],
    outstandingRewardsRecords: [],
    currentEpochRecords: [],
    totalStakingsRecords: [],
    rewardPoolCoins: [],
    lastEpochTime: undefined,
    currentEpochDays: 0,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.globalPlanId.isZero()) {
      writer.uint32(16).uint64(message.globalPlanId);
    }
    for (const v of message.planRecords) {
      PlanRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.stakingRecords) {
      StakingRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.queuedStakingRecords) {
      QueuedStakingRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.historicalRewardsRecords) {
      HistoricalRewardsRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.outstandingRewardsRecords) {
      OutstandingRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.currentEpochRecords) {
      CurrentEpochRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.totalStakingsRecords) {
      TotalStakingsRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.rewardPoolCoins) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastEpochTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastEpochTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.currentEpochDays !== 0) {
      writer.uint32(96).uint32(message.currentEpochDays);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.globalPlanId = reader.uint64() as Long;
          break;
        case 3:
          message.planRecords.push(PlanRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.stakingRecords.push(
            StakingRecord.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.queuedStakingRecords.push(
            QueuedStakingRecord.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.historicalRewardsRecords.push(
            HistoricalRewardsRecord.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.outstandingRewardsRecords.push(
            OutstandingRewardsRecord.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.currentEpochRecords.push(
            CurrentEpochRecord.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.totalStakingsRecords.push(
            TotalStakingsRecord.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.rewardPoolCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.lastEpochTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.currentEpochDays = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      globalPlanId: isSet(object.globalPlanId)
        ? Long.fromString(object.globalPlanId)
        : Long.UZERO,
      planRecords: Array.isArray(object?.planRecords)
        ? object.planRecords.map((e: any) => PlanRecord.fromJSON(e))
        : [],
      stakingRecords: Array.isArray(object?.stakingRecords)
        ? object.stakingRecords.map((e: any) => StakingRecord.fromJSON(e))
        : [],
      queuedStakingRecords: Array.isArray(object?.queuedStakingRecords)
        ? object.queuedStakingRecords.map((e: any) =>
            QueuedStakingRecord.fromJSON(e)
          )
        : [],
      historicalRewardsRecords: Array.isArray(object?.historicalRewardsRecords)
        ? object.historicalRewardsRecords.map((e: any) =>
            HistoricalRewardsRecord.fromJSON(e)
          )
        : [],
      outstandingRewardsRecords: Array.isArray(
        object?.outstandingRewardsRecords
      )
        ? object.outstandingRewardsRecords.map((e: any) =>
            OutstandingRewardsRecord.fromJSON(e)
          )
        : [],
      currentEpochRecords: Array.isArray(object?.currentEpochRecords)
        ? object.currentEpochRecords.map((e: any) =>
            CurrentEpochRecord.fromJSON(e)
          )
        : [],
      totalStakingsRecords: Array.isArray(object?.totalStakingsRecords)
        ? object.totalStakingsRecords.map((e: any) =>
            TotalStakingsRecord.fromJSON(e)
          )
        : [],
      rewardPoolCoins: Array.isArray(object?.rewardPoolCoins)
        ? object.rewardPoolCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      lastEpochTime: isSet(object.lastEpochTime)
        ? fromJsonTimestamp(object.lastEpochTime)
        : undefined,
      currentEpochDays: isSet(object.currentEpochDays)
        ? Number(object.currentEpochDays)
        : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.globalPlanId !== undefined &&
      (obj.globalPlanId = (message.globalPlanId || Long.UZERO).toString());
    if (message.planRecords) {
      obj.planRecords = message.planRecords.map((e) =>
        e ? PlanRecord.toJSON(e) : undefined
      );
    } else {
      obj.planRecords = [];
    }
    if (message.stakingRecords) {
      obj.stakingRecords = message.stakingRecords.map((e) =>
        e ? StakingRecord.toJSON(e) : undefined
      );
    } else {
      obj.stakingRecords = [];
    }
    if (message.queuedStakingRecords) {
      obj.queuedStakingRecords = message.queuedStakingRecords.map((e) =>
        e ? QueuedStakingRecord.toJSON(e) : undefined
      );
    } else {
      obj.queuedStakingRecords = [];
    }
    if (message.historicalRewardsRecords) {
      obj.historicalRewardsRecords = message.historicalRewardsRecords.map((e) =>
        e ? HistoricalRewardsRecord.toJSON(e) : undefined
      );
    } else {
      obj.historicalRewardsRecords = [];
    }
    if (message.outstandingRewardsRecords) {
      obj.outstandingRewardsRecords = message.outstandingRewardsRecords.map(
        (e) => (e ? OutstandingRewardsRecord.toJSON(e) : undefined)
      );
    } else {
      obj.outstandingRewardsRecords = [];
    }
    if (message.currentEpochRecords) {
      obj.currentEpochRecords = message.currentEpochRecords.map((e) =>
        e ? CurrentEpochRecord.toJSON(e) : undefined
      );
    } else {
      obj.currentEpochRecords = [];
    }
    if (message.totalStakingsRecords) {
      obj.totalStakingsRecords = message.totalStakingsRecords.map((e) =>
        e ? TotalStakingsRecord.toJSON(e) : undefined
      );
    } else {
      obj.totalStakingsRecords = [];
    }
    if (message.rewardPoolCoins) {
      obj.rewardPoolCoins = message.rewardPoolCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.rewardPoolCoins = [];
    }
    message.lastEpochTime !== undefined &&
      (obj.lastEpochTime = message.lastEpochTime.toISOString());
    message.currentEpochDays !== undefined &&
      (obj.currentEpochDays = Math.round(message.currentEpochDays));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.globalPlanId =
      object.globalPlanId !== undefined && object.globalPlanId !== null
        ? Long.fromValue(object.globalPlanId)
        : Long.UZERO;
    message.planRecords =
      object.planRecords?.map((e) => PlanRecord.fromPartial(e)) || [];
    message.stakingRecords =
      object.stakingRecords?.map((e) => StakingRecord.fromPartial(e)) || [];
    message.queuedStakingRecords =
      object.queuedStakingRecords?.map((e) =>
        QueuedStakingRecord.fromPartial(e)
      ) || [];
    message.historicalRewardsRecords =
      object.historicalRewardsRecords?.map((e) =>
        HistoricalRewardsRecord.fromPartial(e)
      ) || [];
    message.outstandingRewardsRecords =
      object.outstandingRewardsRecords?.map((e) =>
        OutstandingRewardsRecord.fromPartial(e)
      ) || [];
    message.currentEpochRecords =
      object.currentEpochRecords?.map((e) =>
        CurrentEpochRecord.fromPartial(e)
      ) || [];
    message.totalStakingsRecords =
      object.totalStakingsRecords?.map((e) =>
        TotalStakingsRecord.fromPartial(e)
      ) || [];
    message.rewardPoolCoins =
      object.rewardPoolCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.lastEpochTime = object.lastEpochTime ?? undefined;
    message.currentEpochDays = object.currentEpochDays ?? 0;
    return message;
  },
};

function createBasePlanRecord(): PlanRecord {
  return { plan: undefined, farmingPoolCoins: [] };
}

export const PlanRecord = {
  encode(
    message: PlanRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.plan !== undefined) {
      Any.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.farmingPoolCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.farmingPoolCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlanRecord {
    return {
      plan: isSet(object.plan) ? Any.fromJSON(object.plan) : undefined,
      farmingPoolCoins: Array.isArray(object?.farmingPoolCoins)
        ? object.farmingPoolCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlanRecord): unknown {
    const obj: any = {};
    message.plan !== undefined &&
      (obj.plan = message.plan ? Any.toJSON(message.plan) : undefined);
    if (message.farmingPoolCoins) {
      obj.farmingPoolCoins = message.farmingPoolCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.farmingPoolCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlanRecord>, I>>(
    object: I
  ): PlanRecord {
    const message = createBasePlanRecord();
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? Any.fromPartial(object.plan)
        : undefined;
    message.farmingPoolCoins =
      object.farmingPoolCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStakingRecord(): StakingRecord {
  return { stakingCoinDenom: "", farmer: "", staking: undefined };
}

export const StakingRecord = {
  encode(
    message: StakingRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }
    if (message.farmer !== "") {
      writer.uint32(18).string(message.farmer);
    }
    if (message.staking !== undefined) {
      Staking.encode(message.staking, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;
        case 2:
          message.farmer = reader.string();
          break;
        case 3:
          message.staking = Staking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakingRecord {
    return {
      stakingCoinDenom: isSet(object.stakingCoinDenom)
        ? String(object.stakingCoinDenom)
        : "",
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      staking: isSet(object.staking)
        ? Staking.fromJSON(object.staking)
        : undefined,
    };
  },

  toJSON(message: StakingRecord): unknown {
    const obj: any = {};
    message.stakingCoinDenom !== undefined &&
      (obj.stakingCoinDenom = message.stakingCoinDenom);
    message.farmer !== undefined && (obj.farmer = message.farmer);
    message.staking !== undefined &&
      (obj.staking = message.staking
        ? Staking.toJSON(message.staking)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakingRecord>, I>>(
    object: I
  ): StakingRecord {
    const message = createBaseStakingRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.farmer = object.farmer ?? "";
    message.staking =
      object.staking !== undefined && object.staking !== null
        ? Staking.fromPartial(object.staking)
        : undefined;
    return message;
  },
};

function createBaseQueuedStakingRecord(): QueuedStakingRecord {
  return { stakingCoinDenom: "", farmer: "", queuedStaking: undefined };
}

export const QueuedStakingRecord = {
  encode(
    message: QueuedStakingRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }
    if (message.farmer !== "") {
      writer.uint32(18).string(message.farmer);
    }
    if (message.queuedStaking !== undefined) {
      QueuedStaking.encode(
        message.queuedStaking,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedStakingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedStakingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;
        case 2:
          message.farmer = reader.string();
          break;
        case 3:
          message.queuedStaking = QueuedStaking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueuedStakingRecord {
    return {
      stakingCoinDenom: isSet(object.stakingCoinDenom)
        ? String(object.stakingCoinDenom)
        : "",
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      queuedStaking: isSet(object.queuedStaking)
        ? QueuedStaking.fromJSON(object.queuedStaking)
        : undefined,
    };
  },

  toJSON(message: QueuedStakingRecord): unknown {
    const obj: any = {};
    message.stakingCoinDenom !== undefined &&
      (obj.stakingCoinDenom = message.stakingCoinDenom);
    message.farmer !== undefined && (obj.farmer = message.farmer);
    message.queuedStaking !== undefined &&
      (obj.queuedStaking = message.queuedStaking
        ? QueuedStaking.toJSON(message.queuedStaking)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueuedStakingRecord>, I>>(
    object: I
  ): QueuedStakingRecord {
    const message = createBaseQueuedStakingRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.farmer = object.farmer ?? "";
    message.queuedStaking =
      object.queuedStaking !== undefined && object.queuedStaking !== null
        ? QueuedStaking.fromPartial(object.queuedStaking)
        : undefined;
    return message;
  },
};

function createBaseTotalStakingsRecord(): TotalStakingsRecord {
  return { stakingCoinDenom: "", amount: "", stakingReserveCoins: [] };
}

export const TotalStakingsRecord = {
  encode(
    message: TotalStakingsRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    for (const v of message.stakingReserveCoins) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalStakingsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalStakingsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 9:
          message.stakingReserveCoins.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalStakingsRecord {
    return {
      stakingCoinDenom: isSet(object.stakingCoinDenom)
        ? String(object.stakingCoinDenom)
        : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      stakingReserveCoins: Array.isArray(object?.stakingReserveCoins)
        ? object.stakingReserveCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TotalStakingsRecord): unknown {
    const obj: any = {};
    message.stakingCoinDenom !== undefined &&
      (obj.stakingCoinDenom = message.stakingCoinDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    if (message.stakingReserveCoins) {
      obj.stakingReserveCoins = message.stakingReserveCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.stakingReserveCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TotalStakingsRecord>, I>>(
    object: I
  ): TotalStakingsRecord {
    const message = createBaseTotalStakingsRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.amount = object.amount ?? "";
    message.stakingReserveCoins =
      object.stakingReserveCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHistoricalRewardsRecord(): HistoricalRewardsRecord {
  return {
    stakingCoinDenom: "",
    epoch: Long.UZERO,
    historicalRewards: undefined,
  };
}

export const HistoricalRewardsRecord = {
  encode(
    message: HistoricalRewardsRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.historicalRewards !== undefined) {
      HistoricalRewards.encode(
        message.historicalRewards,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HistoricalRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;
        case 2:
          message.epoch = reader.uint64() as Long;
          break;
        case 3:
          message.historicalRewards = HistoricalRewards.decode(
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

  fromJSON(object: any): HistoricalRewardsRecord {
    return {
      stakingCoinDenom: isSet(object.stakingCoinDenom)
        ? String(object.stakingCoinDenom)
        : "",
      epoch: isSet(object.epoch) ? Long.fromString(object.epoch) : Long.UZERO,
      historicalRewards: isSet(object.historicalRewards)
        ? HistoricalRewards.fromJSON(object.historicalRewards)
        : undefined,
    };
  },

  toJSON(message: HistoricalRewardsRecord): unknown {
    const obj: any = {};
    message.stakingCoinDenom !== undefined &&
      (obj.stakingCoinDenom = message.stakingCoinDenom);
    message.epoch !== undefined &&
      (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.historicalRewards !== undefined &&
      (obj.historicalRewards = message.historicalRewards
        ? HistoricalRewards.toJSON(message.historicalRewards)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HistoricalRewardsRecord>, I>>(
    object: I
  ): HistoricalRewardsRecord {
    const message = createBaseHistoricalRewardsRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.epoch =
      object.epoch !== undefined && object.epoch !== null
        ? Long.fromValue(object.epoch)
        : Long.UZERO;
    message.historicalRewards =
      object.historicalRewards !== undefined &&
      object.historicalRewards !== null
        ? HistoricalRewards.fromPartial(object.historicalRewards)
        : undefined;
    return message;
  },
};

function createBaseOutstandingRewardsRecord(): OutstandingRewardsRecord {
  return { stakingCoinDenom: "", outstandingRewards: undefined };
}

export const OutstandingRewardsRecord = {
  encode(
    message: OutstandingRewardsRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }
    if (message.outstandingRewards !== undefined) {
      OutstandingRewards.encode(
        message.outstandingRewards,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OutstandingRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;
        case 2:
          message.outstandingRewards = OutstandingRewards.decode(
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

  fromJSON(object: any): OutstandingRewardsRecord {
    return {
      stakingCoinDenom: isSet(object.stakingCoinDenom)
        ? String(object.stakingCoinDenom)
        : "",
      outstandingRewards: isSet(object.outstandingRewards)
        ? OutstandingRewards.fromJSON(object.outstandingRewards)
        : undefined,
    };
  },

  toJSON(message: OutstandingRewardsRecord): unknown {
    const obj: any = {};
    message.stakingCoinDenom !== undefined &&
      (obj.stakingCoinDenom = message.stakingCoinDenom);
    message.outstandingRewards !== undefined &&
      (obj.outstandingRewards = message.outstandingRewards
        ? OutstandingRewards.toJSON(message.outstandingRewards)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutstandingRewardsRecord>, I>>(
    object: I
  ): OutstandingRewardsRecord {
    const message = createBaseOutstandingRewardsRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.outstandingRewards =
      object.outstandingRewards !== undefined &&
      object.outstandingRewards !== null
        ? OutstandingRewards.fromPartial(object.outstandingRewards)
        : undefined;
    return message;
  },
};

function createBaseCurrentEpochRecord(): CurrentEpochRecord {
  return { stakingCoinDenom: "", currentEpoch: Long.UZERO };
}

export const CurrentEpochRecord = {
  encode(
    message: CurrentEpochRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }
    if (!message.currentEpoch.isZero()) {
      writer.uint32(16).uint64(message.currentEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentEpochRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentEpochRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;
        case 2:
          message.currentEpoch = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrentEpochRecord {
    return {
      stakingCoinDenom: isSet(object.stakingCoinDenom)
        ? String(object.stakingCoinDenom)
        : "",
      currentEpoch: isSet(object.currentEpoch)
        ? Long.fromString(object.currentEpoch)
        : Long.UZERO,
    };
  },

  toJSON(message: CurrentEpochRecord): unknown {
    const obj: any = {};
    message.stakingCoinDenom !== undefined &&
      (obj.stakingCoinDenom = message.stakingCoinDenom);
    message.currentEpoch !== undefined &&
      (obj.currentEpoch = (message.currentEpoch || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CurrentEpochRecord>, I>>(
    object: I
  ): CurrentEpochRecord {
    const message = createBaseCurrentEpochRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.currentEpoch =
      object.currentEpoch !== undefined && object.currentEpoch !== null
        ? Long.fromValue(object.currentEpoch)
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

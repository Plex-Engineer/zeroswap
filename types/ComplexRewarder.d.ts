/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ComplexRewarderInterface extends ethers.utils.Interface {
  functions: {
    "add(uint256,uint256)": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "massUpdatePools(uint256[])": FunctionFragment;
    "onSushiReward(uint256,address,address,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "pendingToken(uint256,address)": FunctionFragment;
    "pendingTokens(uint256,address,uint256)": FunctionFragment;
    "poolIds(uint256)": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "poolLength()": FunctionFragment;
    "set(uint256,uint256)": FunctionFragment;
    "tokenPerBlock()": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "updatePool(uint256)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "onSushiReward",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingToken",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingTokens",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onSushiReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;

  events: {
    "LogInit()": EventFragment;
    "LogOnReward(address,uint256,uint256,address)": EventFragment;
    "LogPoolAddition(uint256,uint256)": EventFragment;
    "LogSetPool(uint256,uint256)": EventFragment;
    "LogUpdatePool(uint256,uint64,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogInit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogOnReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogPoolAddition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdatePool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ComplexRewarder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ComplexRewarderInterface;

  functions: {
    add(
      allocPoint: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "add(uint256,uint256)"(
      allocPoint: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "massUpdatePools(uint256[])"(
      pids: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onSushiReward(
      pid: BigNumberish,
      _user: string,
      to: string,
      arg3: BigNumberish,
      lpToken: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onSushiReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      _user: string,
      to: string,
      arg3: BigNumberish,
      lpToken: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    "pendingToken(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardTokens: string[];
        rewardAmounts: BigNumber[];
      }
    >;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardTokens: string[];
        rewardAmounts: BigNumber[];
      }
    >;

    poolIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "poolIds(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accSushiPerShare: BigNumber;
        lastRewardBlock: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    "poolInfo(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accSushiPerShare: BigNumber;
        lastRewardBlock: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    poolLength(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pools: BigNumber }>;

    "poolLength()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pools: BigNumber }>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "set(uint256,uint256)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokenPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "tokenPerBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updatePool(
      pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updatePool(uint256)"(
      pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    "userInfo(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;
  };

  add(
    allocPoint: BigNumberish,
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "add(uint256,uint256)"(
    allocPoint: BigNumberish,
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  massUpdatePools(
    pids: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "massUpdatePools(uint256[])"(
    pids: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onSushiReward(
    pid: BigNumberish,
    _user: string,
    to: string,
    arg3: BigNumberish,
    lpToken: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onSushiReward(uint256,address,address,uint256,uint256)"(
    pid: BigNumberish,
    _user: string,
    to: string,
    arg3: BigNumberish,
    lpToken: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  pendingToken(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingToken(uint256,address)"(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pendingTokens(
    pid: BigNumberish,
    user: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[]] & {
      rewardTokens: string[];
      rewardAmounts: BigNumber[];
    }
  >;

  "pendingTokens(uint256,address,uint256)"(
    pid: BigNumberish,
    user: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[]] & {
      rewardTokens: string[];
      rewardAmounts: BigNumber[];
    }
  >;

  poolIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "poolIds(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      accSushiPerShare: BigNumber;
      lastRewardBlock: BigNumber;
      allocPoint: BigNumber;
    }
  >;

  "poolInfo(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      accSushiPerShare: BigNumber;
      lastRewardBlock: BigNumber;
      allocPoint: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  "poolLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "set(uint256,uint256)"(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "tokenPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address,bool,bool)"(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updatePool(
    pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updatePool(uint256)"(
    pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  "userInfo(uint256,address)"(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  callStatic: {
    add(
      allocPoint: BigNumberish,
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "add(uint256,uint256)"(
      allocPoint: BigNumberish,
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "massUpdatePools(uint256[])"(
      pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    onSushiReward(
      pid: BigNumberish,
      _user: string,
      to: string,
      arg3: BigNumberish,
      lpToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "onSushiReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      _user: string,
      to: string,
      arg3: BigNumberish,
      lpToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    pendingToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingToken(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardTokens: string[];
        rewardAmounts: BigNumber[];
      }
    >;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardTokens: string[];
        rewardAmounts: BigNumber[];
      }
    >;

    poolIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "poolIds(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accSushiPerShare: BigNumber;
        lastRewardBlock: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    "poolInfo(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accSushiPerShare: BigNumber;
        lastRewardBlock: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    "poolLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "set(uint256,uint256)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePool(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accSushiPerShare: BigNumber;
        lastRewardBlock: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    "updatePool(uint256)"(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        accSushiPerShare: BigNumber;
        lastRewardBlock: BigNumber;
        allocPoint: BigNumber;
      }
    >;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    "userInfo(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;
  };

  filters: {
    LogInit(): EventFilter;

    LogOnReward(
      user: string | null,
      pid: BigNumberish | null,
      amount: null,
      to: string | null
    ): EventFilter;

    LogPoolAddition(pid: BigNumberish | null, allocPoint: null): EventFilter;

    LogSetPool(pid: BigNumberish | null, allocPoint: null): EventFilter;

    LogUpdatePool(
      pid: BigNumberish | null,
      lastRewardBlock: null,
      lpSupply: null,
      accSushiPerShare: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    add(
      allocPoint: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "add(uint256,uint256)"(
      allocPoint: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claimOwnership(overrides?: Overrides): Promise<BigNumber>;

    "claimOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "massUpdatePools(uint256[])"(
      pids: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    onSushiReward(
      pid: BigNumberish,
      _user: string,
      to: string,
      arg3: BigNumberish,
      lpToken: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onSushiReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      _user: string,
      to: string,
      arg3: BigNumberish,
      lpToken: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingToken(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "poolIds(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "poolInfo(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    "poolLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "set(uint256,uint256)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenPerBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updatePool(pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "updatePool(uint256)"(
      pid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "userInfo(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      allocPoint: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "add(uint256,uint256)"(
      allocPoint: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claimOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    massUpdatePools(
      pids: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "massUpdatePools(uint256[])"(
      pids: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onSushiReward(
      pid: BigNumberish,
      _user: string,
      to: string,
      arg3: BigNumberish,
      lpToken: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onSushiReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      _user: string,
      to: string,
      arg3: BigNumberish,
      lpToken: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingToken(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingToken(uint256,address)"(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poolIds(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poolInfo(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolLength()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "set(uint256,uint256)"(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokenPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenPerBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updatePool(
      pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updatePool(uint256)"(
      pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userInfo(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

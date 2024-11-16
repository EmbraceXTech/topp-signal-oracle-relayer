/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface SimpleRandomOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "caller"
      | "fulfillRandomness"
      | "randomness"
      | "requestRandomness"
      | "setCaller"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "RandomnessRequested" | "RandomnessUpdated"
  ): EventFragment;

  encodeFunctionData(functionFragment: "caller", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fulfillRandomness",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "randomness",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomness",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCaller",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "caller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "randomness", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCaller", data: BytesLike): Result;
}

export namespace RandomnessRequestedEvent {
  export type InputTuple = [time: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [time: bigint, amount: bigint];
  export interface OutputObject {
    time: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RandomnessUpdatedEvent {
  export type InputTuple = [
    timestamp: BigNumberish,
    randomness: BigNumberish[]
  ];
  export type OutputTuple = [timestamp: bigint, randomness: bigint[]];
  export interface OutputObject {
    timestamp: bigint;
    randomness: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SimpleRandomOracle extends BaseContract {
  connect(runner?: ContractRunner | null): SimpleRandomOracle;
  waitForDeployment(): Promise<this>;

  interface: SimpleRandomOracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  caller: TypedContractMethod<[], [string], "view">;

  fulfillRandomness: TypedContractMethod<
    [time: BigNumberish, _randomness: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  randomness: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  requestRandomness: TypedContractMethod<
    [time: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCaller: TypedContractMethod<[_caller: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "caller"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fulfillRandomness"
  ): TypedContractMethod<
    [time: BigNumberish, _randomness: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "randomness"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "requestRandomness"
  ): TypedContractMethod<
    [time: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCaller"
  ): TypedContractMethod<[_caller: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "RandomnessRequested"
  ): TypedContractEvent<
    RandomnessRequestedEvent.InputTuple,
    RandomnessRequestedEvent.OutputTuple,
    RandomnessRequestedEvent.OutputObject
  >;
  getEvent(
    key: "RandomnessUpdated"
  ): TypedContractEvent<
    RandomnessUpdatedEvent.InputTuple,
    RandomnessUpdatedEvent.OutputTuple,
    RandomnessUpdatedEvent.OutputObject
  >;

  filters: {
    "RandomnessRequested(uint256,uint256)": TypedContractEvent<
      RandomnessRequestedEvent.InputTuple,
      RandomnessRequestedEvent.OutputTuple,
      RandomnessRequestedEvent.OutputObject
    >;
    RandomnessRequested: TypedContractEvent<
      RandomnessRequestedEvent.InputTuple,
      RandomnessRequestedEvent.OutputTuple,
      RandomnessRequestedEvent.OutputObject
    >;

    "RandomnessUpdated(uint256,uint256[])": TypedContractEvent<
      RandomnessUpdatedEvent.InputTuple,
      RandomnessUpdatedEvent.OutputTuple,
      RandomnessUpdatedEvent.OutputObject
    >;
    RandomnessUpdated: TypedContractEvent<
      RandomnessUpdatedEvent.InputTuple,
      RandomnessUpdatedEvent.OutputTuple,
      RandomnessUpdatedEvent.OutputObject
    >;
  };
}

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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface ISignalTicketInterface extends Interface {
  getFunction(nameOrSignature: "burn" | "mint"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
}

export interface ISignalTicket extends BaseContract {
  connect(runner?: ContractRunner | null): ISignalTicket;
  waitForDeployment(): Promise<this>;

  interface: ISignalTicketInterface;

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

  burn: TypedContractMethod<
    [
      time: BigNumberish,
      price: BigNumberish,
      from: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  mint: TypedContractMethod<
    [
      time: BigNumberish,
      price: BigNumberish,
      recipient: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [
      time: BigNumberish,
      price: BigNumberish,
      from: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [
      time: BigNumberish,
      price: BigNumberish,
      recipient: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}

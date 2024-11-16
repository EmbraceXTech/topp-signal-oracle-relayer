/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IKYCBitkubChain,
  IKYCBitkubChainInterface,
} from "../../../../contracts/token/KAP20.sol/IKYCBitkubChain";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "kycsLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IKYCBitkubChain__factory {
  static readonly abi = _abi;
  static createInterface(): IKYCBitkubChainInterface {
    return new Interface(_abi) as IKYCBitkubChainInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IKYCBitkubChain {
    return new Contract(address, _abi, runner) as unknown as IKYCBitkubChain;
  }
}

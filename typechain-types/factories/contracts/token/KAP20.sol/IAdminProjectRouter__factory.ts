/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAdminProjectRouter,
  IAdminProjectRouterInterface,
} from "../../../../contracts/token/KAP20.sol/IAdminProjectRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_project",
        type: "string",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_project",
        type: "string",
      },
    ],
    name: "isSuperAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAdminProjectRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IAdminProjectRouterInterface {
    return new Interface(_abi) as IAdminProjectRouterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IAdminProjectRouter {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IAdminProjectRouter;
  }
}

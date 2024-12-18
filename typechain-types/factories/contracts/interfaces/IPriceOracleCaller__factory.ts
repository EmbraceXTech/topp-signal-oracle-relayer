/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPriceOracleCaller,
  IPriceOracleCallerInterface,
} from "../../../contracts/interfaces/IPriceOracleCaller";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "fulfillPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPriceOracleCaller__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceOracleCallerInterface {
    return new Interface(_abi) as IPriceOracleCallerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPriceOracleCaller {
    return new Contract(address, _abi, runner) as unknown as IPriceOracleCaller;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ComplexRewarder } from "../ComplexRewarder";

export class ComplexRewarder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardToken: string,
    _tokenPerBlock: BigNumberish,
    _MASTERCHEF_V2: string,
    overrides?: Overrides
  ): Promise<ComplexRewarder> {
    return super.deploy(
      _rewardToken,
      _tokenPerBlock,
      _MASTERCHEF_V2,
      overrides || {}
    ) as Promise<ComplexRewarder>;
  }
  getDeployTransaction(
    _rewardToken: string,
    _tokenPerBlock: BigNumberish,
    _MASTERCHEF_V2: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardToken,
      _tokenPerBlock,
      _MASTERCHEF_V2,
      overrides || {}
    );
  }
  attach(address: string): ComplexRewarder {
    return super.attach(address) as ComplexRewarder;
  }
  connect(signer: Signer): ComplexRewarder__factory {
    return super.connect(signer) as ComplexRewarder__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComplexRewarder {
    return new Contract(address, _abi, signerOrProvider) as ComplexRewarder;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenPerBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_MASTERCHEF_V2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "LogInit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "LogOnReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    name: "LogPoolAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    name: "LogSetPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "lastRewardBlock",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accSushiPerShare",
        type: "uint256",
      },
    ],
    name: "LogUpdatePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lpToken",
        type: "uint256",
      },
    ],
    name: "onSushiReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingToken",
    outputs: [
      {
        internalType: "uint256",
        name: "pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "rewardTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolIds",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint128",
        name: "accSushiPerShare",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "lastRewardBlock",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "allocPoint",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "pools",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPerBlock",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "accSushiPerShare",
            type: "uint128",
          },
          {
            internalType: "uint64",
            name: "lastRewardBlock",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "allocPoint",
            type: "uint64",
          },
        ],
        internalType: "struct ComplexRewarder.PoolInfo",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051620018673803806200186783398101604081905261003191610095565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160601b0319606093841b811660805260069290925590911b1660a0526100ef565b6000806000606084860312156100a9578283fd5b83516100b4816100d7565b6020850151604086015191945092506100cc816100d7565b809150509250925092565b6001600160a01b03811681146100ec57600080fd5b50565b60805160601c60a05160601c61173562000132600039806104fb5280610590528061080052806108955280610c7a525080610d2b5280610e3352506117356000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806357a5b58c116100975780638da5cb5b116100665780638da5cb5b146101fc57806393f1a40b14610211578063d63b3c4914610232578063e30c39781461025357610100565b806357a5b58c146101b057806369883b4e146101c3578063771602f7146101d65780638bf63742146101e957610100565b80634198709a116100d35780634198709a1461016d57806348e43af4146101755780634e71e0c81461018857806351eb05a61461019057610100565b8063078dfbe714610105578063081e3eda1461011a5780631526fe27146101385780631ab06ee51461015a575b600080fd5b6101186101133660046110ef565b61025b565b005b61012261034a565b60405161012f9190611698565b60405180910390f35b61014b6101463660046111e6565b610350565b60405161012f9392919061166e565b6101186101683660046112cd565b610387565b610122610466565b610122610183366004611216565b61046c565b6101186106fa565b6101a361019e3660046111e6565b610787565b60405161012f9190611635565b6101186101be366004611139565b610a85565b6101226101d13660046111e6565b610abb565b6101186101e43660046112cd565b610ad9565b6101186101f7366004611245565b610c6f565b610204610dd8565b60405161012f919061132f565b61022461021f366004611216565b610de7565b60405161012f9291906116a1565b610245610240366004611296565b610e0b565b60405161012f92919061135c565b610204610eca565b6000546001600160a01b0316331461028e5760405162461bcd60e51b81526004016102859061155d565b60405180910390fd5b8115610329576001600160a01b0383161515806102a85750805b6102c45760405162461bcd60e51b8152600401610285906114c0565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055610345565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b60035490565b6002602052600090815260409020546001600160801b038116906001600160401b03600160801b8204811691600160c01b90041683565b6000546001600160a01b031633146103b15760405162461bcd60e51b81526004016102859061155d565b6000828152600260205260409020546005546103e89183916103e291600160c01b90046001600160401b0316610ed9565b90610f02565b6005556103f481610f25565b6000838152600260205260409081902080546001600160401b0393909316600160c01b026001600160c01b03909316929092179091555182907f942cc7e17a17c164bd977f32ab8c54265d5b9d481e4e352bf874f1e568874e7c9061045a908490611698565b60405180910390a25050565b60065481565b60006104766110cf565b506000838152600260209081526040808320815160608101835290546001600160801b0380821683526001600160401b03600160801b8304811684870152600160c01b9092049091168284015287855260048085528386206001600160a01b03808a1688529552838620835194516378ed5d1f60e01b815293969095949092169391927f0000000000000000000000000000000000000000000000000000000000000000909216916378ed5d1f91610530918b9101611698565b60206040518083038186803b15801561054857600080fd5b505afa15801561055c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058091906111ca565b6001600160a01b03166370a082317f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016105cb919061132f565b60206040518083038186803b1580156105e357600080fd5b505afa1580156105f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061b91906111fe565b905083602001516001600160401b03164311801561063857508015155b156106c457600061065f85602001516001600160401b031643610ed990919063ffffffff16565b9050600060055461069287604001516001600160401b031661068c60065486610f5290919063ffffffff16565b90610f52565b8161069957fe5b0490506106bf836106af8364e8d4a51000610f52565b816106b657fe5b86919004610f02565b935050505b600183015483546106ef919064e8d4a51000906106e19086610f52565b816106e857fe5b0490610ed9565b979650505050505050565b6001546001600160a01b03163381146107255760405162461bcd60e51b815260040161028590611592565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b61078f6110cf565b50600081815260026020908152604091829020825160608101845290546001600160801b03811682526001600160401b03600160801b82048116938301849052600160c01b9091041692810192909252431115610a80576040516378ed5d1f60e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906378ed5d1f90610835908690600401611698565b60206040518083038186803b15801561084d57600080fd5b505afa158015610861573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088591906111ca565b6001600160a01b03166370a082317f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016108d0919061132f565b60206040518083038186803b1580156108e857600080fd5b505afa1580156108fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092091906111fe565b905080156109c357600061094a83602001516001600160401b031643610ed990919063ffffffff16565b9050600060055461097785604001516001600160401b031661068c60065486610f5290919063ffffffff16565b8161097e57fe5b0490506109b56109a4846109978464e8d4a51000610f52565b8161099e57fe5b04610f89565b85516001600160801b031690610fb2565b6001600160801b0316845250505b6109cc43610f25565b6001600160401b03908116602084810191825260008681526002909152604090819020855181549351838801516001600160801b03199095166001600160801b0383161767ffffffffffffffff60801b1916600160801b82881602176001600160c01b0316600160c01b95909616949094029490941790555185927f0fc9545022a542541ad085d091fb09a2ab36fee366a4576ab63714ea907ad35392610a7692909186916116af565b60405180910390a2505b919050565b8060005b81811015610ab557610aac848483818110610aa057fe5b90506020020135610787565b50600101610a89565b50505050565b60038181548110610ac857fe5b600091825260209091200154905081565b6000546001600160a01b03163314610b035760405162461bcd60e51b81526004016102859061155d565b600081815260026020526040902054600160801b90046001600160401b031615610b3f5760405162461bcd60e51b81526004016102859061141b565b6005544390610b4e9084610f02565b60055560408051606081019091526000815260208101610b6d83610f25565b6001600160401b03168152602001610b8485610f25565b6001600160401b0390811690915260008481526002602090815260408083208551815493870151968301518616600160c01b026001600160c01b0397909616600160801b0267ffffffffffffffff60801b196001600160801b039092166001600160801b031990951694909417169290921794909416929092179091556003805460018101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018390555182907f38410508059921573ab9ebdca2a5034be738d236366b8f32de4434ea95ed3c8190610c62908690611698565b60405180910390a2505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610cb75760405162461bcd60e51b81526004016102859061147f565b610cbf6110cf565b610cc886610787565b60008781526004602090815260408083206001600160a01b038a168452909152812080549293509115610d5257600182015483518354610d1c929164e8d4a51000916106e1916001600160801b0316610f52565b9050610d526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168783610fe1565b838255825164e8d4a5100090610d729086906001600160801b0316610f52565b81610d7957fe5b048260010181905550856001600160a01b031688886001600160a01b03167f2ece88ca2bc08dd018db50e1d25a20bf1241e5fab1c396caa51f01a54bd2f75b84604051610dc69190611698565b60405180910390a45050505050505050565b6000546001600160a01b031681565b60046020908152600092835260408084209091529082529020805460019091015482565b60408051600180825281830190925260609182918291602080830190803683370190505090507f000000000000000000000000000000000000000000000000000000000000000081600081518110610e5f57fe5b6001600160a01b039290921660209283029190910190910152604080516001808252818301909252606091816020016020820280368337019050509050610ea6878761046c565b81600081518110610eb357fe5b602090810291909101015290969095509350505050565b6001546001600160a01b031681565b80820382811115610efc5760405162461bcd60e51b8152600401610285906113ec565b92915050565b81810181811015610efc5760405162461bcd60e51b815260040161028590611526565b60006001600160401b03821115610f4e5760405162461bcd60e51b8152600401610285906115c7565b5090565b6000811580610f6d57505080820282828281610f6a57fe5b04145b610efc5760405162461bcd60e51b8152600401610285906115fe565b60006001600160801b03821115610f4e5760405162461bcd60e51b8152600401610285906114ef565b8181016001600160801b038083169082161015610efc5760405162461bcd60e51b815260040161028590611526565b60006060846001600160a01b031663a9059cbb8585604051602401611007929190611343565b6040516020818303038152906040529060e01b6020820180516001600160e01b03838183161783525050505060405161104091906112f6565b6000604051808303816000865af19150503d806000811461107d576040519150601f19603f3d011682016040523d82523d6000602084013e611082565b606091505b50915091508180156110ac5750805115806110ac5750808060200190518101906110ac91906111a7565b6110c85760405162461bcd60e51b815260040161028590611448565b5050505050565b604080516060810182526000808252602082018190529181019190915290565b600080600060608486031215611103578283fd5b833561110e816116d9565b9250602084013561111e816116f1565b9150604084013561112e816116f1565b809150509250925092565b6000806020838503121561114b578182fd5b82356001600160401b0380821115611161578384fd5b818501915085601f830112611174578384fd5b813581811115611182578485fd5b8660208083028501011115611195578485fd5b60209290920196919550909350505050565b6000602082840312156111b8578081fd5b81516111c3816116f1565b9392505050565b6000602082840312156111db578081fd5b81516111c3816116d9565b6000602082840312156111f7578081fd5b5035919050565b60006020828403121561120f578081fd5b5051919050565b60008060408385031215611228578182fd5b82359150602083013561123a816116d9565b809150509250929050565b600080600080600060a0868803121561125c578081fd5b85359450602086013561126e816116d9565b9350604086013561127e816116d9565b94979396509394606081013594506080013592915050565b6000806000606084860312156112aa578283fd5b8335925060208401356112bc816116d9565b929592945050506040919091013590565b600080604083850312156112df578182fd5b50508035926020909101359150565b815260200190565b60008251815b8181101561131657602081860181015185830152016112fc565b818111156113245782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b604080825283519082018190526000906020906060840190828701845b8281101561139e5781516001600160a01b031684529284019290840190600101611379565b505050838103828501528085516113b58184611698565b91508387019250845b818110156113df576113d18385516112ee565b9385019392506001016113be565b5090979650505050505050565b602080825260159082015274426f72696e674d6174683a20556e646572666c6f7760581b604082015260600190565b602080825260139082015272506f6f6c20616c72656164792065786973747360681b604082015260600190565b6020808252601c908201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604082015260600190565b60208082526021908201527f4f6e6c79204d4356322063616e2063616c6c20746869732066756e6374696f6e6040820152601760f91b606082015260800190565b6020808252601590820152744f776e61626c653a207a65726f206164647265737360581b604082015260600190565b6020808252601c908201527f426f72696e674d6174683a2075696e74313238204f766572666c6f7700000000604082015260600190565b60208082526018908201527f426f72696e674d6174683a20416464204f766572666c6f770000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604082015260600190565b6020808252601b908201527f426f72696e674d6174683a2075696e743634204f766572666c6f770000000000604082015260600190565b60208082526018908201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604082015260600190565b81516001600160801b031681526020808301516001600160401b0390811691830191909152604092830151169181019190915260600190565b6001600160801b039390931683526001600160401b03918216602084015216604082015260600190565b90815260200190565b918252602082015260400190565b6001600160401b0393909316835260208301919091526001600160801b0316604082015260600190565b6001600160a01b03811681146116ee57600080fd5b50565b80151581146116ee57600080fdfea2646970667358221220884c37e1569916d71dff0ea39b2cfcc214c3af656904f71404356dcd22f85aba64736f6c634300060c0033";

export const abi: any = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "digitalIdentities",
    outputs: [
      {
        internalType: "string",
        name: "fullName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dateOfBirth",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "phoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "photoDirectory",
        type: "string",
      },
      {
        internalType: "string",
        name: "fingerprintHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "documentDirectory",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "digitalInformationCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_fullName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_dateOfBirth",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_photoDirectory",
        type: "string",
      },
      {
        internalType: "string",
        name: "_fingerprintHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_documentDirectory",
        type: "string",
      },
    ],
    name: "registerIdentity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "viewIdentity",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "fullName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "dateOfBirth",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "phoneNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "photoDirectory",
            type: "string",
          },
          {
            internalType: "string",
            name: "fingerprintHash",
            type: "string",
          },
          {
            internalType: "string",
            name: "documentDirectory",
            type: "string",
          },
        ],
        internalType: "struct Afriid.PersonalInformation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];

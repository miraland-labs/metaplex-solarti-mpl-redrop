/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solarti/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solarti/web3.js';
import * as beetSolana from '@metaplex-solarti/beet-solana';

/**
 * @category Instructions
 * @category Claim
 * @category generated
 */
export type ClaimInstructionArgs = {
  bump: number;
  index: beet.bignum;
  amount: beet.bignum;
  claimantSecret: web3.PublicKey;
  proof: number[] /* size: 32 */[];
};
/**
 * @category Instructions
 * @category Claim
 * @category generated
 */
const claimStruct = new beet.FixableBeetArgsStruct<
  ClaimInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['index', beet.u64],
    ['amount', beet.u64],
    ['claimantSecret', beetSolana.publicKey],
    ['proof', beet.array(beet.uniformFixedSizeArray(beet.u8, 32))],
  ],
  'ClaimInstructionArgs',
);
/**
 * Accounts required by the _claim_ instruction
 * @category Instructions
 * @category Claim
 * @category generated
 */
export type ClaimInstructionAccounts = {
  distributor: web3.PublicKey;
  claimStatus: web3.PublicKey;
  from: web3.PublicKey;
  to: web3.PublicKey;
  temporal: web3.PublicKey;
  payer: web3.PublicKey;
};

const claimInstructionDiscriminator = [62, 198, 214, 193, 213, 159, 108, 210];

/**
 * Creates a _Claim_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Claim
 * @category generated
 */
export function createClaimInstruction(
  accounts: ClaimInstructionAccounts,
  args: ClaimInstructionArgs,
) {
  const { distributor, claimStatus, from, to, temporal, payer } = accounts;

  const [data] = claimStruct.serialize({
    instructionDiscriminator: claimInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: distributor,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: claimStatus,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: from,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: to,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: temporal,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('rdrppvBxnXBwBXVLTsoGuBZiZfhJu3JtGLUfMaJpgjQ'),
    keys,
    data,
  });
  return ix;
}

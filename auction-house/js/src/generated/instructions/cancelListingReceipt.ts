/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category CancelListingReceipt
 * @category generated
 */
export const cancelListingReceiptStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CancelListingReceiptInstructionArgs',
);
/**
 * Accounts required by the _cancelListingReceipt_ instruction
 *
 * @property [_writable_] receipt
 * @property [] instruction
 * @category Instructions
 * @category CancelListingReceipt
 * @category generated
 */
export type CancelListingReceiptInstructionAccounts = {
  receipt: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  instruction: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const cancelListingReceiptInstructionDiscriminator = [171, 59, 138, 126, 246, 189, 91, 11];

/**
 * Creates a _CancelListingReceipt_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CancelListingReceipt
 * @category generated
 */
export function createCancelListingReceiptInstruction(
  accounts: CancelListingReceiptInstructionAccounts,
  programId = new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
) {
  const [data] = cancelListingReceiptStruct.serialize({
    instructionDiscriminator: cancelListingReceiptInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.receipt,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.instruction,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}

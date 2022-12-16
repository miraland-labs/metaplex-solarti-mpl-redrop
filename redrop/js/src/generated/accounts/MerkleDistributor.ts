/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solarti/web3.js';
import * as beetSolana from '@metaplex-solarti/beet-solana';
import * as beet from '@metaplex-foundation/beet';

/**
 * Arguments used to create {@link MerkleDistributor}
 * @category Accounts
 * @category generated
 */
export type MerkleDistributorArgs = {
  base: web3.PublicKey;
  bump: number;
  root: number[] /* size: 32 */;
  temporal: web3.PublicKey;
};

const merkleDistributorDiscriminator = [77, 119, 139, 70, 84, 247, 12, 26];
/**
 * Holds the data for the {@link MerkleDistributor} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class MerkleDistributor implements MerkleDistributorArgs {
  private constructor(
    readonly base: web3.PublicKey,
    readonly bump: number,
    readonly root: number[] /* size: 32 */,
    readonly temporal: web3.PublicKey,
  ) {}

  /**
   * Creates a {@link MerkleDistributor} instance from the provided args.
   */
  static fromArgs(args: MerkleDistributorArgs) {
    return new MerkleDistributor(args.base, args.bump, args.root, args.temporal);
  }

  /**
   * Deserializes the {@link MerkleDistributor} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [MerkleDistributor, number] {
    return MerkleDistributor.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link MerkleDistributor} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<MerkleDistributor> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find MerkleDistributor account at ${address}`);
    }
    return MerkleDistributor.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Deserializes the {@link MerkleDistributor} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [MerkleDistributor, number] {
    return merkleDistributorBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link MerkleDistributor} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return merkleDistributorBeet.serialize({
      accountDiscriminator: merkleDistributorDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link MerkleDistributor}
   */
  static get byteSize() {
    return merkleDistributorBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link MerkleDistributor} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(MerkleDistributor.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link MerkleDistributor} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === MerkleDistributor.byteSize;
  }

  /**
   * Returns a readable version of {@link MerkleDistributor} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      base: this.base.toBase58(),
      bump: this.bump,
      root: this.root,
      temporal: this.temporal.toBase58(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const merkleDistributorBeet = new beet.BeetStruct<
  MerkleDistributor,
  MerkleDistributorArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['base', beetSolana.publicKey],
    ['bump', beet.u8],
    ['root', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['temporal', beetSolana.publicKey],
  ],
  MerkleDistributor.fromArgs,
  'MerkleDistributor',
);

// blockchain definition

var u = require('dash-util')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('e0028eb9648db56b1ac77cf090b99048a8007e2bb64b68f092c03c7f56a662c7'),
  time: 1390095618,
  bits: 0x1e0ffff0,
  nonce: 28917698
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 407452,
    header: {
      version: 3,
      prevHash: u.toHash('0000000000010eedb86810ef7ce941fabc7d2be0c0fa2bf8dfcb5b48f573d15b'),
      merkleRoot: u.toHash('d0761697a9ec536c444591e0ff4dbcba8c78df0263444a5229db58e600e1359d'),
      time: 1453463939,
      bits: 0x1b0f1aee,
      nonce: 872384581
    }
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note muscle code install casino slot gift'; 
let testAccounts = [
"0x071a23cf35760869c6005ebf1c9d2a07384b4f8f7ea38b81a9c9330eff5ec7ec",
"0x09ad58848cda4044bbf1eac05b339ae4462b08f7d0079c60905c41a21d60bbce",
"0x483cf61ce74bd5447650046912b73490a56ea1cde6028513b66678adf4642e1e",
"0x24c619df2f6b834402d5ef06d46a9a3a53701dbe8ab02ef50292e68b4f99efbf",
"0xfa87e8f84e5b17163746903490fd8aa835f1f9f32931f2bf69f4ad01e20b1d3a",
"0x6fd0eff1a43b137752d333714aae0b6ac275273b9f1ce9a147927b161154e410",
"0xa75d120c56b5efa930f6912c052a02b4c5c5233e86a34c55153c3a007b2473b1",
"0xba90676dafeb6b7ed4f3320bd72a72998d7fdfa6a0fb6ffdc37313ebfce3c38a",
"0x8bc4e0e20a254bdac5505f7709813ef27ad0eaa5b276409f81eb6124761fe360",
"0xc14f102e33c1b7a6b39bbabc2d2471313338053c80aa2e70fc7af61132983bbb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strong dash stereo eternal gesture drip forget gas'; 
let testAccounts = [
"0x58abc494da96fe6d5b596a2d8ab32b25d55011d51c16d5578df033e3f22544ce",
"0x0e219f9df5b9aa9fed211eb498a42dd14b817f1dd55538ba606fb6dbd861e8e2",
"0x1fc54c13437fa5e917b59498e174a64fe706416b0d2d4d8eea03a88c8045af81",
"0xa9d8d5c7631431da13a8d4b02251c280771c15008fe1081c8a066bcd69fe4f1b",
"0xa77424f9aa8fd93801f7f08864eeef3bca8290d4ca26f0f5b3408aa8705e02ce",
"0xa173fc7c52e561b74f978594bd1ef55b70ca3d60f115e4bb2786274d793c00d5",
"0xfa24772dfb34d615001f5aa2d63297c06fdad17d765d0c06bb5ed86f5ca85ff8",
"0xf60eb8c4e63d9d59308997895e1fba288203bf46840f1cdc0461c49d525acf00",
"0x523e11bed0e609eb78290785d61d3b45906b818c604cb8fc9603308e1300e365",
"0x0d61d5ec03f860879324a8d46914c4b52c3737d8e511695db619293629ba9d09"
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


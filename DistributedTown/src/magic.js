/* tslint:disable */
import '../globals';
import {Magic} from '@magic-sdk/react-native';
import Web3 from 'web3';

const magic = new Magic('pk_test_368FED969AE6CB57', {network: 'rinkeby'});
export default magic;

const web3 = new Web3(magic.rpcProvider);
export {web3};

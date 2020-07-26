import {ethers} from 'ethers';
import {fetchRepo, getOrgAddress} from './functionalities';

const ARAGON_MNEMONIC =
  'call glow acoustic vintage front ring trade assist shuffle mimic volume reject';

const MAIN_SUBGRAPH_RINKEBY =
  'https://api.thegraph.com/subgraphs/name/aragon/aragon-rinkeby';

const TEMPLATE_NAME = 'bare-template';

async function main() {
  const {lastVersion} = await fetchRepo(TEMPLATE_NAME, MAIN_SUBGRAPH_RINKEBY);
  const templateAddress = lastVersion.codeAddress;
  const templateArtifact = JSON.parse(lastVersion.artifact);

  const provider = ethers.getDefaultProvider('rinkeby');
  const wallet = ethers.Wallet.fromMnemonic(ARAGON_MNEMONIC);
  const signer = wallet.connect(provider);

  const templateContract = new ethers.Contract(
    templateAddress,
    templateArtifact.abi,
    signer,
  );

  const tx = await templateContract['newInstance()']();

  const orgAddress = await getOrgAddress(
    'DeployDao',
    templateContract,
    tx.hash,
  );

  console.log(`Organization Address: ${orgAddress}`);
}

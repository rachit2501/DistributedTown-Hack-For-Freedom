// boilderplate code

import {connect} from '@aragon/connect';
import {Voting} from '@aragon/connect-thegraph-voting';
import magic from './magic';

async function init() {
  const org = await connect('daohack.aragonid.eth', 'thegraph', {
    chainId: 4,
    readProvider: magic.rpcProvider,
  });
  const appAddress = await org.app();

  // app state
  const voting = new Voting(
    await appAddress.address,
    'https://api.thegraph.com/subgraphs/name/aragon/aragon-voting-rinkeby',
  );
  const votes = await voting.votes();

  // fetching data updates. Here list of apps.
  const handler = org.onApps((apps: Array<any>) => {
    console.log('Apps Updated', apps);
  });

  const handler2 = voting.onVotes((votes: Array<any>) => {
    console.log('Votes updated:', votes);
  });

  // handler.unsubscribe()
}

export default init;

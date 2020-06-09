import axios from 'axios';

const BASE_URL = 'https://gist.githubusercontent.com/bernalvinicius/9382816874cbd6f1345716637b254904/raw/dba9abd3ac4ebc10fbb0963c79f0394eff90c02e/opportunities.json';

export const getJobs = () => axios.get(BASE_URL);
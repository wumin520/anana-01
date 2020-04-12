import { configs } from '@/defaultSettings';

let baseUri = `${configs[process.env.API_ENV].API_SERVER}`;
if (process.env.API_ENV == 'production') {
  baseUri += '/cdk'
}
export default {
  uploadURL: `${baseUri}/v1/web/upload`,
  imgCodeUri: `${baseUri}/phrase?_version=`
};

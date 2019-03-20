const debug = process.env.NODE_ENV !== 'production';
const assetPrefix = debug ? '' : 'https://github.com/Gabester0/chainsaw-markdown';

module.exports = {
  assetPrefix
};
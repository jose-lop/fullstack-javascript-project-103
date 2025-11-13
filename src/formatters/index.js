import stylish from './stylish.js';
import flat from './flat.js';

export default (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(tree);
    case 'flat':
      return flat(tree);
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};

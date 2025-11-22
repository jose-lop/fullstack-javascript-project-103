import gendiff from '../src/gendiff.js';

export default (filepath1, filepath2, format = 'stylish') => {
  return gendiff(filepath1, filepath2, format);
};

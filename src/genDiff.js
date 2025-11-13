import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDiff from './buildDiff.js';
import format from './formatters/index.js';

const getData = (filepath) =>
  fs.readFileSync(path.resolve(filepath), 'utf-8');


const getExt = (filepath) => path.extname(filepath).slice(1);


const genDiff = (file1, file2, formatName = 'stylish') => {
  const data1 = parse(getData(file1), getExt(file1));
  const data2 = parse(getData(file2), getExt(file2));
  const diff = buildDiff(data1, data2);
  return format(diff, formatName);
};

export default genDiff;

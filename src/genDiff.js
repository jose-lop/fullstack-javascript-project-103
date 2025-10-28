/* eslint-env node */

import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  const data1 = JSON.parse(fs.readFileSync(absolutePath1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(absolutePath2, 'utf-8'));

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const diff = keys.map((key) => {
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;

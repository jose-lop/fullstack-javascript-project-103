/* eslint-env node */
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js'; // 👈 Importamos nuestro parser

const genDiff = (filepath1, filepath2) => {
  // Obtenemos las rutas absolutas
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  // 🔍 Leemos y analizamos los archivos con nuestro parser
  const data1 = parse(absolutePath1);
  const data2 = parse(absolutePath2);

  // Unimos las claves y las ordenamos alfabéticamente
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  // Comparamos las claves
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

  // Retornamos el resultado con formato elegante
  return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;

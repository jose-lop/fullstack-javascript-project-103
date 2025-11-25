// src/gendiff.js
import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import format from './formatters/index.js';

const getData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  const ext = path.extname(filepath).replace('.', ''); // ej: 'json' o 'yml'
  return parse(content, ext);
};

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const diff = buildTree(data1, data2);

  // --- CORRECTO: diff primero, luego el nombre del formato ---
  return format(diff, formatName);
};

export default gendiff;

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import gendiff from '../src/gendiff.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (name) => join(__dirname, '..', '__fixtures__', name);
const readFile = (name) =>
  fs.readFileSync(getFixturePath(name), 'utf-8');

test('gendiff stylish json nested', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('expected_stylish.txt').trim();

  const result = gendiff(file1, file2, 'stylish').trim();
  expect(result).toBe(expected);
});

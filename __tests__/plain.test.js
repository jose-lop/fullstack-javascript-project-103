import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import gendiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

const readFixture = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

test('Formato plain con JSON anidado', () => {
  const file1 = getFixturePath('file1-plain.json');
  const file2 = getFixturePath('file2-plain.json');
  const expected = readFixture('expected-plain.txt');

  const result = gendiff(file1, file2, 'plain');
  expect(result).toEqual(expected);
});

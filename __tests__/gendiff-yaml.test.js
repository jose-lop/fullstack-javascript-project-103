import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/genDiff.js';

// Configurar __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Funciones auxiliares para obtener rutas de los fixtures
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('Comparación de archivos YAML planos', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const expected = readFile('expected.txt').trim();

  const result = genDiff(filepath1, filepath2);
  expect(result).toBe(expected);
});

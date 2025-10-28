// Importamos utilidades de Node.js
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Importamos nuestra función principal
import genDiff from '../src/genDiff.js';

// Configuramos __dirname para que funcione en módulos ES (import/export)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Creamos una función auxiliar que obtiene la ruta completa del fixture
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

// Leemos el resultado esperado desde un archivo (por ahora lo escribiremos directo)
const expectedResult = `{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

// Nuestra prueba principal
test('Comparación de dos archivos JSON planos', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  const result = genDiff(file1, file2);

  expect(result.trim()).toBe(expectedResult.trim());
});

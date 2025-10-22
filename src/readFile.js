  import fs from 'fs';
import path from 'path';

// 🧩 Función que lee un archivo JSON y devuelve su contenido como objeto
const readFile = (filepath) => {
  // Convierte la ruta a absoluta (por si escribes una ruta relativa)
  const absolutePath = path.resolve(process.cwd(), filepath);

  // Lee el contenido del archivo como texto (UTF-8)
  const data = fs.readFileSync(absolutePath, 'utf-8');

  // Convierte el texto JSON a un objeto JavaScript
  return JSON.parse(data);
};

// Exporta la función para poder usarla en gendiff.js
export default readFile;

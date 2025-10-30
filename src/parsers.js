import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import path from 'path';

// Esta función recibe una ruta de archivo (filepath),
// detecta su extensión (.json, .yml, .yaml) y devuelve
// los datos convertidos a un objeto JavaScript.
const parse = (filepath) => {
  const ext = path.extname(filepath); // obtiene la extensión (.json / .yml / .yaml)
  const data = readFileSync(filepath, 'utf-8'); // lee el contenido del archivo

  switch (ext) {
    case '.json':
      return JSON.parse(data); // analiza JSON
    case '.yml':
    case '.yaml':
      return yaml.load(data); // analiza YAML usando js-yaml
    default:
      throw new Error(`Formato de archivo no soportado: ${ext}`);
  }
};

export default parse;

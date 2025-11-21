// src/formatters/json.js
// Exporta por defecto una función que recibe el AST del diff y devuelve una cadena JSON.

const buildPlainObject = (nodes) => {
  // Convierte el árbol de nodos en una estructura JS sencilla lista para serializar a JSON
  const result = {};

  nodes.forEach((node) => {
    const { key, type } = node;

    switch (type) {
      case 'nested':
        result[key] = buildPlainObject(node.children);
        break;

      case 'added':
        // valor nuevo (si tu generator usa "value" para added)
        result[key] = {
          type: 'added',
          value: node.value,
        };
        break;

      case 'removed':
        result[key] = {
          type: 'removed',
          value: node.value,
        };
        break;

      case 'unchanged':
        result[key] = {
          type: 'unchanged',
          value: node.value,
        };
        break;

      case 'changed':
        // espera oldValue/newValue o old/new según tu AST
        result[key] = {
          type: 'changed',
          oldValue: node.oldValue !== undefined ? node.oldValue : node.value,
          newValue: node.newValue !== undefined ? node.newValue : node.value,
        };
        break;

      default:
        // por seguridad, conserva el contenido crudo
        result[key] = {
          type: node.type,
          value: node.value,
        };
    }
  });

  return result;
};

export default (ast) => JSON.stringify(buildPlainObject(ast), null, 2);

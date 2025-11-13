const makeIndent = (depth, spacesCount = 4) =>
  ' '.repeat(depth * spacesCount - 2);

const makeBracketIndent = (depth, spacesCount = 4) =>
  ' '.repeat(depth * spacesCount - spacesCount);

const stringify = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value);
  }

  // si es un objeto plano (no nodo del árbol)
  const entries = Object.entries(value)
    .map(([key, val]) => {
      const indent = makeIndent(depth + 1);
      return `${indent}  ${key}: ${stringify(val, depth + 1)}`;
    });

  return `{\n${entries.join('\n')}\n${makeBracketIndent(depth + 1)}}`;
};

const stylish = (tree, depth = 1) => {
  const lines = tree.map((node) => {
    const indent = makeIndent(depth);

    switch (node.type) {
      case 'added':
        return `${indent}+ ${node.key}: ${stringify(node.value, depth)}`;

      case 'removed':
        return `${indent}- ${node.key}: ${stringify(node.value, depth)}`;

      case 'unchanged':
        return `${indent}  ${node.key}: ${stringify(node.value, depth)}`;

      case 'changed':
        return [
          `${indent}- ${node.key}: ${stringify(node.value1, depth)}`,
          `${indent}+ ${node.key}: ${stringify(node.value2, depth)}`,
        ].join('\n');

      case 'nested':
        return `${indent}  ${node.key}: {\n${stylish(node.children, depth + 1)}\n${makeBracketIndent(depth + 1)}}`;

      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });

  return lines.join('\n');
};

export default (tree) => `{\n${stylish(tree, 1)}\n}`;

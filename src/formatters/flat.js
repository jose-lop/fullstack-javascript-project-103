const stringify = (value) => {
  if (value === null) return 'null';
  if (typeof value === 'string') return `'${value}'`;
  if (typeof value === 'object') return '[complex value]';
  return String(value);
};

const iter = (tree, path) => {
  const lines = tree.flatMap((node) => {
    const { key, type, value, value1, value2, children } = node;
    const property = path ? `${path}.${key}` : key;

    switch (type) {
      case 'added':
        return `Property '${property}' was added with value: ${stringify(value)}`;
      case 'removed':
        return `Property '${property}' was removed`;
      case 'changed':
        return `Property '${property}' was updated. From ${stringify(value1)} to ${stringify(value2)}`;
      case 'unchanged':
        return [];
      case 'nested':
        return iter(children, property);
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return lines.join('\n');
};

export default (tree) => iter(tree, '');

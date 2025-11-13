const stringify = (value) => {
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'object') {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (tree) => {
  const iter = (nodes, path) => nodes
    .flatMap((node) => {
      const currentPath = [...path, node.key].join('.');

      switch (node.type) {
        case 'added':
          return `Property '${currentPath}' was added with value: ${stringify(node.value)}`;
        case 'removed':
          return `Property '${currentPath}' was removed`;
        case 'updated':
          return `Property '${currentPath}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`;
        case 'nested':
          return iter(node.children, [...path, node.key]);
        case 'unchanged':
          return [];
        default:
          throw new Error(`Unknown type: ${node.type}`);
      }
    })
    .join('\n');

  return iter(tree, []);
};

export default plain;

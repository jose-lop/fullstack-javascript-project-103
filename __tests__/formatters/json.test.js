// __tests__/formatters/json.test.js
import formatJson from '../../src/formatters/json.js';

describe('formatters/json', () => {
  test('serializa diff simple correctamente', () => {
    const ast = [
      { key: 'host', type: 'unchanged', value: 'hexlet.io' },
      { key: 'timeout', type: 'changed', oldValue: 50, newValue: 20 },
      { key: 'verbose', type: 'removed', value: true },
      { key: 'follow', type: 'added', value: false },
      {
        key: 'group',
        type: 'nested',
        children: [
          { key: 'name', type: 'unchanged', value: 'devs' },
          { key: 'members', type: 'added', value: ['anna', 'ivan'] },
        ],
      },
    ];

    const output = formatJson(ast);
    const parsed = JSON.parse(output);

    expect(parsed.host).toEqual({ type: 'unchanged', value: 'hexlet.io' });
    expect(parsed.timeout).toEqual({ type: 'changed', oldValue: 50, newValue: 20 });
    expect(parsed.verbose).toEqual({ type: 'removed', value: true });
    expect(parsed.follow).toEqual({ type: 'added', value: false });
    expect(parsed.group).toEqual({
      name: { type: 'unchanged', value: 'devs' },
      members: { type: 'added', value: ['anna', 'ivan'] },
    });
  });

  test('output JSON is valid', () => {
    const ast = [{ key: 'k', type: 'added', value: 1 }];
    expect(() => JSON.parse(formatJson(ast))).not.toThrow();
  });
});

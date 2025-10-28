#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from './src/genDiff.js'; // 👈 importamos la función

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2); // 🧩 aquí la usamos
    console.log(diff);
  });

program.parse();

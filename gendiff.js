#!/usr/bin/env node

import { Command } from 'commander';
import readFile from './src/readFile.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const data1 = readFile(filepath1);
    const data2 = readFile(filepath2);

    console.log('📁 Contenido del primer archivo:', data1);
    console.log('📁 Contenido del segundo archivo:', data2);
  });

program.parse();
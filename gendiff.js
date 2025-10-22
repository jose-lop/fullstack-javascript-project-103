#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    // Por ahora no hacemos nada, solo mostramos los datos recibidos
    console.log('File 1:', filepath1);
    console.log('File 2:', filepath2);
    console.log('Format:', options.format);
  });

program.parse();
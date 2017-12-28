/**
 * @author panezhang
 * @date 28/12/2017-19:19
 * @file pcli
 */

import program from 'commander';
import Package from '../package.json';

program.version(Package.version);

program
    .command('hello')
    .description('Hello World!')
    .action(() => console.log('Hello World! Cli! You got it!'));

program.parse(process.argv);

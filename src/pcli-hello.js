/**
 * @author panezhang
 * @date 29/12/2017-11:40
 * @file pcli-test
 */

import program from 'commander';
import chalk from 'chalk';

program
    .option('-n, --nickname [nickname]', 'set nickname')
    .parse(process.argv);

console.log(`${chalk.yellow('Hello')} ${chalk.cyan(program.nickname)}!`);

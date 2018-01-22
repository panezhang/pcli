/**
 * @author panezhang
 * @date 29/12/2017-11:40
 * @file pcli-test
 */

import commander from 'commander';
import chalk from 'chalk';

commander
    .option('-n, --nickname [nickname]', 'set nickname')
    .parse(process.argv);

console.log(`${chalk.yellow('Hello')} ${chalk.cyan(commander.nickname)}!`);

/**
 * @author panezhang
 * @date 28/12/2017-19:19
 * @file pcli
 */

import commander from 'commander';
import {version} from '../package.json';

commander
    .version(version)
    .command('hello', 'Hello World!')
    .parse(process.argv);

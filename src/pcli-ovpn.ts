/**
 * @author panezhang
 * @date 2018/7/15-18:21
 * @file pcli-ovpn
 */

import {resolve} from 'path';
import {readFileSync} from 'fs';

import commander from 'commander';

commander
    .option('-f, --file [file]', 'src file name')
    .parse(process.argv);

const dir = process.cwd();
const filePath = resolve(dir, commander.file);

const content = readFileSync(filePath).toString();
const keys = [
    'ca',
    'cert',
    'key'
];

function handleKey(text, key) {
    const regExp = new RegExp(`${key}\\s+(\\S+)`);
    const match = text.match(regExp);
    if (!match) return;

    const [ref, filename] = match;
    const inlineContent = `<${key}>\n${readFileSync(resolve(dir, filename)).toString()}\n</${key}>`;
    return text.replace(ref, inlineContent);
}

const targetContent = keys.reduce((text, key) => handleKey(text, key), content);
console.log(targetContent);

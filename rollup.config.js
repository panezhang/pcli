/**
 * @author panezhang
 * @date 29/12/2017-14:37
 * @file rollup.config
 */

import fs from 'fs';
import path from 'path';

import json from 'rollup-plugin-json';

const resolvePath = (...args) => path.resolve(__dirname, ...args);

const inputs = fs.readdirSync(resolvePath('./src'));

export default inputs.map(filename => ({
    input: `src/${filename}`,

    output: {
        file: `bin/${path.basename(filename, '.js')}`,
        format: 'cjs',
        banner: '#!/usr/bin/env node'
    },

    plugins: [json()]
}));

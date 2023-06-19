import {writeFile} from 'fs/promises';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fresh.txt');
    try {
        await writeFile(file, 'I am fresh and young', {flag: "wx"});
    } catch (err) {
        throw new Error("FS operation failed: " + err.message);
    }
};

await create();

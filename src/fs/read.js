import fs from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const read = async () => {
    const pathToFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    try {
        console.log(await fs.readFile(pathToFile, { encoding: 'utf8' }));
    } catch (e) {
        throw new Error("FS operation failed: " + e.message);
    }
};

await read();

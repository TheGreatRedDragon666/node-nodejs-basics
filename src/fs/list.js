import fs from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const list = async () => {
    const pathToDir = join(dirname(fileURLToPath(import.meta.url)), 'files');
    try {
        console.log(await fs.readdir(pathToDir));
    } catch (e) {
        throw new Error("FS operation failed: " + e.message);
    }
};

await list();

import fs from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const rename = async () => {
    const pathToDir = join(dirname(fileURLToPath(import.meta.url)), 'files');
    try {
        await fs.rename(join(pathToDir, 'wrongFilename.txt'), join(pathToDir, 'properFilename.md'));
    } catch (e) {
        throw new Error("FS operation failed: " + e.message);
    }
};

await rename();

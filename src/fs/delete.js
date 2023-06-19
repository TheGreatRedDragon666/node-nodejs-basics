import fs from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from "url";

const remove = async () => {
    const pathToFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRemove.txt');
    try {
        await fs.unlink(pathToFile);
    } catch (e) {
        throw new Error("FS operation failed: " + e.message);
    }
};

await remove();

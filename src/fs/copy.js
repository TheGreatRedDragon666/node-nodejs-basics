import fs from 'fs/promises';
import {dirname, join} from "path";
import {fileURLToPath} from "url";

const copy = async () => {
    const dir = dirname(fileURLToPath(import.meta.url));
    const filesPath = join(dir, 'files');
    const filesCopyPath = join(dir, 'files_copy');

    try {
        await fs.mkdir(filesCopyPath);
        const files = await fs.readdir(filesPath);
        for (const file of files) {
            await fs.copyFile(join(filesPath, file), join(filesCopyPath, file));
        }
    } catch (e) {
        throw new Error("FS operation failed: " + e.message);
    }
}

await copy();

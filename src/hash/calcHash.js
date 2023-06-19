import fs from 'fs/promises';
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import crypto from 'crypto';

const calculateHash = async () => {
    const pathToFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCalculateHashFor.txt');
    try {
        const data = await fs.readFile(pathToFile);
        const hash = crypto.createHash('sha256').update(data).digest('hex');
        console.log(hash);
    } catch (e) {
        console.log(e.message);
    }
};

await calculateHash();

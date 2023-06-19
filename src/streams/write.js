import {createWriteStream} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
const { stdin} = process;

const write = async () => {
    const pathToFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt');
    try {
        const writeStream = createWriteStream(pathToFile, 'utf-8');
        stdin.on('data', chunk => writeStream.write(chunk));
    } catch (e) {
        console.log(e.message);
    }
};

await write();

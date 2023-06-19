import {createReadStream} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
const {stdout} = process;

const read = async () => {
    const pathToFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    try {
        const readStream = createReadStream(pathToFile, 'utf-8');
        readStream.on('data', chunk => stdout.write(chunk));
    } catch (e) {
        console.log(e.message);
    }
};

await read();

import {createWriteStream, createReadStream} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {pipeline} from "stream";
import {createUnzip} from "zlib"

const decompress = async () => {
    const pathToDir = join(dirname(fileURLToPath(import.meta.url)), 'files');
    const gzip = createUnzip();
    const source = createReadStream(join(pathToDir,'archive.gz'));
    const destination = createWriteStream(join(pathToDir, 'fileToCompress.txt'));

    pipeline(source, gzip, destination, (err) => console.log(err));
};

await decompress();

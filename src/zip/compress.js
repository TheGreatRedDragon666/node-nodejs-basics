import {createWriteStream, createReadStream} from "fs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {pipeline} from "stream";
import {createGzip} from "zlib"

const compress = async () => {
    const pathToDir = join(dirname(fileURLToPath(import.meta.url)), 'files');
    const gzip = createGzip();
    const source = createReadStream(join(pathToDir,'fileToCompress.txt'));
    const destination = createWriteStream(join(pathToDir, 'archive.gz'));

    pipeline(source, gzip, destination, (err) => console.log(err));
}

await compress();

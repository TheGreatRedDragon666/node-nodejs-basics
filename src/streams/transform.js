import {Transform, pipeline} from 'stream';
const {stdin, stdout} = process;

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding = "utf-8", callback) {
            callback(null, chunk.toString().split('').reverse().join('') + '\n');
        }
    })
    pipeline(stdin, transform, stdout, (e) => console.log(e));
};

await transform();

import {cpus} from 'os';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import {Worker} from 'worker_threads';

const performCalculations = async () => {
    const pathToWorker = join(dirname(fileURLToPath(import.meta.url)), 'worker.js');
    const numOfCores = cpus().length;
    const startNum = 10;
    const workers = [];

    for( let i = 0; i < numOfCores; i++) {
        workers.push(new Promise(resolve => {
            const worker = new Worker(pathToWorker, {workerData: startNum + i});
            worker.on('message', message => resolve({status: 'resolved', data: message}));
            worker.on('error', () => resolve({status: 'error', data: null}));
        }))
    }
    console.log(await Promise.all(workers));
};

await performCalculations();

import {fork} from 'child_process';
import {dirname, join} from "path";
import {fileURLToPath} from "url";

const spawnChildProcess = async (args) => {
    const pathToScript = join(dirname(fileURLToPath(import.meta.url)), 'files', 'script.js');
    fork(pathToScript, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  [1, 2, 3] );

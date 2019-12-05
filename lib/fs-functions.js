const fs = require('fs').promises;

const mkdirp = path => fs.mkdir(path, { recursive: true });

const writeJSON = (path, obj) => fs.writeFile(path, JSON.stringify(obj))
    .then(() => obj);

const readJSON = path => fs.readFile(path)
    .then(contents => JSON.parse(contents));



module.exports = {
    mkdirp,
    writeJSON,
    readJSON
};

// readJSON
// readDirectoryJSON
// updateJSON
// deleteFile

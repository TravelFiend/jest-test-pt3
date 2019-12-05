const fs = require('fs').promises;

const mkdirp = path => {
    return fs.mkdir(path, { recursive: true });
};

const writeJSON = (path, obj) => {
    return fs.writeFile(path, JSON.stringify(obj));
};

module.exports = {
    mkdirp,
    writeJSON
};

// readJSON
// readDirectoryJSON
// updateJSON
// deleteFile

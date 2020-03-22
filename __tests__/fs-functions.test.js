const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON } = require('../lib/fs-functions');

describe('fs functions', () => {
    // describe('mkdirp', () => {
    //     it('should create directory and all parent directories', () => {
    //         return mkdirp('./this/is/it')
    //         .then()
    //         expect('yourMom');
    //     });
    // });
    beforeAll(() => {
        return mkdirp('./it/got');
    });
            
    describe('write JSON', () => {
        it('should turn an object to JSON and write to a file', () => {
            return writeJSON('./it/got/thing', {
                bald: true,
                eyes: 2
            })
                .then(() => {
                    return fs.readFile('./it/got/thing', 'utf8');
                })
                .then(contents => {
                    expect(JSON.parse(contents)).toEqual(({
                        bald: true,
                        eyes: 2
                    }
                    ));
                });
        });
    });

    describe('read JSON', () => {
        it('should grab a JSON object and parse it', () => {
            return readJSON('./it/got/thing')
                .then(contents => {
                    expect(contents).toEqual({
                        bald: true,
                        eyes: 2
                    });
                });
        });
    });
});

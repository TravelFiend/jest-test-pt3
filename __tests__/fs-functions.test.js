const { mkdirp } = require('../lib/fs-functions');

describe('fs functions', () => {
    describe('mkdirp', () => {
        it('should create directory and all parent directories', () => {
            return mkdirp('./this/is/it')
            .then()
            expect('yourMom');
        });
    });
});

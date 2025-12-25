// fileImport.test.js
const fs = require('fs');
const { readFileContent } = require('./fileImport');

test('readFileContent reads a file correctly', done => {
    const tempFile = './temp.txt';
    fs.writeFileSync(tempFile, 'Hello Jest');

    readFileContent(tempFile, (err, data) => {
        expect(err).toBeNull();
        expect(data).toBe('Hello Jest');
        fs.unlinkSync(tempFile); // حذف الملف بعد الاختبار
        done();
    });
});

test('readFileContent returns error if no file is provided', done => {
    readFileContent(null, (err, data) => {
        expect(err).not.toBeNull();
        expect(err.message).toBe('Please provide a file name as a parameter.');
        done();
    });
});

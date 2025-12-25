// fileImport.js
const fs = require('fs');

function readFileContent(fileName, callback) {
    if (!fileName) {
        callback(new Error("Please provide a file name as a parameter."));
        return;
    }

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data);
    });
}

// إذا تم تشغيل الملف مباشرة من Node
if (require.main === module) {
    const fileName = process.argv[2];
    readFileContent(fileName, (err, data) => {
        if (err) {
            console.error(err.message);
            process.exit(1);
        }
        console.log(data);
    });
}

module.exports = { readFileContent };

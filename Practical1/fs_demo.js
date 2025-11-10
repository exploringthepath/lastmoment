const fs = require('fs');

fs.writeFile('student.txt', 'Welcome to Node.js File System Module', (err) => {
    if (err) throw err;
    console.log('File created and text written successfully.');

    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Contents:');
        console.log(data);

        fs.unlink('student.txt', (err) => {
            if (err) throw err;
            console.log('File deleted successfully.');
        });
    });
});

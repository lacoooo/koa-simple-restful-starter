const shell = require('shelljs')

const a = shell.exec('npm run tsc', { async: true })
a.stdout.on('data', (data) => {
    shell.exec('npm run nodemon')
});
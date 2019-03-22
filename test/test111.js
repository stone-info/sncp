const execa = require('execa')
// execa('ls', ['-al']).stdout.pipe(process.stdout)

const path = require('path')

// console.log(path.parse('./bin'));

// execa.shell(`eval(if [ -d "./bin" ]; then; echo "./bin is a directory "; elif [ -f "./bin" ]; then; echo "./bin is a file" fi)`).then((stdout) => {
//   console.log(stdout);
// }).catch((err) => {
//   console.log(`\x1b[41m${err}\x1b[0m`)
// })

// filename="/home"
//
// if [ -d "$filename" ]; then
//
//   echo "$filename is a directory "
//
// elif [ -f "$filename" ]; then
//
//   echo "$filename is a file"
//
// fi

// let filepath = './bin/sncp'
//
// execa.shell(`eval "if [ -d '${filepath}' ]; then echo 0; elif [ -f '${filepath}' ]; then echo 1; else echo -1; fi"`).then(({ stdout }) => {
//   console.log(stdout)
// }).catch((err) => {
//   console.log(`\x1b[41m${err}\x1b[0m`)
// })


// console.log(Boolean('true'));
// console.log('【test111.js:36】-:', Object.prototype.toString.call(Boolean('true')));

let output = './output/'
if (output.endsWith('/')) {output = output.substring(0, output.length - 1)}

console.log(output);


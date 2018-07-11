/*
1. Randomiser: https://www.browserling.com/tools/random-lines
2. Numbering - https://www.gillmeister-software.com/online-tools/text/numbering-lines.aspx
*/

/*
%s/\'/\\'/g
%s/^/'/g
%s/$/',/g
*/

var fs = require('fs');

var list = [];

list.map(l1 => {
  console.log('Renaming ' + l1.substr(6) + ' to ' + l1);
  fs.renameSync('./' + l1.substr(6), './' + l1);
  console.log('---');
});
const fs = require('fs');
const readline = require('readline');

const files = fs.readdirSync('data');
const fonts = {};
for (let file of files) {
  console.log(`Reading ${file}`);
  const content = fs.readFileSync('data/' + file);
  const lines = content.toString().split(/\r?\n/);
  const tables = {};
  let tableName, table;
  for (let line of lines) {
    if (!line)
      continue;
    let match = line.match(/'(.{4})' Table/);
    if (match) {
      if (tableName)
        tables[tableName] = table;
      tableName = match[1];
      table = {};
      continue;
    }
    if (!tableName)
      continue;
    match = line.match('  ([^:]*):\s*(.*)');
    if (match) {
      table[match[1]] = match[2].trim();
      continue;
    }
  }
  if (tableName)
    tables[tableName] = table;
  fonts[file] = tables;
}
fs.writeFileSync('fonts.json', JSON.stringify(fonts, null, 2));

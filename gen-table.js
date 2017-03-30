const fonts = require('./fonts.json');

for (let name in fonts) {
  const font = fonts[name];
  const os2 = font['OS/2'];
  if (os2) {
    console.log(`${name},${os2.usWinAscent},${os2.usWinDescent},${os2.sTypoAscender},${os2.sTypoDescender}`);
  }
}

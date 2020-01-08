import fs from 'fs';
import XXH from 'xxhashjs';

const H = XXH.h32(0xabcd); // seed = 0xABCD

export const formatName = function (name: string, useHash: boolean = true) {
  if (!name) {
    name = '';
  }

  const _name = name.split('/').reverse()[0].match(/^[^.]*/)[0]

  if (!useHash)
    return _name;

  const hash = H.update(name).digest().toString(16)

  return `${_name}.${hash}`;
};

export const checkFileExist = function (file: string) {
  if (!fs.existsSync(file)) {
    throw new Error('File not found: ' + file);
  }
};

const codeblock = [...document.getElementsByTagName('codeblock')];

const keywords = ['const', 'let', 'var', 'function', 'class'];
const controlwords = ['if', 'else', 'elseif', 'switch', 'case', 'for', 'do'];

codeblock.map((code) => {
  let lines = code.innerHTML.split('\n');
  let newCode = [];

  const tabcount = lines[1].match(/([\s]+)/g).length;

  for(let line of lines) {
    for(let keyword of keywords) {
      line = line.replace(`${keyword} `, `<span class='keyword'>${keyword}</span> `);
    }
    for(let controlword of controlwords) {
      line = line.replace(`${controlword}`, `<span class='controlword'>${controlword}</span>`);
    }
    newCode.push(`${line}\n`);
  }

  code.innerHTML = newCode.join('');
})


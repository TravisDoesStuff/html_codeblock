let codeblock = [...document.getElementsByTagName('codeblock')];

let keywords = ['let', 'var', 'function'];

codeblock.map((code) => {
  code.innerText = code.innerHTML+'\n';
})


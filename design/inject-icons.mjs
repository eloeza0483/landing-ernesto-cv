// Sustituye <i data-si="react" data-size="20"></i> por el SVG inline de Simple Icons.
// Los .dc.html del canvas no tienen salida a red: todo icono va incrustado.
import { readFileSync, writeFileSync } from 'node:fs';

const icons = JSON.parse(readFileSync(new URL('./icons.json', import.meta.url), 'utf8'));
const files = process.argv.slice(2);
if (!files.length) { console.error('uso: node inject-icons.mjs <archivo.dc.html>...'); process.exit(1); }

let missing = new Set();
for (const file of files) {
  const src = readFileSync(file, 'utf8');
  let count = 0;
  const out = src.replace(/<i data-si="([a-z0-9]+)"(?: data-size="(\d+)")?><\/i>/g, (m, name, size) => {
    const ic = icons[name];
    if (!ic) { missing.add(name); return m; }
    const s = size || '20';
    count++;
    return `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor" role="img" aria-label="${ic.t}"><path d="${ic.p}"/></svg>`;
  });
  writeFileSync(file, out);
  console.log(`${file}: ${count} iconos incrustados`);
}
if (missing.size) { console.error('SIN ICONO: ' + [...missing].join(', ')); process.exit(1); }

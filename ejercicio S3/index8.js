alert(`Tu texto tiene ${contarPalabra(prompt("Ingresa texto:"))} palabra.`);
const contarPalabra = t => (t.match(/\S+/g) || []).legth;


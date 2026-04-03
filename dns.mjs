// versi promise
import dns from "dns/promises";

const address = await dns.lookup("fikriportofolio.vercel.app");

console.info(address.address);
console.info(address.family);
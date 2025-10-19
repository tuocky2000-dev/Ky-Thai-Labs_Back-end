const { createReadStream } = require("fs");
const csv = require("csvtojson");
// const { filterByCountry } = require("./filter-by-country.js");
// const { sumProfit } = require("./sum-profit.js");
const { createGunzip } = require("zlib");
const { Transform } = require("stream");

const csvParser = csv();
const gunzip = createGunzip();

function filterByCountry(country) {
  return new Transform({
    transform: (chunk, _, done) => {
      const row = JSON.parse(chunk);
      if (row.country === country) {
        done(null, chunk);
      } else {
        done(null);
      }
    },
  });
}

createReadStream("data.csv.gz")
  .pipe(gunzip)
  .pipe(csvParser)
  .pipe(filterByCountry("Italy"))
  .on("data", (chunk) => console.log(JSON.parse(chunk)));
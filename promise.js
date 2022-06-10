const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (condition) => {
  let a = await promiseTheaterIXX();
  let b = await promiseTheaterVGC();
  let combine = a.concat(b);
  let count = 0;
  combine.map((a) => a.hasil === condition && (count += 1));
  return count;
};
module.exports = {
  promiseOutput,
};

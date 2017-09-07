/**
 * equalArrays function checks if 2 arrays have the same primitive content (doesn't work with arrays containing arrays or objects). 
 * Since if 2 arrays have the same content, a sort function will make them identical in order as well, 
 * this function doesn't consider different orders as differences.
 */

const equalLength = xs => ys => xs.length === ys.length;

const equalContent = xs => ys => xs.every(x => ys.includes(x));

const equalArrays = xs => ys => equalLength(xs)(ys) && equalContent(xs)(ys);

module.exports = equalArrays;

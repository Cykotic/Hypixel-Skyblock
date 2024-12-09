const readline = require('readline');

/**
 * Adjusts the given x, y, z values with predefined operations.
 *   - Add 61 to x
 *   - Subtract 44 from y
 *   - Add 18 to z
 *
 * @param {number} x - Initial x value
 * @param {number} y - Initial y value
 * @param {number} z - Initial z value
 * @returns {{x: number, y: number, z: number}} Updated values of x, y, z
 */
function modifyValues(x, y, z) {
  return {
    x: x + 61,
    y: y - 44,
    z: z + 18
  };
}

/**
 * Prompts the user for input and processes the x, y, z modifications.
 */
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter x, y, z values separated by spaces: ', (input) => {
    try {
      const [x, y, z] = input.split(' ').map(Number);
      if ([x, y, z].some(isNaN)) {
        throw new Error('Invalid input. Please enter three numeric values separated by spaces.');
      }

      const updatedValues = modifyValues(x, y, z);
      console.log(`\nUpdated values:\n  x = ${updatedValues.x}\n  y = ${updatedValues.y}\n  z = ${updatedValues.z}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      rl.close();
    }
  });
}

// Execute the main function
main();

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

// Create a promise that goes through a given row and resolves the row if there is a negative found
function negsPerRow(rowId: number): Promise<number[]> {
    return new Promise((resolve, reject) => {
        if (array2D_3.length > rowId) {
                const hasNegative = array2D_3[rowId].some(num => num < 0);
                resolve(hasNegative ? array2D_3[rowId] : []);
        }
        else {
            reject('Row number must be valid');
        }
    });
}

// Concurrently call negsPerRow to efficiently find all rows with negative values then print them
Promise.all([negsPerRow(0), negsPerRow(1), negsPerRow(2)]).then((results: number[][]) => {
    let rows = []
    for (const row of results) {
        if (row.length > 0) {
            rows.push(row)
        }
    }
    console.log(rows);
}).catch((error) => {
    console.error(`Failed to calculate: ${error}`);
});
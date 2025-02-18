const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Goes through every row and asynchronously finds the sum for that row
async function sumRow(row: number): Promise<number> {
    if (row >= array2D_1.length) {
        throw new Error('Must provide a valid row');
    }
    return array2D_1[row].reduce((sum, num) => sum + num, 0);
}

// Calculate the total sum by calling sumRow on each row of the array
async function getTotalSum() {
    try {
        const firstRow = await sumRow(0);
        const secondRow = await sumRow(1);
        const thirdRow = await sumRow(2);
        console.log(firstRow + secondRow + thirdRow)
        return firstRow + secondRow + thirdRow;
    }
    catch(error) {
        console.log(error);
    }
}

getTotalSum();
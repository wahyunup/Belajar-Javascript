const studentRow = [
    ['Olivia', 'Wahyu', 'Tessa'],
    ['Steven', 'Gilang', 'Fikri'],
    ['Gendis', 'Fitri', 'Fakih'],
];

for (let i = 0; i < studentRow.length; i++){
    const row = studentRow[i];
    console.log(`Seat Row #${i + 1}`);
for (let j = 0; j < row.length; j++)
    console.log(` ${row[j]}`);
}
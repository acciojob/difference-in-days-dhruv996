function dateDiffInDays(date1, date2) {
  const utcDate1 = Date.UTC(
    parseInt(date1.substring(0, 4)),
    parseInt(date1.substring(5, 7)) - 1,
    parseInt(date1.substring(8))
  );
  const utcDate2 = Date.UTC(
    parseInt(date2.substring(0, 4)),
    parseInt(date2.substring(5, 7)) - 1,
    parseInt(date2.substring(8))
  );

  const diffInMilliseconds = utcDate2 - utcDate1;
  const diffInDays = diffInMilliseconds / (24 * 60 * 60 * 1000);

  return diffInDays;
}

function calculateDateDifference() {
  const date1 = document.getElementById('date1').value;
  const date2 = document.getElementById('date2').value;

  const result = dateDiffInDays(date1, date2);

  document.getElementById('result').innerText = `The difference in days is: ${result}`;
}


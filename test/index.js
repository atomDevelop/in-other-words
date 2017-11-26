var inOtherWords = require("../index")

var testResult = [
  {date: "2018-03-01", timeSpent: 60, score: 7, student: "Kim"},
  {date: "2018-03-01", timeSpent: 67, score: 6, student: "Jung"},
  {date: "2018-03-01", timeSpent: 63, score: 7, student: "Choi"},
  {date: "2018-03-01", timeSpent: 65, score: 7, student: "Shin"},
  {date: "2018-03-01", timeSpent: 62, score: 6, student: "Park"},
  {date: "2018-03-01", timeSpent: 64, score: 7, student: "Kang"},
  {date: "2018-03-01", timeSpent: 74, score: 6, student: "Lee"},
  {date: "2018-03-08", timeSpent: 63, score: 7, student: "Kang"},
  {date: "2018-03-08", timeSpent: 64, score: 8, student: "Lee"},
  {date: "2018-03-08", timeSpent: 61, score: 6, student: "Choi"},
  {date: "2018-03-08", timeSpent: 62, score: 8, student: "Kim"},
  {date: "2018-03-08", timeSpent: 61, score: 7, student: "Park"},
  {date: "2018-03-08", timeSpent: 60, score: 7, student: "Shin"},
  {date: "2018-03-08", timeSpent: 62, score: 8, student: "Jung"},
  {date: "2018-03-15", timeSpent: 59, score: 3, student: "Shin"},
  {date: "2018-03-15", timeSpent: 61, score: 8, student: "Jung"},
  {date: "2018-03-15", timeSpent: 59, score: 6, student: "Lee"},
  {date: "2018-03-15", timeSpent: 65, score: 6, student: "Choi"},
  {date: "2018-03-15", timeSpent: 62, score: 7, student: "Kang"},
  {date: "2018-03-15", timeSpent: 64, score: 9, student: "Park"},
  {date: "2018-03-22", timeSpent: 60, score: 6, student: "Choi"},
  {date: "2018-03-22", timeSpent: 57, score: 6, student: "Lee"},
  {date: "2018-03-22", timeSpent: 55, score: 9, student: "Park"},
  {date: "2018-03-22", timeSpent: 57, score: 7, student: "Shin"},
  {date: "2018-03-22", timeSpent: 59, score: 8, student: "Kang"},
  {date: "2018-03-22", timeSpent: 57, score: 8, student: "Jung"},
  {date: "2018-03-22", timeSpent: 57, score: 7, student: "Kim"}
]

var result1 = inOtherWords(testResult, "date", {
  avgTime: {key: "timeSpent", method: "average"},
  sumScore: {key: "score", method:"sum"},
  students: {key: "student", method:"list"}
})
var result2 = inOtherWords(testResult, "student", {
  sumTime: {key: "timeSpent", method: "sum"},
  avgScore: {key: "score", method: "average"}
})
console.log(result1)
console.log(result2)

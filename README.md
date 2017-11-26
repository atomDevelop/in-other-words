# In-other-words

In-other-words is a simple tool to reduce or reorganize JSON data. This version is for commonJS.
Let’s suppose you have results of tests and they are stored as follows.
```sh
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
```
This format is good for CRUD, but it is hard to answer following questions.
- How much time did they spend on average on 2018-03-15?
- How much score did Choi get on 2018-03-08?

You might want data like
```sh
var resultGroupByDate = {
  '2018-03-01':{
    avgTime: 65,
    sumScore: 46,
    students: [ 'Kim', 'Jung', 'Choi', 'Shin', 'Park', 'Kang', 'Lee' ],
    length: 7
  },
  '2018-03-08':{
    avgTime: 61.857142857142854,
    sumScore: 51,
    students: [ 'Kang', 'Lee', 'Choi', 'Kim', 'Park', 'Shin', 'Jung' ],
    length: 7
  },
  '2018-03-15':{
    avgTime: 61.666666666666664,
    sumScore: 39,
    students: [ 'Shin', 'Jung', 'Lee', 'Choi', 'Kang', 'Park' ],
    length: 6
  },
  '2018-03-22':{
    avgTime: 57.42857142857143,
    sumScore: 51,
    students: [ 'Choi', 'Lee', 'Park', 'Shin', 'Kang', 'Jung', 'Kim' ],
    length: 7
  }
}
```
or
```sh
var resultGroupByStudent = {
  Kim: { sumTime: 179, avgScore: 7.333333333333333, length: 3 },
  Jung: { sumTime: 247, avgScore: 7.5, length: 4 },
  Choi: { sumTime: 249, avgScore: 6.25, length: 4 },
  Shin: { sumTime: 241, avgScore: 6, length: 4 },
  Park: { sumTime: 242, avgScore: 7.75, length: 4 },
  Kang: { sumTime: 248, avgScore: 7.25, length: 4 },
  Lee: { sumTime: 254, avgScore: 6.5, length: 4 }
}
```
In-other-words help you transform your data in an easy way.

### Installation

```sh
npm install in-other-words
```

### How to use
```sh
inOtherWords(dataSet, groupBy, format)
```
The above examples
```sh
var result1 = inOtherWords(testResult, "date", {
  avgTime: {key: "timeSpent", method: "average"},
  sumScore: {key: "score", method:"sum"},
  students: {key: "student", method:"list"}
})
var result2 = inOtherWords(testResult, "student", {
  sumTime: {key: "timeSpent", method: "sum"},
  avgScore: {key: "score", method: "average"}
})
```

### Method options
- sum
- average
- list

### License

MIT

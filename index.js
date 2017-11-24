function inOtherWords(dataSet, unique, format) {
  q = []
  for (const l in format) {
    q.push({outputKey: l, inputKey: format[l].target, sum: 0, method: format[l].method, list: []})
  }
  var output = []
  var sumNum
  function update(){
    var temp = {}
    temp[unique] = dataSet[i-1][unique]
    temp["count"] = sumNum
    for (const j in q) {
      if(q[j].method === "list") {
        temp[q[j].outputKey] = q[j].list
      }else{
        let dvd = (q[j].method === "average") ? sumNum : 1
        temp[q[j].outputKey] = q[j].sum/dvd
      }
    }
    output.push(temp)
  }
  for (var i = 0; i < dataSet.length; i++) {
    if (i == 0 || dataSet[i][unique] != dataSet[i-1][unique]) {
      if (i > 0) {
        update()
      }
      sumNum = 1
      for (const k in q) {
        if (q[k].method === "list") {
          q[k].list = [dataSet[i][q[k].inputKey]]
        } else {
          q[k].sum = dataSet[i][q[k].inputKey]
        }
      }
    } else {
      sumNum++
      for (const k in q) {
        if (q[k].method === "list") {
          q[k].list.push(dataSet[i][q[k].inputKey])
        } else {
          q[k].sum += dataSet[i][q[k].inputKey]
        }
      }
    }
  }
  update()
  return output
}

module.exports = inOtherWords

function inOtherWords(dataSet, groupBy, format) {
  var q = []
  var output = {}
  for (const l in format) {
    if (format[l].method != "average" && format[l].method != "sum" && format[l].method != "list"){
      console.error("method error: " + format[l].method)
      return {}
    }
    q.push({outputKey: l, inputKey: format[l].key, method: format[l].method})
  }
  function create(row) {
    output[row[groupBy]] = {}
    for (const j in q) {
      if (!row.hasOwnProperty(q[j].inputKey)){
        return false
      }
      if (q[j].method === "list"){
        output[row[groupBy]][q[j].outputKey] = [row[q[j].inputKey]]
      }else if(q[j].method === "average" || q[j].method === "sum") {
        output[row[groupBy]][q[j].outputKey] = row[q[j].inputKey]
      }
    }
    output[row[groupBy]].length = 1
    return true
  }
  function update(row) {
    for (const j in q) {
      if (!row.hasOwnProperty(q[j].inputKey)){
        return false
      }
      if (q[j].method === "list"){
        output[row[groupBy]][q[j].outputKey].push(row[q[j].inputKey])
      }else if(q[j].method === "sum") {
        output[row[groupBy]][q[j].outputKey] += row[q[j].inputKey]
      }else if(q[j].method === "average") {
        output[row[groupBy]][q[j].outputKey] = (output[row[groupBy]][q[j].outputKey]*output[row[groupBy]].length+row[q[j].inputKey])/(output[row[groupBy]].length+1)
      }
    }
    output[row[groupBy]].length += 1
    return true
  }
  for (const i in dataSet) {
    if(!dataSet[i].hasOwnProperty(groupBy)){
      console.error("groupBy value error: " + groupBy)
      return {}
    }
    if(output.hasOwnProperty(dataSet[i][groupBy])){
      if(!update(dataSet[i])){
        console.error("inputKey error")
        return {}
      }
    }else{
      if(!create(dataSet[i])){
        console.error("inputKey error")
        return {}
      }
    }
  }
  return output
}

module.exports = inOtherWords

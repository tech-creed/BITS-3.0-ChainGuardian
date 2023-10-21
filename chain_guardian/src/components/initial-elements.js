const chain = localStorage.getItem('chain')
const address = localStorage.getItem('address')

var tmpNodes = null
var tmpEdges = null

console.log(localStorage)
await fetch(`/graph/graphAddr/${chain}/${address}`)
  .then((response) => response.json())
  .then((data) => {
  	console.log(data);
      tmpNodes = data.nodes
      tmpEdges = data.edges
  })

console.log(tmpNodes)

export const nodes = tmpNodes

export const edges = tmpEdges
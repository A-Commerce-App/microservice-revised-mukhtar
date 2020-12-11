const generateEntries = (qty) => {

  return () => {
    const initalDate = new Date().valueOf()
    // console.log('initial timestamp: ', initalDate)
    let arr = []

    for (let i = 0; i < qty; i++) {
      arr.push({
        id: i
      })
    }
    const laterDate = new Date().valueOf()
    // console.log('post-10mil data generation timestamp: ', laterDate)


    // console.log(arr.length)
    const milliseconds = new Date(laterDate - initalDate).getMilliseconds()
    // console.log('milliseconds the operation took: ', milliseconds)

    return milliseconds
  }
}

const averageAcrossOperations = (operations) => {


  return (generator) => {
    let time = 0
    for (let i = 0; i < operations; i++) {
      time += generator()
    }

    return time / 50
  }
}
const generate10MilEntries = generateEntries(10000000)
const averageAcross50Operations = averageAcrossOperations(50)
console.log('the operation took ' + averageAcross50Operations(generate10MilEntries) + 'ms')













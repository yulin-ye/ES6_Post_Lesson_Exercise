function fetchData1(url, callback) {
  console.log(`Fetching data from ${url}`)
  setTimeout(() => {
    callback(`Data from ${url}`);
  }, 2000)
}

function fetchData2(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve(`Data from ${url}`)
      } else {
        reject('Invalid URL')
      }

    },2000)
  })
}

async function loadData(url) {
  try {
    fetchData2(url)
  } catch(e) {
    console.log(e)
  }
}
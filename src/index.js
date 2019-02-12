function request(url){
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => {
      resolve(request.responseText);
    }
    request.onerror = () => {
      reject('Error');
    }
    request.send();
  })
}
request('https://tanuhaua.github.io/datas-file-json/data.json')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  })
const maindiv=document.getElementById('main');
function getData(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res => res.json()))
    .then((data) =>displayData(data))
    .catch((err) => console.log(err))

}
setInterval(getData,5000)
function displayData(data){

    maindiv.textContent=" ";
     const setupEle = document.createElement('h2');
     const punchlineEle = document.createElement('h1');
     setupEle.textContent = data.setup;
     punchlineEle.textContent = data.punchline;
     maindiv.append(setupEle,punchlineEle)
}
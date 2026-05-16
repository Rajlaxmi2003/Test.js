<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <main>
      <h1>Chai aur code</h1>
      <div class="projects">
        <a class="project-link" style="" href="./1-colorChanger/index.html"
          >Project 1 - color Changer 🔥</a
        >
        <a class="project-link" href="./2-BMICalculator/index.html"
          >Project 2 - BMI Generator ☕️</a
        >
        <a class="project-link" href="./3-DigitalClock/index.html"
          >Project 3 - Digital clock 😎</a
        >
        <a class="project-link" href="./4-GuessTheNumber/index.html"
          >Project 4 - Guess the number 🤨</a
        >
      </div>
    </main>
  </body>
</html>






#PROJECT CODE of project_1

```javascript
const randomColor= function(){
    const hex= "0123456789ABCDEF"
    let color= '#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
    };
    
    let intervalId;
    const startChangingColor= function(){
        if(!intervalId){
            intervalId= setInterval(changeBgColor, 1000);
        }
        

        function changeBgColor(){
            document.body.style.backgroundColor= randomColor();

        }
    }

    const stopChangingColor= function(){
        clearInterval(intervalId);
        intervalId=null;
    };

    document.querySelector('#start').addEventListener('click',startChangingColor);

    document.querySelector('#stop').addEventListener('click',stopChangingColor);



```

#PROJECT CODE of project_2

```javascript

const insert= document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class='color'>
    <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key===' '? 'Space': e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
  </tr>
</table>
    </div>
    `;
});



```

document.addEventListener("DOMContentLoaded", function () {
    
let mainBtn = document.getElementById('themeChange');
if (localStorage.getItem('bgcolor') !== null){
    let colorBg = localStorage.getItem('bgcolor');
    document.body.style.backgroundColor = colorBg;
}

mainBtn.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;
   
    if (curColour === 'limegreen') {
        document.body.style.backgroundColor = '';
        localStorage.setItem('bgcolor','')
        }
    else {
        document.body.style.backgroundColor = 'limegreen';
        localStorage.setItem('bgcolor','limegreen')
        
    }
 });
});



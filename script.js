const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','blue','pink','steelblue','grey','black','white','lightgreen','maroon',
               'aqua','orange','olive','purple','teal','navy','silver','salmon','hotpink','tan'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    //bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}
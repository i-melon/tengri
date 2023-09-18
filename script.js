let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider3button2').addEventListener('click', function(){
    offset = offset+620;
    if (offset>2480){
        offset=0
    }
    sliderLine.style.left = -offset+'px'
});
document.querySelector('.slider3button').addEventListener('click', function(){
    offset = offset-620;
    if (offset<0){
        offset=2480
    }
    sliderLine.style.left = -offset+'px'
});

let offsetM = 0;
const sliderLineM = document.querySelector('.slider-lineM');

document.querySelector('.slider3button2M').addEventListener('click', function(){
    offsetM = offsetM+348;
    if (offsetM>1392){
        offsetM=0
    }
    sliderLineM.style.left = -offsetM+'px'
});
document.querySelector('.slider3buttonM').addEventListener('click', function(){
    offsetM = offsetM -348;
    if (offsetM<0){
        offsetM=1392
    }
    sliderLineM.style.left = -offsetM+'px'
});
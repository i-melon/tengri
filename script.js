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

function redirectToWhatsApp(link) {
    let aLink = document.createElement('a')
    aLink.target = "_blank"
    aLink.href = link
    aLink.click()
}

function buySoft() {
    let link = "https://wa.me/77019136666?text=%D0%97%D0%B4%D1%80%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%0A%0A%D0%9F%D0%B8%D1%88%D1%83%20%D0%B2%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20tengri.estetika.agency,%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8%20%D0%BC%D1%8F%D0%B3%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%BB%D0%B5%D1%82%D0%B0%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8."
    redirectToWhatsApp(link)
}

function buyHard() {
    let link = "https://wa.me/77019136666?text=%D0%97%D0%B4%D1%80%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%0A%0A%D0%9F%D0%B8%D1%88%D1%83%20%D0%B2%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20tengri.estetika.agency,%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8%20%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%BE%D0%B3%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%BB%D0%B5%D1%82%D0%B0%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8."
    redirectToWhatsApp(link)
}

function buyDigital() {
    let link = "https://wa.me/77019136666?text=%D0%97%D0%B4%D1%80%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%0A%0A%D0%9F%D0%B8%D1%88%D1%83%20%D0%B2%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20tengri.estetika.agency,%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8."
    redirectToWhatsApp(link)
}
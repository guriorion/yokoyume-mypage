const MemoBtn = document.getElementById('Memo-btn');
   MemoBtn.onclick = function(){
       alert('作成中です');
   }

const imgSrc = ['images/me.png','images/me2.png','images/me3.png'];
const img = document.getElementById('me-img');
let slide = 0

function sleepByPromise(sec) {
    return new Promise(resolve => setTimeout(resolve, sec*1000));
}
async function wait(sec) {
    img.classList.add('fade-out');
    img.classList.remove('fade-in');
    await sleepByPromise(0.5);

    if (slide === 2){
        slide =0;
    }else {
        slide++
    }

    

    img.src = imgSrc[slide];
    img.classList.add('fade-in');
    img.classList.remove('fade-out');

    await sleepByPromise(sec + 0.5);
}

function MovePhoto() {
    wait(2)
}

setInterval(MovePhoto, 3000);


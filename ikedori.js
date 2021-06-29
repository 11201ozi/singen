const img = document.getElementById('img');
let degree = 0;
function rotateimg() {
    degree = degree + 10;
    degree = degree % 360;
    if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
        img.className = "face";
    } else {
        img.className = 'back';
    }
img.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateimg, 20);

function singen() {
    var win = window.open('https://ja.wikipedia.org/wiki/%E6%AD%A6%E7%94%B0%E4%BF%A1%E7%8E%84');
}
function singenAC() {
    var win = window.open('https://w.atwiki.jp/gcmatome/pages/2903.html')
}
function singenmoti() {
    var win = window.open('http://www.kikyoushingenmochi.com/product/3/')   
}
function kouhusi() {
    var win = window.open('https://www.city.kofu.yamanashi.jp/index.html') 
}
function kensin() {
    var win = window.open('https://ja.wikipedia.org/wiki/%E4%B8%8A%E6%9D%89%E8%AC%99%E4%BF%A1')
}
function mokumoku() {
    var win = window.open(`https://ja.wikipedia.org/wiki/%E3%82%82%E3%81%86%E4%B8%AD%E5%AD%A6%E7%94%9F`)
}
function minikoko() {
    window.location = `file:///Users/ikedori/Desktop/%E3%82%A4%E3%82%B1%E3%83%A1%E3%83%B3/mokuro/metu.html`
}
setInterval(() => {
    // 現在時間の取得
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
  
    // 時、分、秒を元に角度を計算
    const degH = h * (360 / 12) + m * (360 / 12 / 60);
    const degM = m * (360 / 60);
    const degS = s * (360 / 60);
  
    // 各要素を取得
    const elementH = document.querySelector(".c-clock__hour");
    const elementM = document.querySelector(".c-clock__min");
    const elementS = document.querySelector(".c-clock__sec");
  
    // styleを追加
    elementH.style.transform = `rotate(${degH}deg)`;
    elementM.style.transform = `rotate(${degM}deg)`;
    elementS.style.transform = `rotate(${degS}deg)`;
  }, 10);
  startCol = 0;
function gradText(tObj)
{
    txt = document.all[tObj].innerText;
    col = startCol = (startCol + 16) & 0xFF;	//　１６段階に変化
    str = "";
    for (i=0; i<txt.length; i++)
    {
        cStr = "f" + (col += 8).toString(16);
        cStr = cStr.substring(cStr.length-6,cStr.length);
        str += "<font color='#"+cStr+"'>" + txt.charAt(i) + "</font>";
    }
    document.all[tObj].innerHTML = str;
    }
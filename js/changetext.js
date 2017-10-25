var text = ["I'm Howard. Welcome!", "我叫楊翰耘. 歡迎！", "Je m'appelle Howard. Bienvenue!", "안녕하세요! 저는 하워드라고 합니다.", "こんにちは! 僕はハワードです."];
var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

import "./styles.css";

// ランダムなカラーにする関数
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var next = 1;
function reset_next() {
  next = 1;
}

// ボタンを作る関数
function createButtons() {
  const mainDiv = document.getElementById("main");
  mainDiv.innerHTML = "";

  for (var num = 9; num > 0; num--) {
    var elm = document.createElement("button");
    elm.innerHTML = num;
    elm.setAttribute("id", num);
    elm.setAttribute("class", "circle");
    var function_name = "remove(" + num + ")";
    elm.setAttribute("onclick", function_name);
    mainDiv.appendChild(elm);

    var left_pos = 10;
    var top_pos = 100;
    var size = 30 + Math.floor(Math.random() * 31); // 30px から 60pxの間でランダムに生成

    left_pos = left_pos + Math.floor(Math.random() * 400);
    top_pos = top_pos + Math.floor(Math.random() * 600);

    elm.style.left = "" + left_pos + "px";
    elm.style.top = "" + top_pos + "px";
    elm.style.width = "" + size + "px";
    elm.style.height = "" + size + "px";
    elm.style.backgroundColor = getRandomColor();
    elm.style.fontSize = size / 2 + "px"; // フォントをボタンのサイズに応じて変更
    elm.style.lineHeight = size + "px"; // ボタンを真ん中に配置
  }
  reset_next();
}

document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
    if (next == 10) next = 1;
  }
};

// 15秒ごとにボタンを更新する
setInterval(createButtons, 15000);

createButtons(); //初期状態でボタンを生成

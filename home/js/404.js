window.onload = function(argument) {

// var marketing = "random marketing words;
var marketing = "strategic insights implementation internal control quantitative analysis promotional material enhancement pricing optimize profitability promotional analytical maximize interpersonal problem solving return on investment functionally	deadline pertinent forecasting	metric	market research	servicing advertise operational	motivate implement brand timely innovative insights communicator agency initiative co-ordinate oversee strategic insight tracking organizational ordinate quantitative enhanceaccountability analyze distribution enhanced maintain modeling demographic impeccable coordination identify focused dynamics refine promote ongoing forecast equivalent monitor motivated advertising communication innovation profitably presentation interpreting starter channels affecting statistical relationship liaison solving lateral effectiveness promotion understanding sales model antenna strategic insights objective ad support specialized responsive tactical excellent communications sale conclusive loyalty love antenna strategic insights focus discretion contribution direct dynamic independently follow up experienced diversity policy negotiate organize track exceptional speed solution effectively resource demonstrate publicity solve maintain trained commerce comply assist major brands competitor progressive foster social handling illustrate strong communicate accordance arrange adjust acquire technical interpret instant advise entertainment continually deliver network design positive organized power critical public handle overcome complaint professional supported best attention agency review preparation pressure change contract drive intelligence advanced relations pack design semiotics NPD customer satisfaction usability usage attitudes media consumption ad testing brand tracking wants needs profiling segmentation qual quant projects full service national and international surveys IT banking and finance pet care industrial profits property  care social government beauty retail telecommunications B2B automotive healthcare antenna insights researching advanced methodologies geo-demographics econometrics shareholder engagement pharmaceutical medical everything is chrome in the future pneumonoultramicroscopicsilicovolcanoconiosis supercalifragilisticexpialidocious";

var words = {};
var words_attr = [];
string_handle(marketing);

var canvas = document.getElementById('c');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if (canvas.getContext) {
var c = canvas.getContext('2d'),
  w = canvas.width,
  h = canvas.height;

c.strokeStyle = 'black';
c.fillStyle = 'rgba(238, 221, 130, 0.8)';
c.lineWidth = 10;

// constructor
Word = function(key) {
  this.text = key;
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.font = words[key] * 15 + 'px arial'
  this.speed = (words[key]);
}
for (key in words) {
  words_attr.push(new Word(key));
}
console.log(words_attr.length);

function animation() {
  for (var i = 0; i < words_attr.length; i++) {
    c.font = words_attr[i].font;
    c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
    words_attr[i].width = c.measureText(words_attr[i].text).width;
    c.stroke();
  }
  move();
}

function move() {
  for (var i = 0; i < words_attr.length; i++) {
    if (words_attr[i].x > w) {
      words_attr[i].x = -words_attr[i].width;
      words_attr[i].y = Math.random()*h;
    }else{
      words_attr[i].x += words_attr[i].speed;
    }
  }
}

setInterval(function() {
  c.clearRect(0,0,w,h);
  animation();
},35);

}

function string_handle(str) {
var split_str = str.split(" ");
var word_array = [];
var word_count = [];
for (var i = 0; i < split_str.length; i++) {
  check = true;
  for (var j = 0; j <= word_array.length; j++) {
    if (split_str[i] == word_array[j]) {
      word_count[j]++;
      check = false;
      break;
    }
  }
  if (check) {
    word_array.push(split_str[i]);
    word_count.push(1);
  }
}
for (var i = 0; i < word_array.length; i++) {
  words[word_array[i]] = word_count[i];
}
return words;
}

}

var arr = [];
var arr2=[];
function add() {
  var input = document.getElementById("inp").value;
  arr2 = arr;

  if (isNaN(input)) {
    alert("input only +ve or -ve Number");
    document.getElementById("inp").value = "";
  } 
  else {
    if (input == "") {
        alert("Empty field not allowed");
        
        } else {
        arr.push(input);
        document.getElementById("inp").value = "";
        op1();
        disp2();
        }
    }
}

function op1() {
  document.getElementById("op1").innerText = arr2;
  let a = "";
  let b = ".";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) a += arr[i];
    else b += arr[i] * -1;
  }
  console.log(a);
  var x = a.concat(b);
  document.getElementById("op2").innerText = x;
}

// document.write("</br>")

//////============================2nd output================//////////

function disp2() {
  arr2.sort()
  let a1 = "";
  let b1 = ".";
  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] >= 0) a1 += arr2[i];
    else b1 += arr2[i] * -1;
  }
  let y = a1.concat(b1);

  document.getElementById("op3").innerText = y;
}

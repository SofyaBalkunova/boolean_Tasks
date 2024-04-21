window.onload = function() {
  function generateBooleanVector() {
    const sz = 1 << 3;
    bin='';
    for (let i = 0; i < sz; ++i) {
      bin+= (Math.floor(Math.random() * 2));
    }
    return bin;
  }
  let vec_fun;
  //let vec_fun =["11111101","11111111","11111111","11111111","11111111"];
  vector();
  function vector(){
    vec_fun = [generateBooleanVector(), generateBooleanVector(), generateBooleanVector(), generateBooleanVector(), generateBooleanVector()];
    vec_fun.forEach(function(str) {
      document.getElementById("numberField").innerHTML += str + "<br>";
    });
  }
  //console.log(vec_fun);
  document.getElementById('startButton').onclick = startFunction;
  //document.getElementById('yes').onclick = resetRadioButton('yes');
  //document.getElementById('no').onclick = resetRadioButton('no');
  function startFunction(){
    let res=getResponse();
    console.log("res " + res);
    let unswerBlock = document.getElementById('unswer');
    if(res){
      unswerBlock.textContent = 'Молодец, возьми с полки пирожок';
    }else{
      unswerBlock.textContent = 'You are lox';
    }
  }
  function getResponse(){
    let T0 = true, T1 = true, S = true, M = true, L = true;
    console.log(vec_fun);
    for(let i = 0; i < vec_fun.length; i++) {
        console.log(i);
        if (incompleteT0(vec_fun[i]) != true){
            console.log("T0");
            console.log(vec_fun[i]);
            T0 = false;
        }
        console.log(T0);
        console.log(!incompleteT0(vec_fun[i]));
        if (incompleteT1(vec_fun[i]) != true){
             console.log("T1");
            console.log(vec_fun[i]);
            T1 = false;
        }
        console.log(T1);
        console.log(!incompleteT1(vec_fun[i]) );
        if (incompleteS(vec_fun[i]) != true){
             console.log("S");
            console.log(vec_fun[i]);
            S = false;
        }
        console.log(S);
        console.log(!incompleteS(vec_fun[i]));
        if (incompleteM(vec_fun[i]) != true){
             console.log("M");
            console.log(vec_fun[i]);
            M = false;
        }
        console.log(M);
        console.log(!incompleteM(vec_fun[i]));
        if (incompleteL(vec_fun[i]) != true){
            console.log("L");
            console.log(vec_fun[i]);
            L = false;
        }
        console.log(!incompleteL(vec_fun[i]));
        console.log(L);
    }
    if (document.getElementById('yes').checked) {
        console.log("radio " + document.getElementById('yes').checked);
        if (!T0 && !T1 && !S && !M && !L) {
            return true;
        }else{
            return false;
        }
    }else{
        console.log("T0 "+ T0 + " T1 "+ T1 + " S "+ S + " M "+ M + " L "+ L);
        if (document.getElementById("option1").checked != T0 || document.getElementById("option2").checked != T1 || document.getElementById("option3").checked != S || document.getElementById("option4").checked != M || document.getElementById("option5").checked != L) {
            return false;
        }
    }
    if(!checkSelection()){
        return false;
    }
    return true;
}
const radioYes = document.getElementById("yes");
const radioNo = document.getElementById("no");
const checkboxes = document.querySelectorAll("input[type='checkbox']");

radioYes.addEventListener("change", function() {
  if (this.checked) {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
      checkbox.disabled = true;
    });
  }
});

radioNo.addEventListener("change", function() {
  if (this.checked) {
    checkboxes.forEach(function(checkbox) {
      checkbox.disabled = false;
    });
  }
});
function checkSelection() {
  var noRadioButton = document.getElementById("no");
  var checkboxes = document.querySelectorAll('input[name="group1"]');

  if (noRadioButton.checked) {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        return true;
      }
    }
    return false;
  }
}
function incompleteT0(vecBool){
    if(vecBool[0] === "0"){
        return true;
    }
    return false;
}
function incompleteT1(vecBool){
    if(vecBool[vecBool.length-1] === "1"){
        return true;
    }
    return false;
}
function incompleteS(vecBool){
    vecBoolrev = vecBool.split("").reverse().join("");
    for(let i=0; i < vecBool.length; i++){
        if(vecBool[i] === vecBoolrev[i]){
            return false;
        }
    }
    return true;
}
function incompleteM(vecBool){
    flag = false;
    for(let i=0; i < vecBool.length; i++){
        if(vecBool[i] === "0"){
            if(flag === true){
                return false;
            }
        }else{
            flag = true;
        }
    }
    return true;
}
function calcPol(vec_zh1){
    vec_zh2="";
    for(let i=0;i<vec_zh1.length-1;i++){
        if(vec_zh1[i] === "1"){
            if(vec_zh1[i+1]==="1"){
                vec_zh2 = vec_zh2 + "0";
            }else{
                vec_zh2 = vec_zh2 + "1";
            }

        }else{
            if(vec_zh1[i+1]==="1"){
                vec_zh2 = vec_zh2 + "1";
            }else{
                vec_zh2 = vec_zh2 + "0";
            }
        }
        //console.log("Я вектор " + vec_zh2);
    }

    return vec_zh2;
}
function incompleteL(vecBool){
    //flag = true;
    for(let i=0; i < 8; i++){
        //console.log("Индекс "+ i);
        //console.log("Вектор");
        //console.log(vecBool);
        if(i == 3 || i == 5 || i == 6 || i == 7 ){
            if(vecBool[0] === "1"){
                //console.log(vecBool[0]);
                //console.log("Мы не L");
                return false;
                //break;
            }
        }
        //console.log("i send " + vecBool + " in calcPol");
        vecBool=calcPol(vecBool);
        //console.log("i am vecBool " + vecBool);
        //console.log("i am length " + vecBool.length);
    }
    //console.log("Мы  L");
    return true;
}
};
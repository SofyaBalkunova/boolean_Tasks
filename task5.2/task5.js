window.onload = function() {
  function generateBooleanVector() {
    const sz = 1 << 3;
    bin='';
    for (let i = 0; i < sz; ++i) {
      bin+= (Math.floor(Math.random() * 2));
    }
    return bin;
  }
  binString=generateBooleanVector();
  document.getElementById("numberField").innerHTML = binString;
  document.getElementById('startButton').onclick = startFunction;
  function startFunction(){
    res=getResponse();
    console.log(getResponse());
    let unswerBlock = document.getElementById('unswer');
    if(res){
      unswerBlock.textContent = 'Молодец, возьми с полки пирожок';
    }else{
      unswerBlock.textContent = 'You are lox';
    }

  }
  function getResponse(){
    let mainValues = calcVariables();
    console.log("hello "+ mainValues + " buy");
    let group1Values = document.getElementsByName('group1');
    console.log( group1Values );
    let group2Values = document.getElementsByName('group2');
    console.log(group2Values );
    let groupResult = true;
    if(group1Values[group1Values.length - 1].checked){
      console.log(group1Values[group1Values.length - 1] );
      for (let i = 0; i < mainValues.length ; i++) {
        if(mainValues[i] !== false){
          groupResult = false;
          return groupResult;
        }
      }
    }else{
      for (let i = 0; i < mainValues.length ; i++) {
        if (group1Values[i].checked !== mainValues[i]) {
          groupResult = false;
        }
      }
    }

    if(group2Values[group2Values.length - 1].checked){
      for (let i = 0; i < mainValues.length ; i++) {
        if(mainValues[i] !== true){
          groupResult = false;
          return groupResult;
        }
      }
    }else{
      for (let i = 0; i < mainValues.length ; i++) {
        if (group2Values[i].checked === mainValues[i]) {
          groupResult = false;
          return groupResult;
        }
      }
    }

    return groupResult;
}
let checkboxes1 = document.querySelectorAll('input[name="group1"]');
  checkboxes1.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    let specialOptionCheckbox1 = document.querySelector('input[value="optionno1"]');
    if (this.value !== 'optionno1' && this.checked && specialOptionCheckbox1.checked) {
      specialOptionCheckbox1.checked = false;
    }
    if (this.checked && this.value === 'optionno1') {
      for (let i = 0; i < checkboxes1.length-1; i++) {
        checkboxes1[i].checked = false;
      }
    }
  });
});
let checkboxes2 = document.querySelectorAll('input[name="group2"]');
  checkboxes2.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    let specialOptionCheckbox2 = document.querySelector('input[value="optionno2"]');
    if (this.value !== 'optionno2' && this.checked && specialOptionCheckbox2.checked) {
      specialOptionCheckbox2.checked = false;
    }
    if (this.checked && this.value === 'optionno2') {
      for (let i = 0; i < checkboxes2.length-1; i++) {
        checkboxes2[i].checked = false;
      }
    }
  });
});
  function calcVariables(){
    let bit_depth = 3;
    let variables = [];
    for (let i = 1; i <= 3; i++) {
      variables.push(fictoressent_var(i));
    }
    console.log(variables);
    return variables;

  }
  function fictoressent_var(bit_depth){
      for(let i = 0; i < 8; i=i+(8/2**bit_depth)){
        if(binString.substr(i, 8/2**bit_depth)!=binString.substr(i+8/2**bit_depth, 8/2**bit_depth)){
          return true;
        }
        i=i+8/2**bit_depth;

      }
      return false;
  }
};
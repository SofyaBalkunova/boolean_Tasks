window.onload = function() {    
  function generateBooleanVector() {
    const sz = 1 << 3;
    //console.log(sz);
    //const v = [];
    bin='';
    for (let i = 0; i < sz; ++i) {
      //v[i] = Boolean(Math.floor(Math.random() * 2));
      bin+= (Math.floor(Math.random() * 2));
      //=v[i] ? 1 : 0
      //console.log();
    }
    return bin;
    //console.log(bin);
  }
    //alert(bin);
  binString=generateBooleanVector();
  document.getElementById("numberField").innerHTML = binString; 
  //let n;
  //console.log("Введите число: ");
  //n = parseInt(prompt());
  //generateBooleanVector(n);
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
    
    //console.log(checkboxes2);
    
  }
  function getResponse(){
    /*let group1Values = document.getElementsByName('group1');
    let group2Values = document.getElementsByName('group2');
    let group1Result = [];
    let group2Result = [];
    //console.log(group1Values);
    //console.log(group2Values);
    for (let i = 0; i < group1Values.length; i++) {
      if (group1Values[i].checked) {
        group1Result.push(true);
      } else {
        group1Result.push(false);
      }
    } 
    for (let i = 0; i < group2Values.length; i++) {
      if (group2Values[i].checked) {
        group2Result.push(false);
      } else {
        group2Result.push(true);
      }
    }*/
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
          //return groupResult;
        }
      }
    }      

    if(group2Values[group2Values.length - 1].checked){
      for (let i = 0; i < mainValues.length ; i++) {
        if(mainValues[i] !== true){
          //console.log(mainValues[i]);
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
          /*if (group1Values[i].value === 'optionno1') {
            specialOptionSelected1 = true;
        } else {
          group1Result.push(true);
        }
      } else {
        group1Result.push(false);
      }
    }
    }*/
    

    /*for (let i = 0; i < group2Values.length; i++) {
      if (group2Values[i].checked) {
        if (group2Values[i].value === 'optionno2') {
          specialOptionSelected = true;
        } else {
          group2Result.push(false);
        }
      } else {
        group2Result.push(true);
      }
  }

  return group1Values===group2Values;*/

}
let checkboxes1 = document.querySelectorAll('input[name="group1"]');
  checkboxes1.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    let specialOptionCheckbox1 = document.querySelector('input[value="optionno1"]');
    if (this.value !== 'optionno1' && this.checked && specialOptionCheckbox1.checked) {
      specialOptionCheckbox1.checked = false;
    }
    if (this.checked && this.value === 'optionno1') {
      //let group1Values = document.getElementsByName('group1');
      for (let i = 0; i < checkboxes1.length-1; i++) {
        checkboxes1[i].checked = false;
      }
      //checkboxes1[checkboxes1.length-1].checked = true;
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
      //let group1Values = document.getElementsByName('group1');
      for (let i = 0; i < checkboxes2.length-1; i++) {
        checkboxes2[i].checked = false;
      }
      //checkboxes2[checkboxes2.length-1].checked = true;
    }
  });
});




  /*let specialOptionCheckbox1 = document.querySelector('input[value="optionno1"]');
  specialOptionCheckbox1.addEventListener('change', function() {
    if (this.checked) {
      let group1Values = document.getElementsByName('group1');

      for (let i = 0; i < group1Values.length-1; i++) {
        group1Values[i].checked = false;
      }
      group1Values[group1Values.length-1].checked = true;
    }
  });*/


 /* let specialOptionCheckbox2 = document.querySelector('input[value="optionno2"]');
  specialOptionCheckbox2.addEventListener('change', function() {
    if (this.checked) {
      let group2Values = document.getElementsByName('group2');

      for (let i = 0; i < group2Values.length-1; i++) {
        group2Values[i].checked = false;
      }
      group2Values[group2Values.length-1].checked = true;
    }
  });*/

  
 /* let checkboxes1 = document.querySelectorAll('input[name="group1"]');

  checkboxes1.addEventListener('change', function() {
    // Проверяем, является ли текущий чекбокс чекбоксом со значением "optionno"
    let specialOptionCheckbox11 = document.querySelector('input[value="optionno1"]');
    if (this.value != 'optionno1' && this.checked && specialOptionCheckbox11 == true) {
      specialOptionCheckbox11.checked = false;
      /*let group2Values = document.getElementsByName('group1'); 
      for (let i = 0; i < group2Values.length-1; i++) {
        group2Values[i].checked = false;
      }
      group2Values[group2Values.length-1].checked = true;*/
    //}
      /* 
      // Если да, то устанавливаем состояние всех остальных чекбоксов в группе в false
      checkboxes1.forEach(function(checkboxes1) {
        if (checkboxes1.value !== 'optionno') {
          checkboxes1.checked = false;
        }
      });*/
      // Выводим сообщение о выборе особого варианта
      //console.log('Выбран особый вариант');
    //});
  //});
  //const checkboxes2 = document.querySelectorAll('input[name="group2"]');
  
  /*checkboxes2.addEventListener('change', function() {
    // Проверяем, является ли текущий чекбокс чекбоксом со значением "optionno"
    if (this.value === 'optionno' && this.checked) {
      // Если да, то устанавливаем состояние всех остальных чекбоксов в группе в false
      checkboxes2.forEach(function(checkboxes2) {
        if (checkboxes2.value !== 'optionno') {
          checkboxes2.checked = false;
        }
      });
      // Выводим сообщение о выборе особого варианта
      //console.log('Выбран особый вариант');
    }
  });*/
  
  
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
        //console.log(binString.substr(i, 8/2**bit_depth)!=binString.substr(i+8/2**bit_depth, 8/2**bit_depth));
        i=i+8/2**bit_depth;
        
      }
      return false;
  }
};
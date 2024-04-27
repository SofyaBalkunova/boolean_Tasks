window.onload = function() {
//рандомная генерация вектора
    function generateRandomBooleanFunction() {
      const sz = 1 << 3;
          bin='';
          for (let i = 0; i < sz; ++i) {
            bin+= (Math.floor(Math.random() * 2));
          }
          return bin;
    }
    document.getElementById("startButton").onclick = startFunction;
    let bullfunc = generateRandomBooleanFunction();//"00100101"
    document.getElementById("numberField").innerHTML = bullfunc;
        function sdnf(f) {
                  let arg = ['X', 'Y', 'Z'];
                  let n = 0;
                  let ans = '';

                  while ((1 << n) < f.length) n++; // quantity arguments

                  for (let i = 0; i < f.length; i++) {
                    let BinaryCode = i.toString(2); // binary code int i

                    if (f[i] === '1') {
                      if (i < f.length / 2) {
                        while (BinaryCode.length < n) BinaryCode = '0' + BinaryCode;
                      }

                      for (let j = 0; j < n; j++) {
                        if (BinaryCode[j] === '0') ans += '-' + arg[j];
                        else ans += arg[j];
                      }

                      ans += ' v ';
                    }

                  }

                  if (ans[ans.length - 1] === ' ') ans = ans.substring(0, ans.length - 3);

                  return ans;
        }
        function dnf(f) {
                  let n = 0;

                  while ((1 << n) < f.length) n++; // quantity arguments

                  let args = ['X', 'Y', 'Z'];
                  let ans = '';
                  let sets = stringToList(f);
                  console.log("sets");
                  console.log(sets);
                  let len = sets[0].length;

                  for (let i = 0; i < n - 1; i++) {
                    let nsets = nset(sets);
                    sets = nsets;
                    sets = removeDuplicates(sets);
                  }

                  for (let i = 0; i < sets.length; i++) {
                    for (let j = 0; j < sets[i].length; j++) {
                      if (sets[i][j] === '1') ans += args[j];
                      else if (sets[i][j] === '0') {
                        ans += '-' + args[j];
                      }
                    }

                    if (i < sets.length - 1) ans += ' v ';
                  }

                  return ans;
        }
        function stringToList(f) {
                  let n = 0;

                  while ((1 << n) < f.length) n++; // quantity arguments

                  let sets = [];

                  for (let i = 0; i < f.length; i++) {
                    let BinaryCode = i.toString(2); // binary code int i

                    if (i < f.length / 2) {
                      while (BinaryCode.length < n) BinaryCode = '0' + BinaryCode;
                    }

                    if (f[i] === '1') sets.push(BinaryCode);
                  }

                  return sets;
        }
        function nset(sets) {
                  let index = 0;
                  let count = 0;
                  let nsets = [];
                  let iner = new Array(sets.length).fill(0);

                  for (let i = 0; i < sets.length; i++) {
                    for (let j = i; j < sets.length; j++) {
                      if (stars(sets[i]) === stars(sets[j])) {
                        for (let k = 0; k < sets[j].length; k++) {
                          if (sets[i][k] !== sets[j][k] && sets[i][k] !== '*' && sets[j][k] !== '*') {
                            count++;
                            index = k;
                          }
                        }

                        if (count === 1) {
                          let nset = sets[i];
                          let sb = nset.split('');
                          sb[index] = '*';
                          nset = sb.join('');
                          nsets.push(nset);
                          iner[i] = 1;
                          iner[j] = 1;
                        }

                        count = 0;
                        index = 0;
                      }
                    }
                  }

                  for (let i = 0; i < sets.length; i++) {
                    if (iner[i] === 0) nsets.push(sets[i]);
                  }

                  return nsets;
        }
        function removeDuplicates(list) {
                  return [...new Set(list)];
        }
        function stars(x) {
                  let s = 1;

                  for (let i = 0; i < x.length; i++) {
                    if (x[i] === '*') {
                      s *= 10;
                      s += i;
                    }
                  }

                  return s;
        }
        function startFunction(){
        document.getElementById("unswer1").innerHTML = sdnf(bullfunc);
        document.getElementById("unswer2").innerHTML = dnf(bullfunc);
        console.log(sdnf(bullfunc));
        console.log(dnf(bullfunc));
    }
};
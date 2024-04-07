window.onload = function() {
    function generateBooleanVector(n) {
      const sz = 1 << n;
      let bin = '';
      for (let i = 0; i < sz; ++i) {
        bin += Math.floor(Math.random() * 2);
      }
      return bin;
    }

    document.getElementById('startButton').onclick = startFunction;

    function startFunction() {
      var userInput = document.getElementById("userInput").value;
      let answerBlock = document.getElementById('unswer');
      answerBlock.innerHTML = generateBooleanVector(parseInt(userInput));
    }
};
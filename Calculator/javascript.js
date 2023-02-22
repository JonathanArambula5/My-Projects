function calculate() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var z = Number(x) + Number(y)
    document.getElementById('result').innerHTML = z;
  }

  function calculate2() {
    var x = document.getElementById('nom1').value;
    var y = document.getElementById('nom2').value;
    var z = Number(x) - Number(y)
    document.getElementById('result2').innerHTML = z;
  }

  function calculate3() {
    var x = document.getElementById('nam1').value;
    var y = document.getElementById('nam2').value;
    var z = Number(x) * Number(y)
    document.getElementById('result3').innerHTML = z;
  }

  function calculate4() {
    var x = document.getElementById('nem1').value;
    var y = document.getElementById('nem2').value;
    var z = Number(x) / Number(y)
    document.getElementById('result4').innerHTML = z;
  }
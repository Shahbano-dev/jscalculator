function getNum(num){
    console.log(num)
    document.getElementById('result').value += num;
}

function clearScr(){
    document.getElementById('result').value = "";

}
function removeNum(){
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1)
}
function getAns(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}

function sqrt(){
    var sqr = document.getElementById('result').value
    var getsqr = Math.pow(sqr,2)
    document.getElementById('result').value = getsqr;
}

function cube(){
    var cub = document.getElementById('result').value
    var getcub = Math.pow(cub,3)
    document.getElementById('result').value = getcub;
}

function sqrtr(){
    var sqtr = document.getElementById('result').value
    var getsqtr = Math.sqrt(sqtr)
    document.getElementById('result').value = getsqtr;
}

function getRad(){
    var rad = document.getElementById('result').value
    var getradn = (rad*180)/3.14
    document.getElementById('result').value = getradn;
}

function getlog(){
    var logt = document.getElementById('result').value
    var getlogten = Math.log10(logt)
    document.getElementById('result').value = getlogten;
}

function getPi(){
    var gtpi = document.getElementById('result').value
    var getval = gtpi*3.14
    document.getElementById('result').value = getval;
}

function sin(){
    var getsin = document.getElementById('result').value
    var getsint = Math.sin(getsin)
    document.getElementById('result').value = getsint;
}

function cos(){
    var getcos = document.getElementById('result').value
    var getcost = Math.cos(getcos)
    document.getElementById('result').value = getcost;
}

function tan(){
    var gettan = document.getElementById('result').value
    var gettant = Math.tan(gettan)
    document.getElementById('result').value = gettant;
}
function gete(){
    var getexp = document.getElementById('result').value
    var getexpt = Math.E*getexp
    document.getElementById('result').value = getexpt;
}
  


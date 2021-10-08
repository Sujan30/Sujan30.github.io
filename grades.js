function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "grade") {
      x.innerHTML = "grade = 87.91% ~ B+";
    } 
  }
function myEnglish()  {
    var t = document.getElementById("eng");
    if(t.innerHTML === "grade"){
        t.innerHTML = "grade = 98% ~ A";
    }
}
function myvs()  {
    var f = document.getElementById("vs");
    if(f.innerHTML === "grade"){
        f.innerHTML = "grade = 97.6 ~ A";
    }
}
function apwh(){
    var l = document.getElementById("apwh");
    if(l.innerHTML ==="grade"){
        l.innerHTML = "grade = 3.1 ~ B+ (weird grading scale)";
    }
}
function gpa(){
    var gpa = document.getElementById("gpa");
    if(gpa.innerHTML ==="gpa"){
        gpa.innerHTML = "gpa = 3.5 unweighted \n 4.0 weighted";
    }
}
 window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
  });
  function click1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    var re = /^[1-9]+[0-9]*$/;
    //var re = /^\d+$/;
    var prov=re.test(f1[0].value);
    var prov1=re.test(f2[0].value);
    if (prov &&  prov1) {
        r.innerHTML = f1[0].value * f2[0].value;
    }
    else {
       alert("Неверные данные");
    }
    return false;
  }
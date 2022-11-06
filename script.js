var tb1=document.createElement("table");
tb1.setAttribute("class","table");

var th1=document.createElement("thead");
th1.setAttribute("class","thead-dark");

var tr1=document.createElement("tr");

var thr=document.createElement("th");
thr.setAttribute("scope","col");
thr.innerHTML="First";

var thr1=document.createElement("th");
thr1.setAttribute("scope","col");
thr1.innerHTML="Middle";

var thr2=document.createElement("th");
thr2.setAttribute("scope","col");
thr2.innerHTML="Last";

var tb=document.createElement("tbody");
var trb=document.createElement("tr");

var td=document.createElement("td");
td.innerHTML="Mark";

var td1=document.createElement("td");
td1.innerHTML="Otto";

var td2=document.createElement("td");
td2.innerHTML="@mdo";

trb.append(td,td1,td2);
tb.append(trb);
tr1.append(thr,thr1,thr2);
th1.append(tr1);

tb1.append(th1,tb);
document.body.append(tb1);






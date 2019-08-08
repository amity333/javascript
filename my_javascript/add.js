function Display()
{
   var val1 = parseInt(document.getElementById("idName1").value);
   var val2 = parseInt(document.getElementById("idName2").value);
 // var result=val1+val2;
  //alert (result);
   document.getElementById("mydiv").innerHTML=val1+val2;
}
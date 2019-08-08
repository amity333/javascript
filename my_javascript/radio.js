function Display()
{
   var val="";
   if(document.getElementById("r1").checked)
   {
   val=document.getElementById("r1").value
   }
   else if(document.getElementById("r2").checked)
   {
   val=document.getElementById("r2").value
   }
   document.getElementById("mydiv").innerHTML=val;
}
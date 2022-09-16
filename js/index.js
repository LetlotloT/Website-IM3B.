 function showMenu() {
   var checkbox = document.getElementById("MenuCheckbox");
   var list = document.getElementById("menu");

   if (checkbox.checked==true) {
    list.stlye.display="block";
   }
  else {
    list.stlye.display="none";
 }
}
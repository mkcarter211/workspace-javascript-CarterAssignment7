/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
var nlist = document.querySelectorAll("li.hot");
for(var i = 0; i<nlist.length; i++){
  nlist[i].setAttribute("class", "cool");
}
$(".hot").each(function() {
    $(this).removeClass("hot");
    $(this).addClass("cool");
  });



// traverse the elements
$("#one").next().next().text("milk");

// add a new element
$("add").click(addElement);


// add by clicking the plus sign
document.getElementById("add").addEventListener("click", addElement);

function addElement() {
  // add a new element
  
}
$('li').click(changeStyle);


//  click the li element will change the changeStyle
function changeStyle() {
  if($(this).hasClass('complete')){
     $(this).removeClass("complete");
    $(this).addClass("cool");
  }
  if($(this).hasClass('cool')){
    $(this).removeClass("cool");
    $(this).addClass("complete");
  }
  if($(this).hasClass('hot')){
    $(this).removeClass("hot");
    $(this).addClass("complete");
  }
  else{
    $(this).addClass("complete");

  }

}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
  $('')
 
 
}

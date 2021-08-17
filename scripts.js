var acc = document.getElementsByClassName("question");

var i;

for (i = 0; i < acc.length; i++) {



    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");

    }
}


// var coll = document.getElementsByClassName("question");
// var i;

// for (i = 0; i < coll.length; i++) {
//   var content = this.nextElementSibling;


//   for (var j = 0; j < coll.length; j++) {

//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       continue;

//     }


//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         // var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//           content.style.display = "none";
//         } else {
//           content.style.display = "block";
//         }


//       }

//     );
//   }


// var accItem = document.getElementsByClassName('question');
// var accHD = document.getElementsByClassName('answer');
// for (i = 0; i < accHD.length; i++) {
//     accHD[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
//     var itemClass = this.parentNode.className;
//     for (i = 0; i < accItem.length; i++) {
//         accItem[i].className = 'accordionItem close';
//     }
//     if (itemClass == 'accordionItem close') {
//         this.parentNode.className = 'accordionItem open';
//     }
// }










//   this.addEventListener("DOMContentLoaded", () =>{
//     const questions = document.querySelectorAll(".question")
//     questions.forEach((question) => question.addEventListener("click", () =>{

//         if(question.parentNode.classList.contains("active")){
//             question.parentNode.classList.toggle("show")
//         }
//     else{
//     questions.forEach(question => question.parentNode.classList.remove("active"))
//     question.parentNode.classList.add("show")
//         }

//     }))
//   }) 
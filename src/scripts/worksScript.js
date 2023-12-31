console.log("hello");

const selectListen = document.getElementById("sortOptions");
selectListen.addEventListener("change", sortElements);


document.addEventListener('DOMContentLoaded', function() {
   sortElements();
});

function sortElements() {
    var selectedOption = document.getElementById('sortOptions').value;

    var allElements = document.querySelectorAll('.sortable');
    allElements.forEach(function(ele) {
        ele.classList.remove('active');
    });

    var selectedElements = document.querySelectorAll('.' + selectedOption);
    selectedElements.forEach(function(ele){
        ele.classList.add('active');
    });
}
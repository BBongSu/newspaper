let currentPage = 1;
function nextPage(){
    let newspaper = document.getElementById("newspaper");
    currentPage++;
    if(currentPage > 3){
        currentPage = 1;
    }
    newspaper.style.transform = "translateY(-" + (currentPage - 1) * 50 + "%)";
}
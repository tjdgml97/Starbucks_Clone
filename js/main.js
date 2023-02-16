alert("r")
// Main Header
// Search 

// 두번째 선택도 가능함 
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener("click", function() {
  searchInputEl.focus();
 (searchEl.addEventListener("click", function() {
    searchInputEl.focus();
  }))
})

searchInputEl.addEventListener("focus", function() {
  searchInputEl.setAttribute("placeholder","통합 검색");
});

searchInputEl.addEventListener("blur", function(){
  searchInputEl.setAttribute("placeholder","");
})


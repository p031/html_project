searchInput.addEventListener("keyup", () => {
  // 초기화
  filteredList.innerHTML = "";
  resultContainer.style.display = "none";
  // input 값이 있다면,
  if (searchInput.value) {
    const filteredAccount = accountArray.filter((x) => searchFunc(x.id));
    // filteredAccout 배열이 있다면,
    if (filteredAccount) {
      filteredAccount.forEach((acc) => showFilteredAccount(acc));
    }
  }
});

// focusout시, 검색 결과 사라지기
searchInput.addEventListener("focusout", () => {
  const containerCap = document.querySelector(".suggestions-cap");
  resultContainer.style.display = "none";
  containerCap.style.display = "none";
});

// 검색창 삭제 버튼 기능 구현
searchContent.addEventListener("click", (e) => {
  const search = document.querySelector(".search");
  const searchIcon = document.querySelector(".fas.fa-search");
  const searchDelete = document.querySelector(".fas.fa-times-circle");
  if (e.target.className === "fas fa-times-circle focus") {
    searchInput.value = "";
    search.classList.remove("focus");
    searchIcon.classList.remove("focus");
    searchDelete.classList.remove("focus");
  }
});

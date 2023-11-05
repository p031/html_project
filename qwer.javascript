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

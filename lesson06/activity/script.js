//on clicking b1, remove disabled attribute from b2

function readyToSubmit() {
  const b2 = document.querySelector(".b2");
  b2.classList.add("btnReady");
  b2.disabled = false; //make disabled pseudo class of b2 false
  console.log('\"readyToSubmit\" complete!');
}

const numEl = document.querySelectorAll(".num");

// console.log(numEl);

numEl.forEach((num) => {
  num.innerHTML = `0`;
  incermentCounter();
  function incermentCounter() {
    let currNum = +num.innerHTML;
    const dataCeli = num.getAttribute("data-ceil");
    const incerment = dataCeli / 15;
    currNum = Math.floor(currNum + incerment);
    num.innerHTML = currNum;
    if (currNum < dataCeli) {
      setTimeout(incermentCounter, 50);
    }
  }
});

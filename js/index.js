let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let listWrapper = document.getElementById('list-wrapper');

const renderListElem = (inputArr) => {
	inputArr.forEach((item, index) => {
		listWrapper.innerHTML += `<li class=${getClassName(index)}>${item}</li>`;
	});
};

const getClassName = (index) => {
  if (index === 1 || index === 8) {
    return "shade1";
  }
  if (index === 2 || index === 4) {
    return "shade2";
  }
  if (index === 3 || index === 5 || index === 9) {
    return "shade3";
  }
  return "shade4";
}

renderListElem(arr);

const shuffleNumbers = () => {
  let shuffledArr = arr.sort(() => { return .5 - Math.random() });
  listWrapper.innerHTML = "";
  renderListElem(shuffledArr);
}

const sortNumbers = () => {
  let sortedArr = arr.sort((a, b) => { return a - b });
  listWrapper.innerHTML = "";
  renderListElem(sortedArr);
}

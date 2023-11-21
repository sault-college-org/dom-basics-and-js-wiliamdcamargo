const Appetizers = () => {
    const appetizersContent = document.createElement('div');
    appetizersContent.setAttribute('class', 'container');

    const appetizersHeader = document.createElement('h1');
    appetizersHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    appetizersHeader.innerHTML = 'APPETIZERS';

    const appetizersDiv = document.createElement('div');
    appetizersDiv.setAttribute('class', 'flex-container');
    appetizersDiv.style.display = "flex";
    appetizersDiv.style.justifyContent = "center";
    appetizersDiv.style.gap = "5px";

    const appetizersMainDiv1 = document.createElement('div');
    appetizersMainDiv1.setAttribute('class', 'child-1');
    appetizersMainDiv1.setAttribute('id', 'child-1');

    const appetizersMainDiv2 = document.createElement('div');
    appetizersMainDiv2.setAttribute('class', 'child-2');

    const appetizersMainDiv3 = document.createElement('div');
    appetizersMainDiv3.setAttribute('class', 'child-3');

    const imageOne = document.createElement('img');
    imageOne.setAttribute('src', './imgs/appertizers-1.png');
    imageOne.setAttribute('height', '250px');

    const imageTwo = document.createElement('img');
    imageTwo.setAttribute('src', './imgs/appertizers-2.png');
    imageTwo.setAttribute('height', '250px');

    const imageThree = document.createElement('img');
    imageThree.setAttribute('src', './imgs/appertizers-3.png');
    imageThree.setAttribute('height', '250px');


    appetizersContent.appendChild(appetizersHeader);
    appetizersContent.appendChild(appetizersDiv);
    appetizersDiv.appendChild(appetizersMainDiv1);
    appetizersMainDiv1.appendChild(imageOne);
    appetizersDiv.appendChild(appetizersMainDiv2);
    appetizersMainDiv2.appendChild(imageTwo);
    appetizersDiv.appendChild(appetizersMainDiv3);
    appetizersMainDiv3.appendChild(imageThree);

    return appetizersContent;
};

export default Appetizers;
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redParagraph = document.createElement('p');
redParagraph.classList.add('redParagraph');
redParagraph.style.cssText = "color: red;"
redParagraph.textContent = 'Hey! I am red';

const blueHeading = document.createElement('h3');
blueHeading.classList.add('blueHeading');
blueHeading.style.cssText = "color: blue;"
blueHeading.textContent = 'I am a blue H3';

const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pinkDiv');
pinkDiv.style.cssText = "border: 2px solid black; background-color: pink;"

const heading1 = document.createElement('h1');
heading1.classList.add('heading1');
heading1.textContent = 'I am in a div';

const p1 = document.createElement('p');
p1.classList.add('para1');
p1.textContent = 'ME TOO!';

container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blueHeading);

pinkDiv.appendChild(heading1);
pinkDiv.appendChild(p1);

container.appendChild(pinkDiv);
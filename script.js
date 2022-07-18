const stars = document.querySelectorAll('.star');
const icons = document.querySelectorAll('.nav-item');
const hightlight = document.createElement('span');

hightlight.classList.add('highlight');
document.body.append(hightlight);

function showName(e) {

    const text = e.target.firstElementChild;
    text.style.display = "block";
    hightlight.append(text);

    const iconCoord = this.getBoundingClientRect();
    const coords = {
      width: text.width,
      height: text.height,
      top: iconCoord.y + window.scrollY,
      left: iconCoord.x + window.scrollX
    }

    hightlight.style.width = `${coords.width + 100}px`;
    hightlight.style.height = `${coords.height + 100}px`;
    hightlight.style.transform = `translate(${coords.left + 60}px, ${coords.top - 12}px)`;
    hightlight.style.padding = '20px 20px 20px 10px';

}

function hideName(e) {

    const text = hightlight.firstChild;
    text.style.display = "none";
    hightlight.style.padding = '0px';
    e.target.prepend(text);

}

function switchStar(e) {

    if (e.target.alt == 'StarOff') {

        e.target.src = "./images/black/star-fill.png";
        e.target.alt = 'StarOn';

    } else {

        e.target.src = "./images/black/star.png";
        e.target.alt = 'StarOff';

    }
}

icons.forEach(icon => icon.addEventListener('mouseenter', showName));
icons.forEach(icon => icon.addEventListener('mouseleave', hideName));
stars.forEach(star => star.addEventListener('click', switchStar));
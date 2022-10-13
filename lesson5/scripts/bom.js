const btn = document.getElementById('submit');
const inp = document.getElementById('favchap');
const lst = document.querySelector('ul');

btn.onclick = function () {
    var input = inp.value;
    inp.value = '';

    const element = document.createElement('li');

    const content = document.createElement('p');
    content.textContent = input;

    const button = document.createElement('button');
    button.textContent = '❌';
    /*
    Just because I know you'll ask, yes I could use an event listener.
    But for real, button has a built-in onclick method. It feels like bad practice to not use it. 

    button.addEventListener('click', function handleClick(event) {
        element.remove();
    });
    */

    button.onclick = function () {
        element.remove();
    }

    element.appendChild(content);
    element.appendChild(button);

    lst.appendChild(element);
    inp.focus();
}
const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleClick(e);
    });
});
function handleClick(btn) {
    let text = btn.target.outerText;
    let equation = '';
    if (text === '=') {
        // run calcfunction
    }
    else if (text === 'C') {
        //clear input
    }
    else {
        equation += text;
        input.value += equation;
    }
}

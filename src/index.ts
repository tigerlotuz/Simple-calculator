const buttons: NodeList = document.querySelectorAll('button')
const input: HTMLInputElement = document.querySelector('input')
let equation: string = ''

buttons.forEach(btn => {
    btn.addEventListener('click', (e: Event) => {
        handleClick(e)
    })
})

function handleClick(btn: any): void {

    let text = btn.target.outerText
    input.value = ''

    if (text === '=') {
        // run calcfunction
        const results: string = calc(equation)
        input.value = results

    } else if (text === 'C') {
        //clear input
        input.value = ''
        equation = ''
    } else {
        equation += text
        input.value += equation
    }
}
function calc(equation: string): string {
    let res = eval(equation)
    return res.toString()
}
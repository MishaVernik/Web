export default class CalculatorView {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay(currentOperand, previousOperand, operation) {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(currentOperand)
        if (operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(previousOperand)} ${operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}
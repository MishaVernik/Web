
export default class CalculatorModel {
    constructor() {
        this.numberButtons = document.querySelectorAll('[data-number]')
        this.operationButtons = document.querySelectorAll('[data-operation]')
        this.equalsButton = document.querySelector('[data-equals]')
        this.deleteButton = document.querySelector('[data-delete]')
        this.allClearButton = document.querySelector('[data-all-clear]')
        this.previousOperandTextElement = document.querySelector('[data-previous-operand]')
        this.currentOperandTextElement = document.querySelector('[data-current-operand]')
        this.binaryToDecimal = document.querySelector('[data-b2d]')
        this.decimalToBinary = document.querySelector('[data-d2b]')
    }

    static get binaryToDecimal() {
        return this.binaryToDecimal
    }
    
    static get decimalToBinary() {
        return this.decimalToBinary
    }

    static get numberButtons() {
        return this.numberButtons
    }

    static get operationButtons() {
        return this.operationButtons
    }

    static get equalsButton() {
        return this.equalsButton
    }

    static get deleteButton() {
        return this.deleteButton
    }

    static get allClearButton() {
        return this.allClearButton
    }

    static get previousOperandTextElement() {
        return this.previousOperandTextElement
    }

    static get currentOperandTextElement() {
        return this.currentOperandTextElement
    }
}
export default class CalculatorController {

    constructor() {
        this.clear()      
    }

    static get currentOperand() {
        return this.currentOperand
    }

    static get previousOperand() {
        return this.previousOperand
    }

    static get operation() {
        return this.operation
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    binary2Decimal(){
        console.log(this.currentOperand)
        console.log(parseInt(this.currentOperand.toString(), 10).toString(2))
        this.currentOperand =  parseInt(this.currentOperand.toString(), 10).toString(2)
        this.previousOperand = ''
        this.operation = undefined
    }

    decimal2Binary(){
        console.log(this.currentOperand)
        console.log(parseInt(this.currentOperand.toString(), 2).toString(10))
        for (var  i = 0; i < this.currentOperand.toString().length; i++){
            if (this.currentOperand.charAt(i) == '0' || this.currentOperand.toString().charAt(i) == '1'){

            }else{
                return
            }
        }
        this.currentOperand =  parseInt(this.currentOperand.toString(), 2).toString(10)
        this.previousOperand = ''
        this.operation = undefined
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break            
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

}
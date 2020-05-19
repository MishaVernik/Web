import CalculatorModel from './model/calculatorModel.js'
import CalculatorController from './controller/calcuatorController.js'
import CalculatorView from './view/calculatorView.js'

class CalculatorBuilder {
  constructor() {
    this.model = new CalculatorModel()
    this.view = new CalculatorView(this.model.previousOperandTextElement, this.model.currentOperandTextElement)
    this.controller = new CalculatorController()

    this.InitNumberButtons()

    this.InitOperationButtons()

    this.InitEqualsButton()

    this.InitAllClearButton()

    this.InitDeleteButton()

    this.InitB2D()

    this.InitD2B()
  }

  InitDeleteButton() {
    this.model.deleteButton.addEventListener('click', button => {
      this.controller.delete()
      this.view.updateDisplay(this.controller.currentOperand, this.controller.previousOperand, this.controller.operation)
    })
  }

  InitAllClearButton() {
    this.model.allClearButton.addEventListener('click', button => {
      this.controller.clear()
      this.view.updateDisplay(this.controller.currentOperand, this.controller.previousOperand, this.controller.operation)
    })
  }

  InitEqualsButton() {
    this.model.equalsButton.addEventListener('click', button => {
      this.controller.compute()
      this.view.updateDisplay(this.controller.currentOperand, this.controller.previousOperand, this.controller.operation)
    })
  }

  InitOperationButtons() {
    this.model.operationButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.controller.chooseOperation(button.innerText)
        this.view.updateDisplay(this.controller.currentOperand, this.controller.previousOperand, this.controller.operation)
      })
    })
  }

  InitNumberButtons() {
    this.model.numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.controller.appendNumber(button.innerText)
        this.view.updateDisplay(this.controller.currentOperand, this.controller.previousOperand, this.controller.operation)
      })
    })
  }

  InitB2D(){
    this.model.binaryToDecimal.addEventListener('click', button => {
      this.controller.binary2Decimal()
      this.view.updateDisplay(this.controller.currentOperand, this.controller.previousOperand, this.controller.operation)
    })
  }

  InitD2B(){
    this.model.decimalToBinary.addEventListener('click', button => {
      this.controller.decimal2Binary()
      this.view.updateDisplay(this.controller.currentOperand, this.controller.previousOperand, this.controller.operation)
    })
  }
}



const calculator = new CalculatorBuilder()


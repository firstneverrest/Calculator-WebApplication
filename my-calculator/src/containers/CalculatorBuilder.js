import React, {Component} from 'react'

import ResultScreen from '../components/ResultScreen'
import CalculatorPanel from '../components/CalculatorPanel'
import CalculatorHistory from '../components/CalculatorHistory'

class CalculatorBuilder extends Component {

    state = {
        result: "",
        history: "",
        operation: "",
        isOperated: false,
        
    }
    
    // get clicked value from panel, keep in the state 
    // and display on the result screen
    getPanelValueHandler = (value) => {
        let oldResult = this.state.result;
        const oldHistory = this.state.history;

        let newResult;
        let newHistory;

        if (this.state.result === "=NaN" || this.state.result === "=Infinity") return
        
        // limit amount of number
        if (oldResult.length > 11) {
            this.setState({result: "exceed number"})
            return ;
        }

        if (oldResult.toString().charAt(0) === "0") {
            let array = [".", "+", "-", "×", "÷"];
            if (array.indexOf(value) === -1) return
        }

        // if the result is appeared and press other that is not number
        if (oldResult.toString().charAt(0) === "=") {
            let newValue = parseInt(value);
            if (!Number.isNaN(newValue) || newValue === "+/-") this.clearAll();
        }
        
        // when user press operator
        if (value === "+" || value === "-" || value === "×" || value === "÷") {
            if (oldResult.length === 0 && oldHistory.length === 0) return;
            
            let i, resultString = "";
            for (i = 0; i < oldResult.length; i++) {
                resultString += oldResult[i];
            }   

            // cut = symbol
            if (this.state.isOperated) resultString = oldResult.slice(1)

            newHistory = resultString + value;

            if (oldResult.length === 0) {
                newHistory = oldHistory.slice(0,-1);
                newHistory += value;
                this.setState({history: newHistory});
                return ;
            }

            this.setState({history: newHistory}); // update history
            this.setState({result: ""}); // reset result screen
            this.setState({operation: value}); // keep operation

        } 
        
        else if (value === "="){
            let operator = oldHistory.slice(-1);
            let firstNumber = parseFloat(oldHistory.slice(0,-1));
            let secondNumber = parseFloat(oldResult);
            let resultNumber = 0;

            switch (operator) {
                case "+":
                    resultNumber = firstNumber + secondNumber;
                    break;
                case "-":
                    resultNumber = firstNumber - secondNumber;
                    break;
                case "×":
                    resultNumber = firstNumber * secondNumber;
                    break;
                case "÷":
                    resultNumber = firstNumber / secondNumber;
                break;
                default:
                    break;
            }

            if (!Number.isInteger(resultNumber)) resultNumber = resultNumber.toFixed(2);
            
            if (this.getNumberDigit(resultNumber) > 11) {
                this.setState({result: "exceed number"})
                return ;
            }

            resultNumber = resultNumber.toString();
            resultNumber = "=" + resultNumber;

            newHistory = oldHistory + oldResult;
            this.setState({isOperated: true})
            this.setState({history: newHistory})
            this.setState({result: resultNumber})
        } 
        
        else if (value === "+/-") {
            let number;
            if (oldResult.toString().charAt(0) === "=") return ;
            
            number = parseFloat(oldResult);
            number = this.changePositiveNegative(number).toString();
            
            this.setState({result: number})
        } 
        // number
        else if (!Number.isNaN(value)) {
            if (this.state.isOperated === true) {
                this.setState({result: value})
                this.setState({isOperated: false})
                return;
            }
        
            newResult = oldResult + value;
            this.setState({result: newResult})
        } 
    }

    // get digit
    getNumberDigit = (number) => {
        return number.toString().length;
    }
    // clear entry
    clearEntry = () => {
        if (this.state.isOperated === true) {
            this.setState({result: ""});
            this.setState({history: ""});
        }
        this.setState({result: ""});
    }

    clearAll = () => {
        this.setState({result: ""});
        this.setState({history: ""});
    }

    // backspace, delete one value from the end
    deleteLast = () => {
        if (this.state.isOperated === true) {
            this.setState({result: ""});
            this.setState({history: ""});
            return;
        }
        let oldResult = this.state.result
        oldResult = oldResult.slice(0,-1)  
        this.setState({result: oldResult});
    }

    changePositiveNegative = (number) => -number;
    
    // display result on the screen when click equal button

    render() {
        return (
            <div className="CalculatorBuilder">
                <CalculatorHistory/>
                <ResultScreen result={this.state.result} history={this.state.history}/>
                <CalculatorPanel getPanelValue={this.getPanelValueHandler}
                                 clearEntry={this.clearEntry}
                                 clearAll={this.clearAll}
                                 deleteLast={this.deleteLast}
                                 outputResult={this.outputResult}/>
            </div>
        );
    }
}

export default CalculatorBuilder;
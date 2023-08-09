import { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue("0.");
      setWaitingForSecondOperand(false);
    } else if (displayValue.indexOf(".") === -1) {
      setDisplayValue(displayValue + ".");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (nextOperator === "%") {
      const percentValue = inputValue / 100;
      setDisplayValue(String(percentValue));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(true);
    } else {
      if (operator && waitingForSecondOperand) {
        setOperator(nextOperator);
        return;
      }

      if (firstOperand === null) {
        setFirstOperand(inputValue);
      } else if (operator) {
        const result = calculate();
        setDisplayValue(String(result));
        setFirstOperand(result);
      } else {
        setFirstOperand(inputValue);
      }

      setWaitingForSecondOperand(true);
      setOperator(nextOperator);
    }
  };

  const calculate = () => {
    const inputValue = parseFloat(displayValue);

    switch (operator) {
      case "+":
        return firstOperand + inputValue;
      case "-":
        return firstOperand - inputValue;
      case "*":
        return firstOperand * inputValue;
      case "/":
        return firstOperand / inputValue;
      default:
        return inputValue;
    }
  };

  const toggleSign = () => {
    setDisplayValue((prevDisplayValue) => {
      const newValue = parseFloat(prevDisplayValue) * -1;
      return String(newValue);
    });
  };

  //KEY EVENTS:

  return (
    <div className="container">
      <div>
        <div className="display">{displayValue}</div>
        <div className="keypad">
          <div className="row">
            <button className="toggles" onClick={() => clearDisplay()}>
              AC
            </button>
            <button className="toggles" onClick={() => toggleSign()}>
              +/-
            </button>
            <button className="toggles" onClick={() => performOperation("%")}>
              %
            </button>
            <button className="operators" onClick={() => performOperation("/")}>
              ÷
            </button>
          </div>
          <div className="row">
            <button onClick={() => inputDigit("7")}>7</button>
            <button onClick={() => inputDigit("8")}>8</button>
            <button onClick={() => inputDigit("9")}>9</button>
            <button className="operators" onClick={() => performOperation("*")}>
              ×
            </button>
          </div>
          <div className="row">
            <button onClick={() => inputDigit("4")}>4</button>
            <button onClick={() => inputDigit("5")}>5</button>
            <button onClick={() => inputDigit("6")}>6</button>
            <button className="operators" onClick={() => performOperation("-")}>
              −
            </button>
          </div>
          <div className="row">
            <button onClick={() => inputDigit("1")}>1</button>
            <button onClick={() => inputDigit("2")}>2</button>
            <button onClick={() => inputDigit("3")}>3</button>
            <button className="operators" onClick={() => performOperation("+")}>
              +
            </button>
          </div>
          <div className="row">
            <button className="doublewidth" onClick={() => inputDigit("0")}>
              0
            </button>
            <button onClick={() => inputDecimal()}>.</button>
            <button
              className="operators doublewidth"
              onClick={() => performOperation("=")}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

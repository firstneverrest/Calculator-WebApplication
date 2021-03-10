import React from 'react'

const CalculatorPanel = (props) => {

    // special symbol: ⌫, ÷
    return (
        <div className="CalculatorPanel" >
            <div onClick={() => props.clearEntry()} className="CalculatorPanel__clearEntry"><button>CE</button></div>
            <div onClick={() => props.clearAll()} className="CalculatorPanel__clearAll"><button>C</button></div>
            <div onClick={() => props.deleteLast()} className="CalculatorPanel__delete"><button>&larr;</button></div> 
            <div onClick={() => props.getPanelValue("÷")} className="CalculatorPanel__divide"><button>÷</button></div>
            <div onClick={() => props.getPanelValue("7")} className="CalculatorPanel__7"><button>7</button></div>
            <div onClick={() => props.getPanelValue("8")} className="CalculatorPanel__8"><button>8</button></div>
            <div onClick={() => props.getPanelValue("9")} className="CalculatorPanel__9"><button>9</button></div>
            <div onClick={() => props.getPanelValue("×")} className="CalculatorPanel__multiply"><button>×</button></div>
            <div onClick={() => props.getPanelValue("4")} className="CalculatorPanel__4"><button>4</button></div>
            <div onClick={() => props.getPanelValue("5")} className="CalculatorPanel__5"><button>5</button></div>
            <div onClick={() => props.getPanelValue("6")} className="CalculatorPanel__6"><button>6</button></div>
            <div onClick={() => props.getPanelValue("-")} className="CalculatorPanel__subtract"><button>-</button></div>
            <div onClick={() => props.getPanelValue("1")} className="CalculatorPanel__1"><button>1</button></div>
            <div onClick={() => props.getPanelValue("2")} className="CalculatorPanel__2"><button>2</button></div>
            <div onClick={() => props.getPanelValue("3")} className="CalculatorPanel__3"><button>3</button></div>
            <div onClick={() => props.getPanelValue("+")} className="CalculatorPanel__plus"><button>+</button></div>
            <div onClick={() => props.getPanelValue("+/-")} className="CalculatorPanel__prefix"><button>+/-</button></div>
            <div onClick={() => props.getPanelValue("0")} className="CalculatorPanel__0"><button>0</button></div>
            <div onClick={() => props.getPanelValue(".")} className="CalculatorPanel__point"><button>.</button></div>
            <div onClick={() => props.getPanelValue("=")} className="CalculatorPanel__equal"><button>=</button></div>
        </div>
    )
}

export default CalculatorPanel

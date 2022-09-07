import './sum.css';
import {useState} from 'react'

const Sum = () =>{
    //declaring variable using useState hook
    const [result, setResult] = useState();
    const [operation, setOperation] = useState()
    const [showResult, setShowResult] = useState(false)
    const [FirstNumber, setFirstNumber] = useState();
    const [SecondNumber, setSecondNumber] = useState();
    
    const clearFields = () =>{
        setFirstNumber('');
        setSecondNumber('')
    }

    const performOperation = (e) =>{
        //Setting operation tye
        setOperation(e.target.value)

        //Checking the operation performed by user
        switch(e.target.value){
            
            //For addition
            case 'addition':
                const add = parseInt(FirstNumber) + parseInt(SecondNumber);
                setResult(add)
                break 
            
            //For Substraction
            case 'substraction':
                const sub = parseInt(FirstNumber) - parseInt(SecondNumber);
                setResult(sub)
                break
            
            //For Multiplication
            case 'multiplication':
                const mul = parseInt(FirstNumber) * parseInt(SecondNumber);
                setResult(mul)
                break
            
            //For Division
            case 'division':
                const div = parseInt(FirstNumber) / parseInt(SecondNumber);
                setResult(div.toFixed(2))
                break
            default :
                break
        }
        setShowResult(true);
        clearFields()
    }
    return (
    <>
        <h1>Simple Calculator</h1>
        <div className="container">
            <div className="row inputContainer">
                <div class="col">
                    <div class="input-group mb-3">
                        <span 
                            class="input-group-text" 
                            id="basic-addon1"
                        >
                            First Number
                        </span>
                        <input 
                            type="number" 
                            class="form-control" 
                            placeholder="First Number" 
                            aria-label="First Number" 
                            aria-describedby="basic-addon1"
                            value={FirstNumber}
                            onChange={(e)=>setFirstNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-3">
                        <span 
                            class="input-group-text" 
                            id="basic-addon1"
                        >
                            Second Number
                        </span>
                        <input 
                            type="number" 
                            class="form-control" 
                            placeholder="Second Number" 
                            aria-label="Second Number" 
                            aria-describedby="basic-addon1"
                            value={SecondNumber}
                            onChange={(e)=>setSecondNumber(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="row buttonContainer">
                <div className="col">
                    <button 
                        type="button"
                        class="btn  btn-outline-success"
                        value='addition'
                        onClick={(e)=>{
                            performOperation(e)
                        }}
                    >
                        Addition
                    </button>
                </div>
                <div className="col">
                    <button 
                        type="button"
                        class="btn  btn-outline-danger" 
                        value='substraction'
                        onClick={(e)=>{
                            performOperation(e)
                        }}
                    >
                        Substract
                    </button>
                </div>
                <div className="col">
                    <button 
                        type="button" 
                        class="btn  btn-outline-warning" 
                        value='multiplication'
                        onClick={(e)=>{
                            performOperation(e)
                        }}
                    >
                        Multiply
                    </button>
                </div>
                <div className="col">
                    <button 
                        type="button" 
                        class="btn  btn-outline-info" 
                        value='division'
                        onClick={(e)=>{
                            performOperation(e)
                        }}
                    >
                        Divide
                    </button>
                </div>
            </div>
            <div className={showResult ? 'show' : "hide"}>
                <h4 id='result'>{`The ${operation} is ${result}`}</h4>
            </div>
        </div>
    </>
)}

export default Sum;
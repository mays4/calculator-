const dupOpRegex = /[+/*]?-?\d+\.?\d*/g;
const App = () => {
 
  const [expression,setExpression]=React.useState("0")
  const [answer,setAnswer]=React.useState("0")
  const [decimal,setDecimal] = React.useState(false)
  const [flag,setFlag]= React.useState(false)
  // const clear = () => {
  //  setExpression((prev)=> (prev.split("").slice(0,expression.length-1).join(""))
  //  )
  //   setAnswer(0);
  // };
  const allClear=()=>{
    setExpression("0");
    setAnswer("0");
    setDecimal(false)
  }
  const display=(symbol)=>{
    let currentanswer =  answer;
    let currentflag = flag;
    let currentexpression = expression;
    console.log("s",symbol)
    switch(true){
      case symbol === "0" ||
       symbol === "1" ||
       symbol === "2" ||
       symbol === "3" ||
       symbol === "4" ||
       symbol === "5" ||
       symbol === "6" ||
       symbol === "7" ||
       symbol === "8" ||
       symbol === "9" :
      
       if( currentanswer !== "0"  ){
          currentanswer += symbol; 
          currentflag=false;
       } else{
        currentanswer = symbol;
       }
       if( currentexpression !== "0"  ){
       currentexpression += symbol; 
        currentflag=false;
     } else{
     currentexpression = symbol;
     }

    
      break
      case  symbol === "+" ||
       symbol === "-" ||
       symbol === "*" ||
       symbol === "/" :
       if(!currentflag){
        currentexpression += symbol;
        // currentflag = true;
         setDecimal(false)
       }else{
            const newNumber = currentexpression.slice(0,currentexpression.length-1);
            currentexpression=newNumber;
            currentexpression+=symbol
       }
       break
       case symbol === "AC":
        currentanswer="0"
        currentexpression="0"
         currentflag=false
         setDecimal(false)
       break
       case symbol === "=":
         currentexpression = eval(currentexpression.match(/[+/*]?-?\d+\.?\d*/g).join(' '))
         currentflag=false
         setDecimal(true)

         break
       case symbol === ".":
         if(!decimal){
          currentexpression += "." 
          setDecimal(true)
         }
    }
    setAnswer( currentanswer)
     setExpression(currentexpression)
    setFlag(currentflag)

  }
  
  return (
    <div className="container">
      <div className="grid">
        <div id="dis">
          <div id="display" type="text"  >{expression}</div>
          {/* <div  className="total">{answer}</div> */}
        </div >
        <div onClick={allClear} className="pad red" id="clear"  > AC</div>
        {/* <div  className="pad red" id="clear"> C</div> */}
        <div onClick={()=> display("/")} className="pad" id="divide" > /</div>
        <div onClick={()=> display("*")} className="pad" id="multiply" >X</div>
        <div onClick={()=> display("7")} className="pad dark-gray" id="seven">7 </div>
        <div onClick={()=> display("8")} className="pad dark-gray" id="eight">8</div>
        <div onClick={()=> display("9")} className="pad dark-gray" id="nine">9</div>
        <div onClick={()=> display("-")} className="pad" id="subtract" > -</div>
        <div onClick={()=> display("6")} className="pad dark-gray" id="six">6</div>
        <div onClick={()=> display("5")} className="pad dark-gray" id="five">5</div>
        <div onClick={()=> display("4")} className="pad dark-gray" id="four">4</div>
        <div onClick={()=> display("+")} className="pad" id="add" >+</div>
        <div onClick={()=> display("3")} className="pad dark-gray" id="three">3</div>
        <div onClick={()=> display("2")} className="pad dark-gray" id="two">2</div>
        <div onClick={()=> display("1")} className="pad dark-gray" id="one">1</div>
        <div onClick={()=> display("=")}  className="pad blue" id="equals">=</div>
        <div onClick={()=> display("0")} className="pad dark-gray" id="zero">0 </div>
        <div onClick={()=> display(".")} className="pad dark-gray" id="decimal">.</div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

import React from 'react'
import './Home.css'
import Button from '@material-ui/core/Button';

var keypad = [
    ["<"],
    [7, 8, 9, '/'],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [0, '.', '=', "+"]
]

function Home() {

    const [expression, setExpression] = React.useState(0)
    const [top_expression, setTopExpression] = React.useState("Ans")

    const [value1, setvalue1] = React.useState(0)
    const [value2, setvalue2] = React.useState(0)

    const [operand, setOperand] = React.useState("")

    const [present_value, setPresentValue] = React.useState('value1')

    var add_to_expression = (sub_item) => {

        //backspace
        if(sub_item==="<"){

            if(expression.toString().length === 1){
                setExpression(0)
                return
            }

            var temp = expression.toString().slice(0,expression.toString().length-1)

            setExpression(temp)
            return
        }

        //calculate
        if(sub_item==="="){
            cal();
            return
        }

        //keyboard
        if(expression === 0){
            setExpression(sub_item);
        }
        else{
            setExpression(expression.toString() + sub_item);
        }

        if(sub_item==="+"){
            setOperand("+")
            setPresentValue('value2');
            return
        }

        if(present_value === 'value1'){
            setvalue1(value1.toString()+sub_item);
        }
        else if(present_value === 'value2'){
            setvalue2(value2.toString()+sub_item);
        }
    }

    var cal = ()=>{
        if(operand==="+"){
            setTopExpression(expression);
            setExpression(parseInt(value1)+parseInt(value2));
        }

        setvalue1(parseInt(value1)+parseInt(value2))
        setvalue2(0)

        return
    }

    return (
        <div>
            <div className="wrap" >
                <table className="calc" >
                    <tr>
                        <td colSpan="4" >
                            <div className="screen" >
                                <div className="top-div" >
                                    {top_expression}
                                </div>
                                <div className="bottom-div" >
                                    {expression}
                                </div>
                            </div>
                        </td>
                    </tr>

                    {
                        keypad.map(item => {
                            return (
                                <tr>
                                    {
                                        item.map(sub_item => {
                                            return (
                                                <td className="cell" >
                                                    <Button
                                                        style={{
                                                            width: "100%",
                                                            backgroundColor: add_bg_color(sub_item),
                                                            color: add_text_color(sub_item)
                                                        }}
                                                        onClick={()=>{add_to_expression(sub_item)}}
                                                        disableElevation
                                                        variant="contained">
                                                        {sub_item}
                                                    </Button>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default Home


function add_bg_color(character) {
    if (character === "=") {
        return "#4285f4"
    }
    else {
        return "#f1f3f4"
    }
}

function add_text_color(character) {
    if (character === "=") {
        return "white"
    }
    else {
        return "black"
    }
}
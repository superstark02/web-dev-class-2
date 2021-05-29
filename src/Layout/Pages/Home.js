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
    return (
        <div>
            <div className="wrap" >
                <table className="calc" >
                    <tr>
                        <td colSpan="4" >
                            <div className="screen" >

                            </div>
                        </td>
                    </tr>
                    
                    {
                        keypad.map(item => {
                            return (
                                <tr>
                                    {
                                       item.map(sub_item=>{
                                           return(
                                               <td className="cell" >
                                                   <Button 
                                                   style={{width:"100%"}}
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

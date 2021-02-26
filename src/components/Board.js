import React, {useState} from "react";
import {render} from "@testing-library/react";
import axios from 'axios';

function Board() {
    // console.log(this.innerText)
//html += "<td id ='t" + y +""+ i + "' onClick={console.log(this.innerText)}>"+y+"</td>";
    let thesi = [0,0,0,0,0,0,0,0];
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [board, setBoard] = useState([]);

    const getBoard = () =>{
        axios.get(`http://localhost:80/ADISE20_164630/back/lib/api.php/showboard?outputType=json`).then(res => {
            const kati = res.data;
            setBoard({kati});
            console.log(kati)
        })
    }

    const reset = () => {
        axios.post(`http://localhost/ADISE20_164630/back/lib/api.php/resetboard`).then(res=>{

        })
    }
    reset();

    const handleClick = (j,i) => {

        getBoard();

        thesi[j] += 1;
        let kati = document.getElementById("t" +j+thesi[j]);

        let katipanw = document.getElementById("t" +j+6);
        if (!( katipanw.classList.contains('yourColor'))){
            kati.classList.remove('board');
            kati.classList.add('yourColor');

        }else{
            alert("Δεν μπορείς να βάλεις πιόνι εδώ.")
        }

    }

    let i;
    let y;
    let table = new Array(6);
    for (i = 6; i >0; i--) {
        table[i] = new Array(6);
        for (y = 1; y <=7; y++) {
            table [i][y] = y;
        }
    }

    return (

        // <table className="board">
        //     <tr>
        //         <td>1,6</td>
        //         <td>2,6</td>
        //         <td>3,6</td>
        //         <td>4,6</td>
        //         <td>5,6</td>
        //         <td>6,6</td>
        //         <td>7,6</td>
        //     </tr>
        //     <tr>
        //         <td>1,5</td>
        //         <td>2,5</td>
        //         <td>3,5</td>
        //         <td>4,5</td>
        //         <td id="t55">5,5</td>
        //         <td id="t65">6,5</td>
        //         <td id="t75">7,5</td>
        //     </tr>
        //     <tr>
        //         <td id="t14">1,4</td>
        //         <td id="t24">2,4</td>
        //         <td id="t34">3,4</td>
        //         <td id="t44">4,4</td>
        //         <td id="t54">5,4</td>
        //         <td id="t64">6,4</td>
        //         <td id="t74">7,4</td>
        //     </tr>
        //     <tr>
        //         <td id="t13">1,3</td>
        //         <td id="t23">2,3</td>
        //         <td id="t33">3,3</td>
        //         <td id="t43">4,3</td>
        //         <td id="t53">5,3</td>
        //         <td id="63">6,3</td>
        //         <td id="t73">7,3</td>
        //     </tr>
        //     <tr>
        //         <td id="t12">1,2</td>
        //         <td id="t22" >2,2</td>
        //         <td id="t32">3,2</td>
        //         <td id="t42">4,2</td>
        //         <td id="t52">5,2</td>
        //         <td id="t62">6,2</td>
        //         <td id="t72">7,2</td>
        //     </tr>
        //     <tr>
        //         <td id="t11">1,1</td>
        //         <td id="t21">2,1</td>
        //         <td id="t31">3,1</td>
        //         <td id="t41">4,1</td>
        //         <td id="t51">5,1</td>
        //         <td id="t61">6,1</td>
        //         <td id="t71">7,1</td>
        //     </tr>
        // </table>
        <div>
            <table>
            {
                table.map((r,i)=>
                    <tr className="board">{
                        r.map((c,j)=>
                            <td className="board" id={"t" + j + (parseInt(7) - parseInt(i))  } onClick={()=> handleClick(j,7-i)}>{c}</td>
                        )
                    }</tr>
                )
            }
            </table>
        </div>

    )
}

export default Board


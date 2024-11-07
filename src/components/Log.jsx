const Log = ({gameTurns}) =>{
    let loggedInfo = [] ;
    for(var turns of gameTurns){
        const {square, player} = turns;
        const {row, col}  = square;
        loggedInfo.push(`${player} (${row},${col})`)
    }
   return (<ol>
        {loggedInfo.map(x=> <li key={x}>{x}</li>)}
   </ol>)
}

export default Log;
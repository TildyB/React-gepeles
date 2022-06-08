
import React from 'react'


import { useState,useEffect,useRef} from 'react';
import './App.css';

function Gepeles() {
 const ref= useRef(null);

  const[leutes,setLeutes]=useState("")
  const[mp,setMp] = useState(5)
  const[gameRunning,setGameRunnig]= useState(false)
  const [pontszam,setPontszam] =useState(0)
  const[kikapcs,setKikapcs] = useState(false)
  const [textTiltva,setTextTiltva] = useState(false)
  const [vege,setVege] = useState(false)

  const valtozasFigyeles=(event)=>{
    setLeutes(event.target.value)
      if(leutes ===""){
        return setPontszam(0)
      }else{
        return setPontszam(leutes.split(" ").length)
      }
  }

useEffect(()=>{
  if(mp==5 && gameRunning){
    setMp(4)
  }
  if(gameRunning && mp>0){
    setTimeout(()=>{
      setMp(mp-1)
    },1000)
  }
if(mp<5 && mp>0 && gameRunning){
  setKikapcs(true)
}else{
  setKikapcs(false)
}if(gameRunning){
  ref.current.focus()
}
if(mp==0){
  setTextTiltva(true)
  setVege(true)
  setMp(5)
  setGameRunnig(false)
  clearInterval()
}
},[mp,gameRunning])


const startGame=()=>{
  console.log("start")
  ref.current.focus()
  setTextTiltva(false)
  setGameRunnig(true)
  setVege(false)
  
  setLeutes("")
  
}

/*useEffect(()=>{
  ref.current.focus()
},[textTiltva]) */

  return (
    <div className="foDoboz">
      <h1 id='title' style={{marginBottom:"0px"}}>Gépelési teszt</h1>
      <div className='aldoboz'>
          <p className='leiroSzoveg'>Tesztelt le, hogy 10 másodperc alatt mennyi szót tudsz begépelni</p>
          <textarea className='textArea' disabled={textTiltva} onChange={valtozasFigyeles} ref={ref} value={leutes} name="begepeles" id="begepeles" cols="30" rows="10"></textarea>
          <h4>A hátralévő idő :{mp}</h4>
          <button  className='ellenButton' disabled={kikapcs} onClick={startGame} >{mp>0 ? "Start Game" : "New Game"}</button>
          {textTiltva && <h1>Ennyi szót tudtál leirni {pontszam}</h1>}
      </div>


    </div>
  );
}

export default Gepeles;

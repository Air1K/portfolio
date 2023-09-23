import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFollowPointer} from "./hooks/cursor_hooks";
import Main from "./tsx-components/main/main";

function App() {
   const refScroll = useRef() as MutableRefObject<HTMLDivElement>;
   const ref = useRef(null);
   const ref_nav_1 = useRef() as MutableRefObject<HTMLDivElement>;
   const ref_nav_2 = useRef() as MutableRefObject<HTMLDivElement>;
   const ref_nav_3 = useRef() as MutableRefObject<HTMLDivElement>;
   const ref_nav_4 = useRef() as MutableRefObject<HTMLDivElement>;
   const {point} = useFollowPointer(ref);
   const [active, setActive] = useState(0)
   const scrollHandler = ()=>{
      if(ref_nav_1.current.getBoundingClientRect().top > 0){
         setActive(0)

         return;
      }
      if(ref_nav_2.current.getBoundingClientRect().top > 0){
         setActive(1)
         return;
      }
      if(ref_nav_3.current.getBoundingClientRect().top > 0){
         setActive(2)
         return;
      }
      if(ref_nav_4.current.getBoundingClientRect().top > 0){
         setActive(3)
         return;
      }

   }
   // useEffect(()=>{
   //    const rect = ref_nav_1.current.getBoundingClientRect();
   //    console.log(ref_nav_1.current.getBoundingClientRect())
   // },[])
   return (
      <div ref={refScroll} id={'index'} onScroll={() => scrollHandler()}>
         <div className="app">
            <div ref={ref} className={'cursor'}
                 style={{background: `radial-gradient(600px at ${point.x}px ${point.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}/>
            <Main active={active} ref_nav_1={ref_nav_1} ref_nav_2={ref_nav_2} ref_nav_3={ref_nav_3} ref_nav_4={ref_nav_4}/>
         </div>
      </div>

   );
}

export default App;

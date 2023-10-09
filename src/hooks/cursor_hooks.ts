import {useState, RefObject, useEffect} from "react";
import * as _ from 'lodash'

export function useFollowPointer(ref: RefObject<HTMLElement>, widthWindow: boolean) {
   const [point, setPoint] = useState({x: 0, y: 0});
   let handlePointerMove: any
   useEffect(() => {
      console.log("------------------", widthWindow)

      if (!ref.current) return;
      window.removeEventListener("pointermove", handlePointerMove)
      handlePointerMove = (event: MouseEvent) => {
         if(window.innerWidth < 1024) return;
         const x = event.x;
         const y = event.y;
         setPoint({x, y});
      };
      window.addEventListener("pointermove", handlePointerMove);
      return () => {
         window.removeEventListener("pointermove", handlePointerMove)
      };
   }, [widthWindow]);

   return {point};
}
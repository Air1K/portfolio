import {useState, RefObject, useEffect} from "react";
import * as _ from 'lodash'

export function useFollowPointer(ref: RefObject<HTMLElement>) {
   const [point, setPoint] = useState({x: 0, y: 0});

   useEffect(() => {
      if (!ref.current) return;
      const handlePointerMove = (event: MouseEvent) => {
         const x = event.x;
         const y = event.y;
         setPoint({x, y});
      };
      window.addEventListener("pointermove", handlePointerMove);
      return () => {
         window.removeEventListener("pointermove", handlePointerMove)
      };
   }, []);

   return {point};
}
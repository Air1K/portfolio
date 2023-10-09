import React from "react";

export function editOpacityDiv(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
   let sibling: any = event.currentTarget
   while (sibling.previousSibling) {
      sibling = sibling.previousSibling
      sibling.style.opacity = 0.5
   }
   sibling = event.currentTarget
   while (sibling.nextSibling) {
      sibling = sibling.nextSibling
      sibling.style.opacity = 0.5
   }
}

export function resetOpacity(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
   let sibling: any = event.currentTarget
   while (sibling.previousSibling) {
      sibling = sibling.previousSibling
      sibling.style.opacity = 1
   }
   sibling = event.currentTarget
   while (sibling.nextSibling) {
      sibling = sibling.nextSibling
      sibling.style.opacity = 1
   }
}
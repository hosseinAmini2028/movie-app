"use client"
import { useEffect, useRef, useState } from "react"

export default function usePopup(){
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleWindowClick = (ev: Event) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current?.contains(ev.target as Node)
        ) {
          setOpen(false);
        }
      };
  
      document.addEventListener("click", handleWindowClick);
  
      return () => document.removeEventListener("click", handleWindowClick);
    }, []);
  
    return {
      open,
      setOpen,
      wrapperRef,
    };
}
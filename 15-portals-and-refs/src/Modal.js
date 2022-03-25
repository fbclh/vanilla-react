/*
 * You can think of the portal as a separate mount point (the actual DOM node which your app is put into) for your React app. A common use case for this is going to be doing modals.
 * You'll have your normal app with its normal mount point and then you can also put different content into a separate mount point (like a modal or a contextual nav bar) directly from a component. Pretty cool!
 */

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

/*
 * This concludes our intro to React! You know now nearly every feature of the React core library (there are a few more but are rarely needed.) What makes React wonderful is not only the core library itself but the ecosystem around. Indeed, the ecosystem around it is as much a reason to learn React as React itself.
 * The modules following this one are considered to be optional modules: you don't need to know all of these; you can just pick the ones you need for your project or what interests you the most and leave the others behind. For the most part these modules will be self-contained: you don't need to complete all the optional modules to understand what's going on. Some will use the code you built in the previous modules here but feel free to clone the complete project and work from there.
 * Good job getting this far and good luck on the next modules!
 */

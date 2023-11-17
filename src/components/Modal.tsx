/** @format */

import React, { useEffect } from "react";
import { useRef } from "react";

import { useOnClickOutside } from "usehooks-ts";
type Props = {
  showModal: boolean;
  className?: string;
  closeModal: () => void;
  children: React.ReactNode;
};

export default function Modal(props: Props) {
  const ref = useRef(null);
  const handleClickOutside = () => {
    // Your custom logic here
    console.log("clicked outside");
    props.closeModal();
  };

  useOnClickOutside(ref, handleClickOutside);

  // modal close on press escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      console.log("event", event.key);

      if (event.key === "Escape") {
        console.log("event", event.key);
        props.closeModal();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props, props.closeModal]);

  return props.showModal ? (
    <div className="fixed  inset-0  z-50 flex justify-center items-center bg-gray-500/40   backdrop-blur-sm ">
      <div
        ref={ref}
        className="bg-white w-full p-4  overflow-hidden rounded-lg shadow-lg border-[1px] max-w-lg "
      >
        {props.children}
      </div>
    </div>
  ) : null;
}

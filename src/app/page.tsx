/** @format */
"use client";

import Modal from "@/components/Modal";
import Image from "next/image";

import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Home() {
  const [isModalOpen, setModal] = useState(false);

  const [animationParent] = useAutoAnimate();
  // open modal fuction

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  return (
    <div
      ref={animationParent}
      className="flex min-h-screen flex-col gap-3 p-24"
    >
      <h1 className="text-3xl font-semibold">Alert Dialog</h1>
      <p>
        A modal dialog that interrupts the user with important content and
        expects a response.
      </p>

      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
      >
        Open Modal
      </button>

      <Modal showModal={isModalOpen} closeModal={closeModal}>
        <div className="mb-4 flex  justify-between ">
          <h1 className="text-3xl font-semibold ">Are you absolutely sure?</h1>

          <IoIosCloseCircleOutline
            onClick={closeModal}
            className="text-3xl cursor-pointer"
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          aperiam autem repellat fugit velit cum sunt esse. Voluptas tenetur
          sapiente sed aliquam aut aperiam soluta voluptatum, hic exercitationem
          recusandae possimus placeat a accusantium qui provident asperiores
          inventore, corrupti necessitatibus quas numquam quo fugiat. Recusandae
          quae voluptatem maxime aperiam quisquam sequi.
        </p>
        <section className="flex justify-end gap-3 mt-4">
          <button
            onClick={closeModal}
            className="border-[1px] px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={closeModal}
            className="border-[1px] px-4 py-2 rounded-md bg-black text-white hover:bg-opacity-70 "
          >
            Continue
          </button>
        </section>
      </Modal>
    </div>
  );
}

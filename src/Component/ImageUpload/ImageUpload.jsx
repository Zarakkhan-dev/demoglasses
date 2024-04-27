import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import demoDisplay from "../../../public/emptyDisplay.jpeg";
import Link from "next/link";
const ImageUpload = () => {
  const [file, updatefile] = useState("");
  const [imageaddress, updateAddress] = useState("");
  const [UserData, updateData] = useState([]);

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      updateAddress(reader.result);
    };
  }
  const eventHandler = (e) => {
    const file = e.target.files[0];
    updatefile(file);
    previewFile(file);
  };
  const submission = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post("api/Imagehandler", { imageaddress });
      if (result) {
        alert("Image Uploaded Sucessfully!");
        updateAddress("");
        updatefile("");
      }
    } catch (error) {
      console.log(error);
    }
  };
const deleteitem = async(item)=>{
const deleteone = await axios.post("api/deletehander",{item})
if(deleteone){
  alert("delete Succesfully");
}
}
  useEffect(() => {
    async function Getresponse() {
      const response = await axios.get("api/Imagehandler");
      if (response) {
        updateData(() => {
          return response.data.response;
        });
      } else {
        console.log("data not found");
      }
    }
    Getresponse();
  }, [imageaddress,UserData,file]);

  return (
    <div className="mt-10 ">
      <form
        onSubmit={submission}
        className="flex flex-col items-center justify-center gap-4"
      >
        <div className="Input-file">
          <label className="block ">
            <span className="sr-only">Choose File</span>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              name="image"
              id=""
              accept="image/png,image/jpeg,image/jpg,image/jfif "
              onChange={eventHandler}
            />
          </label>
        </div>
        <button
          type="submit"
          className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full shadow-2xl group text-white bg-blue-400"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span className="relative">Upload The Frame</span>
        </button>
      </form>
      <Link href="/displayglasses" className="flex justify-center my-2">
        <button className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold rounded-full shadow-2xl group text-white bg-blue-400 ">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span className="relative">Demo of Frames</span>
        </button>
      </Link>
    <h1 className="text-center  text-[25px] font-extrabold">Preview Image</h1>
      <div className="image flex  mt-8 justify-center">
    
        {file === "" ? (
          <Image src={demoDisplay} alt="image" width={400} height={300} />
        ) : (
          <Image src={imageaddress} alt="image" width={400} height={200} />
        )}
      </div>
      <h1 className=" font-[900] text-center text-[3vw] mt-4 uppercase">
        Click to Delete Frames{" "}
      </h1>
          <div className="slider ">
      {UserData.map((items) => {
        return (
          <div key={items._id}  onClick={()=>deleteitem(items.imageaddress)}>
            <Image
              src={items.imageaddress}
              alt="image"
              width={400}
              height={400}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ImageUpload;

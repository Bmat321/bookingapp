import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { storage, auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [file, setfile] = useState("");
  const [data, setData] = useState({});
  const [progress, setProgress] = useState(null);
  const navigate = useNavigate();
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/bmatty/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newUser = {
        ...info,
        img: url,
      };
      await axios.post("/auth/register", newUser);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(info);

  // useEffect(() => {
  //   const uploadFile = () => {
  //     const name = new Date().getTime() + imgfile.name;
  //     console.log(name);
  //     const storageRef = ref(storage, imgfile.name);
  //     const uploadTask = uploadBytesResumable(storageRef, imgfile);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");

  //         setProgress(progress);
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //           default:
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setData((prev) => ({ ...prev, img: downloadURL }));
  //         });
  //       }
  //     );
  //   };

  //   imgfile && uploadFile();
  // }, [imgfile]);
  // console.log(data);

  // const handleInput = (e) => {
  //   const id = e.target.id;
  //   const value = e.target.value;

  //   setData({ ...data, [id]: value });
  // };

  // const handleAdd = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await createUserWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );
  //     await setDoc(doc(db, "users", res.user.uid), {
  //       ...data,
  //       timestamp: serverTimestamp(),
  //     });
  //     navigate(-1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Upload Image:{" "}
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setfile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                    id={input.id}
                  />
                </div>
              ))}

              <button
                // type="submit"
                // disabled={progress !== null && progress < 100}
                onClick={handleClick}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

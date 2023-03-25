import React, { useEffect, useState } from "react";
import { storage } from "../firebse";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UploadFilesView = () => {
  const [imgUp, setImgUp] = useState(null);
  const [imgList, setImgList] = useState([]);
  const imgListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imgUp == null) return alert("image no found! plz select img");
    const imgRef = ref(storage, `images/${imgUp.name + v4()}`);
    uploadBytes(imgRef, imgUp).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgList((prev) => [...prev, url]);
      });
      alert("Succsesfully image uploaded!");
    });
  };

  useEffect(() => {
    listAll(imgListRef).then((res) => {
      console.log(res);
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <div className="input_fild">
        <input
          type="file"
          className="input"
          onChange={(e) => {
            setImgUp(e.target.files[0]);
          }}
        />
        <button className="btn" onClick={uploadImage}>
          Upload image
        </button>
      </div>

      <div>
        {imgList.map((url) => {
          return <img src={url} alt="img" />;
        })}
      </div>
    </div>
  );
};

export default UploadFilesView;

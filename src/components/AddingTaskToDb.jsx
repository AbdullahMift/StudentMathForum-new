import React from "react";

const AddingTaskToDb = (
  detyra,
  pershkrimi,
  skripta,
  kapitulli,
  faqe,
  kerkimiDetyres,
  image
) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [fileNames, setfileNames] = useState("Asnje foto e vendosur");
  const [currTab, setcurrTab] = useState(0);

  const navigate = useNavigate();

  console.log("just changed", currTab);

  const skriptat = [
    "MATEMATIKA_VITI_1",
    "Zbirka Zadaci Matematika Za I Godina",
    "MATEMATIKA_VITI_2",
    "Zbirka Zadaci Matematika Za II Godina",
    "MATEMATIKA_VITI_3",
    "Zbirka Zadaci Matematika Za III Godina",
    "MATEMATIKA_VITI_4",
    "Zbirka Zadaci Matematika Za IV Godina",
  ];

  const [detyra, setDetyra] = useState("");
  const [pershkrimi, setPershkrimi] = useState("");
  const [skripta, setSkripta] = useState({});
  const [kapitulli, setKapitulli] = useState(1);
  const [faqe, setFaqe] = useState(1);
  const [kerkimiDetyres, setKerkimiDetyres] = useState("");
  const [image, setImage] = useState([]);

  const submitHandler = () => {
    if (detyra !== "" && kapitulli > 0 && faqe > 0 && image.length > 0) {
      // const uploadImageToStorage = async (imageFile) => {
      //   const storageRef = ref(storage, `images/${imageFile.name}`);
      //   await uploadBytes(storageRef, imageFile);
      //   return getDownloadURL(storageRef);
      // };

      const uploadImageToStorage = async (imageFile) => {
        try {
          const storageRef = ref(
            storage,
            `images/detyra-${detyra}/${imageFile.name}`
          );

          const metadata = {
            contentType: imageFile.type,
          };

          await uploadBytes(storageRef, imageFile, metadata);
          const downloadURL = await getDownloadURL(storageRef);

          console.log("Image uploaded successfully:", downloadURL);

          return downloadURL;
        } catch (error) {
          console.error("Error uploading image:", error);
          throw error;
        }
      };

      Promise.all(image.map(uploadImageToStorage))
        .then((downloadURLs) => {
          let currDetyra = {
            detyra,
            pershkrimi,
            skripta,
            kapitulli,
            faqe,
            kerkimiDetyres,
            image: downloadURLs,
          };

          fetch(
            "https://mathstudentforum-default-rtdb.firebaseio.com/detyrat.json",
            {
              method: "POST",
              body: JSON.stringify(currDetyra),
            }
          ).then((response) => {
            if (response.ok) {
              alert("Detyra u shtua me sukses!");
              setDetyra("");
              setPershkrimi("");
              setKapitulli(1);
              setFaqe(1);
              setKerkimiDetyres("");
              setImage([]);
              // setImageUrls([]);
              // setFileNames("");
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.error("Error uploading images:", error);
          // Handle errors related to image upload
        });
    } else {
      alert("Please fill all the values!");
    }
  };
  function handleSelectedTab(index) {
    setcurrTab(index + 1);
    setDropdownActive((curr) => !curr);
  }

  function deleteImage() {
    setImage((prevImages) =>
      prevImages.filter((img, index) => index !== imageIndex)
    );
  }

  function handleKerkimiDetyres(event) {
    setKerkimiDetyres(event.target.value);
  }

  return <div>AddingTaskToDb</div>;
};

export default AddingTaskToDb;

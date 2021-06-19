import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadImages } from "./redux/action";
import Header from "./Header";
import Button from "./component/Button";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();
  // const [images, setImages] = useState([]);

  // const ACCESS_KEY = "YT1GbfCx7r8xpVaP4V5wCdVgNtAzveJ3GbqMVxX8J2w";
  // const SECRET_KEY = "CwjSzsb-XbgJyrLKuv-bTFYiC3lmbL5_Q5xwSEqkFrM";

  const images = useSelector((state) => state.images);
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.loading);
  // useEffect(() => {
  //   fetch(
  //     `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=28`
  //   )
  //     .then((data) => data.json())
  //     .then((data) => setImages(data));
  // }, []);

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const handleMoreImageClick = () => {
    dispatch(loadImages());
  };

  return (
    <div>
      <h1 className="center">
        <Header />
      </h1>
      <div className="content">
        <section className="grid">
          {images.map((item) => (
            <div
              key={item.id}
              className={`item item-${Math.ceil(item.height / item.width)}`}
            >
              <img src={item?.urls?.small} alt="images" />
            </div>
          ))}
        </section>
      </div>
      {error && <h1>{error.toString()}</h1>}
      <div className="center">
        <Button
          onClick={() => !isLoading && handleMoreImageClick()}
          loading={isLoading}
        >
          {isLoading} Hit me 🎯 If You want More Images 🦁
        </Button>
      </div>
    </div>
  );
};

export default App;

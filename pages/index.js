import React, { useState, useRef, useEffect } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import useForm from "react-hook-form";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => {
  const [text, setText] = useState("Text");
  const [fontFamily, setFontFamily] = useState("Impact");
  const [fontSize, setFontSize] = useState(48);
  const [color, setColor] = useState("red");
  const [gravity, setGravity] = useState("east");
  const [imgUrl, setImgUrl] = useState("");
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange"
  });
  const onSubmit = data => {
    setText(data.text);
    setFontFamily(data.fontFamily);
    setFontSize(data.fontSize);
    setColor(data.color);
    setGravity(data.gravity);
  };
  const imgRef = useRef(null);

  useEffect(() => {
    console.log(imgRef.current.state.url);
    setImgUrl(imgRef.current.state.url);
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="MTRhYWQ1YzItMWIzNi00NGM5LWExZmYtOTNhNjA4ZGUyMzlhNjM2ODY4ODQ5OTU2ODMyNjkz"
          id="snipcart"
        />
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to Next.js!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className="row">
          <div className="card">
            <CloudinaryContext cloudName="crjars">
              <Image
                publicId="sickfits/190815164405-ammbmfoapae4jv05n2sfrdny"
                width="0.9"
                ref={imgRef}
              >
                <Transformation
                  width="300"
                  height="145"
                  overlay={{
                    fontFamily: `${fontFamily}`,
                    fontSize: `${fontSize}`,
                    fontWeight: "bold",
                    text: `${text}`
                  }}
                  gravity={gravity}
                  x="15"
                  crop="fit"
                  color={color}
                />

                <Transformation quality="auto" fetchFormat="auto" />
              </Image>
            </CloudinaryContext>
            <form onSubmit={handleSubmit(onSubmit)}>
              <>
                <label htmlFor="text">Customize Text</label>
                <input
                  name="text"
                  placeholder="text"
                  ref={register({ required: true })}
                />
                {errors.text && (
                  <p style={{ color: `red` }}>This is required</p>
                )}
              </>
              <br />
              <>
                <label htmlFor="fontSize">Change Font Size</label>
                <select name="fontSize" ref={register}>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="14">14</option>
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="24">24</option>
                  <option value="30">30</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                  <option value="60">60</option>
                  <option value="72">72</option>
                </select>
              </>
              <br />
              <>
                <label htmlFor="fontFamily">Change Font Family</label>
                <select name="fontFamily" ref={register}>
                  <option value="Impact">Impact</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Bangers">Bangers</option>
                </select>
              </>
              <br />
              <>
                <label htmlFor="gravity">Change Placement</label>
                <select name="gravity" ref={register}>
                  <option value="east">Center-Right</option>
                  <option value="north_east">Top-Right</option>
                  <option value="south_east">Bottom-Right</option>
                </select>
              </>
              <br />
              <>
                <label htmlFor="color">Pick Font Color</label>
                <input type="color" name="color" ref={register} />
              </>
              <br />
              <input type="submit" />
            </form>
            <button
              className="snipcart-add-item"
              data-item-name="Anti Trump Sticker"
              data-item-id="NoTrump123"
              data-item-image={imgUrl}
              data-item-url="https://boring-saha-7b895e.netlify.com"
              data-item-price="19.99"
              data-item-custom1-type="hidden"
              data-item-custom1-name="Img Url"
              data-item-custom1-value={imgUrl}
            >
              Buy it for $19.99
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 5px;
          width: 500px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Home;

import React from "react";
import Card from "./Card";

function CardSection() {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <Card title="Hello1" buttonName="Go to Ineuron" />
          <Card
            title="Hello2"
            buttonName="Go to Facbook"
            link="https://www.facebook.com/"
            src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Card
            title="Hello3"
            buttonName="Go to Instagram"
            link="https://www.instagram.com/"
            src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
      </div>
    </section>
  );
}

export default CardSection;

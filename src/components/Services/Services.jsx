import React from 'react';
import Fruits1 from "../../assets/fruits/fruits1.webp";
import Fruits2 from "../../assets/fruits/fruits2.png";
import Fruits3 from "../../assets/fruits/fruits3.png";


const ServicesData = [
    {
        id: 1,
        image: Fruits1,
        title: "Fresh Fruits",
        subtitle: "Fresh fruits are nutritious, delicious, and full of essential vitamins.",
        aosDelay: "300",
    },
    {
        id: 2,
        image: Fruits2,
        title: "Fresh Fruits",
        subtitle: "Fresh fruits are nature's sweet, nutritious treats, packed with vitamins and flavor.",
        aosDelay: "500",
    },
    {
        id: 3,
        image: Fruits3,
        title: "Orange Juice",
        subtitle: "Freshly squeezed orange juice, bursting with citrusy flavor and natural sweetness.",
        aosDelay: "700",
    },
];

const Services = () => {
  return (
  <div className="container my-16 space-y-4">
    {/* header section */}
    <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 data-aos="fade-up" className="text-3xl font-bold text-dark">
            Fresh and <span className="text-primary">Tasty Fruits</span>{" "}
        </h1>
        <p  
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm opacity-50">
            Fresh and tasty fruits are a delicious, nutrient-rich way to enjoy natural sweetness and vibrant flavors.
            Bursting with flavor & nutrients, fresh fruits are a perfect, healthy treat.
        </p>
    </div>

    {/* card section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ServicesData.map(({ id, image, title, subtitle, aosDelay}) => (
            <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className="p-4 text-center space-y-6">
                <img src={image} alt=""  className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"/>
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-primary">{title}</h1>
                    <p className="text-dark">{subtitle}</p>
                </div>
                </div>
        ))}
    </div>
</div>
  );
};

export default Services;

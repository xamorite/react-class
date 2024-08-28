import ShoeCard from "../ShoeCard";
import sampleShoe from "../Assets/sho.png";

const Products = () => {
  const shoes = [
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
  ];
  return (
    <div className="mx-auto text-black w-[90vw] text-center my-10">
      <h1 className="font-bold text-4xl my-10">Our Awesome Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shoes.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            name={shoe.name}
            image={shoe.image}
            price={shoe.price}
            type={shoe.type}
          />
        ))}
        <ShoeCard />
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import Container from "../../layout/Container";
import SectionTitle from "../../layout/SectionTitle";

import Bedroom from "../../assets/images/bedroom.png";
import Dining from "../../assets/images/dining.png";
import Living from "../../assets/images/living.png";

function CategorySection() {
  const categories = [
    {
      thumbnail: Dining,
      title: "Dining",
    },
    {
      thumbnail: Living,
      title: "Living",
    },
    {
      thumbnail: Bedroom,
      title: "Bedroom",
    },
  ];

  return (
    <section>
      <Container>
        <SectionTitle
          title={"Browse The Range"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <div className="category-list">
          {categories?.map((cat, index) => (
            <div className="category-list--item" key={index}>
              <img src={cat?.thumbnail} />
              <h3 className="text--h3">{cat?.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CategorySection;

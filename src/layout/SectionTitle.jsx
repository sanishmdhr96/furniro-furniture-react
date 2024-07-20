import React from "react";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section--title">
      <h2 className="text--h2">{title}</h2>
      {subtitle && <p className="text--subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;

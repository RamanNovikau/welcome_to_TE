import { useState } from "react";

export const Block = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

//examples of use 

// <Block mouseEnterCallbak={() => console.log("Block1 hovered")}>
//   <img src="image.jpg" alt="Description" />
// </Block>

// <Block mouseEnterCallbak={() => console.log("Block2 hovered")}>
//   <p>Some content</p>
// </Block>

// <Block mouseEnterCallbak={() => console.log("Block3 hovered")}>
//   <address>
//     country: USA, street: 123 Main St
//   </address>
// </Block>

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgmap = () => {
  bird: bird,
    cat, //same as cat:cat  we can use whent the key:value both same
    cow,
    dog,
    gator,
    horse;
};
function Animal_show(prop) {
  return (
    <div>
      <img alt="animal" src={svgmap[prop.type]} />
    </div>
  );
}

export default Animal_show;

import "module-alias/register";
import pretendToSerialise from "$utils/super/deep/folder/serialise";
import second from "./second";

const init = () => {
  const value = "First function called";
  const serialised = pretendToSerialise(value);
  console.log(serialised);

  second();
};

init();

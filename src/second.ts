import pretendToSerialise from "$utils/super/deep/folder/serialise";

const second = () => {
  const value = "Second function called";
  const serialised = pretendToSerialise(value);
  console.log(serialised);
};

export default second;

function getReverseObj(obj) {
  const reverseObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    reverseObj[value] = key;
  });
  return reverseObj;
}
export default getReverseObj;

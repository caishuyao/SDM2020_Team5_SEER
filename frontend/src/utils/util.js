const getType = (obj) => {
  const type = Object.prototype.toString
    .call(obj)
    .match(/^\[object (.*)\]$/)[1]
    .toLowerCase();
  if (type === "string" && typeof obj === "object") return "object"; // Let "new String('')" return 'object'
  if (obj === null) return "null"; // PhantomJS has type "DOMWindow" for null
  if (obj === undefined) return "undefined"; // PhantomJS has type "DOMWindow" for undefined
  return type;
};

export default getType;

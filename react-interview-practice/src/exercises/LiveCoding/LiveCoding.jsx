// 1. Write a getType utility that correctly detect null, arrays, functions, primitives
// 2. Only allow arrays

function LiveCoding() {
  function getType(values) {
    if (values === null) return "null";
    if (Array.isArray(values)) return "arrays";
    return typeof values;
  }

  function guardFunction(users) {
    if (!Array.isArray(users)) {
      console.log("Expected an array");
      //throw new Error("Expected an array");
    }
    return "Thanks";
  }
  return (
    <div>
      <div>TypeChecking</div>
      <div>getType([]): {getType([])}</div>
      <div>getType(null):{getType(null)}</div>
      <div>getType(42):{getType(42)}</div>
      <div>
        getType(dictionary):{getType({ name: "Mima" }) ? "true" : "false"}
      </div>
      <div>getType(function):{getType(() => {})}</div>
      <div>Guarding function argument</div>
      <div>
        guardFunction({}): {guardFunction({})}
      </div>
    </div>
  );
}

export default LiveCoding;

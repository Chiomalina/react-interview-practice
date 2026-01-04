// 1. Write a getType utility that correctly detect null, arrays, functions, primitives
// 2. Only allow arrays 

function LiveCoding() {
  function getType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
  }

  function guardFunction(users) {

  }
  return (
    <div>
      <div>TypeChecking</div>
      <div>getType([]): {getType([])}</div>
      <div>getType(null):{getType(null)}</div>
      <div>getType(42):{getType(42)}</div>
      <div>getType(function):{getType(() => {})}</div>
    </div>
  );
}

export default LiveCoding;

import { useState, useEffect } from "react";
const pageTitle = document.title;

const Support = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    count && (document.title = `${pageTitle}-${count}`)
  })
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? 'Click to support' : `Supported ${count} times`}
    </button>
  )
}

export default Support;
import { useState } from 'react'

// export default function ButtonPrueba() {

// 	const [count, setCount] = useState(0)

// 	return (
//     	<button onClick={() => setCount((count) => count + 1)}>
//     		count is {count}
//     	</button>
//   	)
// }

export default function ButtonPrueba({mensaje, onClick}) {

	return (
		<button onClick={onClick}>{mensaje}</button>
	)
}


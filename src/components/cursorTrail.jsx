// import { useState, useEffect } from 'react';

// const CursorTrail = () => {
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setPositions((prevPositions) => {
//         const newPositions = [...prevPositions, { x: event.clientX, y: event.clientY }];
//         return newPositions.slice(Math.max(newPositions.length - 20, 0)); // Keep only the last 20 positions
//       });
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setPositions((prevPositions) => prevPositions.slice(1));
//     }, 30); // Decreased from 50ms to 20ms

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <>
//       {positions.map((position, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             width: '15px',
//             height: '15px',
//             backgroundColor: 'lime',
//             left: `${position.x}px`,
//             top: `${position.y}px`,
//             transform: 'translate(-50%, -50%)',
//             pointerEvents: 'none',
//             zIndex: 9999,
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default CursorTrail;
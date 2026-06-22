// import CounterCard from "../../common/CounterCard";
// import { statsData } from "../../common/data";
// export default function CounterHome() {
//   return (
//     <section className="bg-white rounded-2xl">
//       <div className="container">
//         <div className="grid grid-cols-2 xl:grid-cols-4 gap-0 xl:gap-6 py-4 md:py-6.5 xl:py-8">
//           {statsData.map((stat, i) => (
//             <CounterCard key={i} {...stat} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import CounterGrid from "../Sections/CounterGrid";

export default function CounterHome() {
  return (
    <section className="bg-white rounded-2xl">
      <div className="container">
        <CounterGrid />
      </div>
    </section>
  );
}
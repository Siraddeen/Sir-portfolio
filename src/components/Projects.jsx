import { projects } from "../data";

export default function Projects() {
  return (
    <section
      className="px-[clamp(1.5rem,8vw,8rem)] py-[clamp(4rem,10vw,8rem)] bg-bg2"
      id="projects"
    >
      {/* HEADER */}
      <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
        <div className="w-[30px] h-px bg-cyan"></div>
        04 — Projects
      </div>

      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-12 fade-in">
        What I've Built
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative bg-card border border-border rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:border-cyan/40"
          >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg2 via-transparent to-transparent"></div>
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1">
              <div className="font-mono text-xs text-muted tracking-[0.15em] mb-2">
                {p.num}
              </div>

              <div className="text-xl font-bold mb-2">{p.title}</div>

              <div className="text-sm text-gray-400 mb-4">{p.desc}</div>

              {/* INSIGHTS */}
              {p.insights && (
                <div className="mb-4">
                  <div className="text-xs text-cyan font-mono mb-2">
                    ⚡ Key Insights
                  </div>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {p.insights.map((ins, k) => (
                      <li key={k}>• {ins}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-cyan/10 text-cyan px-2 py-1 rounded text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 mt-auto">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan hover:text-cyan/80 text-sm font-mono"
                  >
                    📊 View →
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan hover:text-cyan/80 text-sm font-mono"
                  >
                    ⚙️ Code →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import { projects } from "../data";

// export default function Projects() {
//   return (
//     <section
//       className="px-[clamp(1.5rem,8vw,8rem)] py-[clamp(4rem,10vw,8rem)] bg-bg2"
//       id="projects"
//     >
//       <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
//         <div className="w-[30px] h-px bg-cyan"></div>
//         04 — Projects
//       </div>
//       <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-12 fade-in">
//         What I've Built
//       </h2>

//       {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className={`bg-card border border-border rounded-lg p-6 flex flex-col fade-in delay-${i + 1}`}
//           >
//             <div className="font-mono text-xs text-muted tracking-[0.15em] mb-3">
//               {p.num}
//             </div>
//             <div className="text-xl font-bold mb-3">{p.title}</div>
//             <div className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
//               {p.desc}
//             </div>
//             <div className="flex flex-wrap gap-2 mb-6">
//               {p.stack.map((tag, j) => (
//                 <span
//                   key={j}
//                   className="bg-cyan/10 text-cyan px-2 py-1 rounded text-xs font-mono"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="flex gap-4 mt-auto">
//               {p.liveUrl && (
//                 <a
//                   href={p.liveUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-cyan hover:text-cyan/80 transition-colors font-mono text-sm"
//                 >
//                   Live Demo →
//                 </a>
//               )}
//               {p.githubUrl && (
//                 <a
//                   href={p.githubUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-cyan hover:text-cyan/80 transition-colors font-mono text-sm"
//                 >
//                   GitHub →
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div> */}
//       <div
//         key={i}
//         className="group relative bg-card border border-border rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:border-cyan/40"
//       >
//         {/* IMAGE */}
//         <div className="relative h-48 overflow-hidden">
//           <img
//             src={p.image}
//             alt={p.title}
//             className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-bg2 via-transparent to-transparent"></div>
//         </div>

//         {/* CONTENT */}
//         <div className="p-6 flex flex-col flex-1">
//           <div className="font-mono text-xs text-muted tracking-[0.15em] mb-2">
//             {p.num}
//           </div>

//           <div className="text-xl font-bold mb-2">{p.title}</div>

//           <div className="text-sm text-gray-400 mb-4">{p.desc}</div>

//           {/* 🔥 INSIGHTS */}
//           {p.insights && (
//             <div className="mb-4">
//               <div className="text-xs text-cyan font-mono mb-2">
//                 ⚡ Key Insights
//               </div>
//               <ul className="text-xs text-gray-400 space-y-1">
//                 {p.insights.map((ins, k) => (
//                   <li key={k}>• {ins}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* STACK */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {p.stack.map((tag, j) => (
//               <span
//                 key={j}
//                 className="bg-cyan/10 text-cyan px-2 py-1 rounded text-xs font-mono"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* LINKS */}
//           <div className="flex gap-4 mt-auto">
//             {p.liveUrl && (
//               <a
//                 href={p.liveUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-cyan hover:text-cyan/80 text-sm font-mono"
//               >
//                 📊 View →
//               </a>
//             )}
//             {p.githubUrl && (
//               <a
//                 href={p.githubUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-cyan hover:text-cyan/80 text-sm font-mono"
//               >
//                 ⚙️ Code →
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

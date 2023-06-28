
export default function Content() {

    return (
        <>
          <aside className="bg-amber-100 text-blue-900 py-4 w-1/2 min-w-[360px] flex flex-col max-h-screen overflow-hidden z-10">
            <hgroup className="px-4 border-b border-blue-950 text-xl tracking-widest mb-4 italic text-blue-700">
              <h2>Detective&apos;s Notes</h2>
            </hgroup>
            <div className="px-4 text-blue-900/75 tracking-widest italic text-lg">
            <p className="mb-4">
              You are Detective Layton, an experienced investigator renowned for your sharp deductive skills.
            </p>
            <p className="mb-4">
              It is the 1920s, and you are on vacation aboard the renowned Mystery Express, a train known for its
              immersive murder mystery experiences. It&apos;s an opportunity to unwind and put your sleuthing abilities
              to the test in a simulated crime scenario.
            </p>
            <p className="mb-4">
              However, as the train traverses the picturesque countryside, a shocking twist unfolds. You are called upon
              to investigate a real murder that has taken place on board!
            </p>
            
          </div>
           </aside>
        </>
      );

}
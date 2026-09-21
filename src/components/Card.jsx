import React from "react";

const Card = (props) => {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-black p-2">
      <div className="flex h-full w-full max-w-md flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="from-blue-500 to-purple-600 p-4">
          <img
            src={props.img}
            alt="Image Is Not Rendering "
            className="mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>

        <div className="space-y-2 p-4 text-center">
          <h1 className="text-xl font-bold text-slate-800">{props.name}</h1>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            {props.role}
          </h2>
          <p className="text-sm leading-5 text-slate-600">{props.briefIntro}</p>

          <button className="mt-1 inline-flex rounded-full bg-cyan-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800 transition hover:bg-cyan-200">
            {/*this code i have to understand  */}

            {props.experience
              ? `${props.experience} ${props.experience > 1 ? "years" : "year"} of experience`: "Years of experience"}
          </button>
          <div className="flex flex-wrap justify-center gap-1.5">

            {/*this code is use for the retriving the data from the object's property*/ }
            {props.specialities.map((speciality) => (
              <span key={speciality}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700" >
                 {speciality}
             </span>
               
             
            ))}
          </div>

          <button className="mt-2 block w-full rounded-full bg-slate-900 px-5 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-700">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

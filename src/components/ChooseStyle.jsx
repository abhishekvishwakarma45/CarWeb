import React from "react";

const ChooseStyle = () => {
  const chooseCar = [{ image: "/saden.png", type: "saden" }];

  return (
    <section className="my-4 text-center px-15">
      <h1 className="font-semibold text-black capitalize">
        Select a body style
      </h1>
      <div className="h-auto w-full grid grid-cols-6 gap-1.5">
        <div className="w-auto h-14">
          <div>
            <img src="/saden.png" alt="" />
            <p className="mt-2">Name</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseStyle;

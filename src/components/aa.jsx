const Frame = () => {
  return (
    <div className="w-full bg-white overflow-hidden flex flex-row flex-wrap items-end justify-center pt-[19px] pb-[21px] pr-[42px] pl-11 box-border gap-[0px_22px]">
      <div className="flex-1 flex flex-row items-start justify-between py-0 pr-[7px] pl-0 box-border min-w-[65px]">
        <img
          className="h-[43.8px] w-[42.3px] relative"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
          <img
            className="w-[30.1px] h-[43.6px] relative"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[22px]">
        <img
          className="w-[41.4px] h-[40.3px] relative"
          loading="lazy"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="h-[45px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
        <img
          className="w-9 h-[39.5px] relative"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <div className="h-16 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
        <img
          className="w-[43px] h-[42px] relative"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
        <img
          className="w-[30.4px] h-[42.7px] relative"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[22px]">
        <img
          className="w-[32.6px] h-[43.5px] relative"
          loading="lazy"
          alt=""
          src="/group-2.svg"
        />
      </div>
      <img
        className="h-[46.5px] w-[35.5px] relative"
        loading="lazy"
        alt=""
        src="/group-3.svg"
      />
    </div>
  );
};

export default Frame;
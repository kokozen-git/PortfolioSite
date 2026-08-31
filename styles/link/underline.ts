const underline = {
  className: `
    relative inline-block 
    text-xl font-bold
    after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0
    after:bg-[var(--mainColor)] after:content-[''] after:transition-all after:duration-300
    hover:after:w-full
  `,

  touchActiveClass: 
    "after:w-full",
  
};

export default underline;
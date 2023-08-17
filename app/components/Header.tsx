import LogoPurple from "./Logo-Purple";

export default function Header() {
  return <Navbar />;
}

export function Navbar() {
  return (
    <div className="w-full grid grid-cols-12 h-24 items-center lg:px-24 px-8">
      <div className="lg:col-span-8 md:col-span-7 col-span-6 flex flex-row items-center gap-4">
        <LogoPurple height="45" />
        <h1 className="text-[#835DEC] sm:text-1.5xl text-md md:font-[400] sm:mix-blend-normal mix-blend-multiply font-medium whitespace-nowrap font-Josefin-Sans">
          INTRANT DIGITAL
        </h1>
      </div>
      <div className="grid lg:col-span-4 md:col-span-5 col-span-6 grid-cols-5 items-center sm:gap-4 gap-0 justify-end font-Poppins">
        <a
          href="/"
          className="col-span-1 sm:block hidden text-[#5F00C3] underline underline-[#5F00C3] underline-offset-8 font-medium"
        >
          Home
        </a>
        <a href="/#about" className="col-span-1 sm:block hidden justify-center">
          About
        </a>
        <a
          href="/#inquiry"
          className="col-span-1 sm:block hidden justify-center"
        >
          Quote
        </a>
        <a
          href="/#portfolio"
          className="col-span-1 sm:block hidden flex justify-center"
        >
          Portfolio
        </a>
        <div className="sm:col-span-1 col-span-5 flex justify-end">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16.7143C0 17.4244 0.575634 18 1.28571 18H18.7143C19.4244 18 20 17.4244 20 16.7143V16.7143C20 16.0042 19.4244 15.4286 18.7143 15.4286H1.28571C0.575632 15.4286 0 16.0042 0 16.7143V16.7143ZM0 9C0 9.71008 0.575634 10.2857 1.28571 10.2857H18.7143C19.4244 10.2857 20 9.71008 20 9V9C20 8.28992 19.4244 7.71429 18.7143 7.71429H1.28571C0.575632 7.71429 0 8.28992 0 9V9ZM1.28248 0C0.574187 0 0 0.574186 0 1.28248V1.28248C0 1.99078 0.574187 2.56496 1.28248 2.56496H18.7175C19.4258 2.56496 20 1.99078 20 1.28248V1.28248C20 0.574186 19.4258 0 18.7175 0H1.28248Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

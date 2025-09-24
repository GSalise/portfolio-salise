import "./App.css";
import jorj from "../src/assets/jorj.jpg";
import subcalc from "../src/assets/subcalc.png";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-40">
        <div className="bg-blue-500 w-full h-[100px] justify-center items-center flex">
          <span className="text-white text-xl">
            Web Development is not my strong suit nor is it my passion.
          </span>
        </div>
        <div className="bg-white w-full h-[500px] flex justify-between items-center px-50">
          <div className="flex flex-col">
            <span className="text-black">George Adriane Dean P. Salise</span>
            <span className="text-black">
              Bachelor of Science in Information Technology
            </span>
            <span className="text-black">2023-2026</span>
          </div>
          <div>
            <div className="bg-black w-[300px] h-[300px] rounded-full overflow-hidden flex justify-center items-center">
              <img
                src={jorj}
                alt="Image of George Salise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-black">
              Take a break, especially if you can't figure it out.
            </span>
          </div>
        </div>
        <div className="bg-white w-full h-[500px] flex justify-between items-center px-50">
          <span className="text-black text-xl">Projects</span>
          <div className="h-[400px] w-[500px] bg-gray-600 flex flex-col justify-center items-center p-10">
            <a href="https://github.com/GSalise/SubCalc" className="text-lg">
              SubCalc
            </a>
            <span>
              A subnet calculator made in Java. It can calculate both in CIDR
              and VLSM.
            </span>
            <div className=" mt-5 h-[500px] w-[300px] bg-white rounded-md overflow-hidden flex justify-center items-center">
              <img
                src={subcalc}
                alt="Image of SubCalc"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="h-[400px] w-[500px] bg-gray-600 flex flex-col justify-center items-center p-10">
            <a href="https://github.com/GSalise/SubCalc" className="text-lg">
              SubCalc
            </a>
            <span>
              A subnet calculator made in Java. It can calculate both in CIDR
              and VLSM.
            </span>
            <div className=" mt-5 h-[500px] w-[300px] bg-white rounded-md overflow-hidden flex justify-center items-center">
              <img
                src={subcalc}
                alt="Image of SubCalc"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-[500px] flex justify-between items-center px-50"></div>
      </div>
    </>
  );
}

export default App;

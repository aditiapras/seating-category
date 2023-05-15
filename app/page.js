import Image from "next/image";
import { Crimson_Text } from "next/font/google";
import { Inter } from "next/font/google";
import sphere from "/assets/1.png";
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black  to-indigo-900">
      <div className="flex flex-col items-center gap-5">
        <div className="w-44 h-44">
          <Image src={sphere}></Image>
        </div>
        <h1 className={`font-normal text-5xl text-white ${crimson.className}`}>
          COLDPLAY
        </h1>
        <h1 className={`font-light text-3xl text-white ${crimson.className}`}>
          MUSIC <span className="italic"> of the</span> SPHERES
        </h1>
      </div>
      <form action="submit">
        <div className={`flex flex-col gap-5 w-80 ${crimson.className}`}>
          <input
            type="text"
            class="
            border-none
            px-4 py-2 
            rounded-xl
            text-lg
            font-light
            ring-1
            ring-pink-400
            focus:ring-pink-400 
            focus:ring-2
            focus:scale-105  
            bg-transparent 
            text-white 
            transition duration-300
            placeholder:text-pink-300/50"
            placeholder="Name"
          />
          <input
            type="text"
            class="
            border-none
            px-4 py-2 
            rounded-xl
            text-lg
            font-light
            ring-1
            ring-pink-400
            focus:ring-pink-400 
            focus:ring-2
            focus:scale-105  
            bg-transparent 
            text-white 
            transition duration-300
            placeholder:text-pink-300/50"
            placeholder="youremail@example.com"
          />
          <div>
            <label className="text-pink-400 text-lg">Select Category:</label>
            <select class="form-select w-full mt-1 rounded-lg">
              <option>ULTIMATE EXPIRIENCE (DIPANGKU CHRIS MARTIN)</option>
              <option>MY UNIVERSE</option>
              <option>FESTIVAL</option>
              <option>CAT 1</option>
              <option>CAT 2</option>
              <option>CAT 3</option>
              <option>CAT 4</option>
              <option>CAT 5</option>
              <option>CAT 6</option>
              <option>CAT 7</option>
              <option>CAT 8</option>
            </select>
          </div>
          <div>
            <label className="text-pink-400 text-lg">Backup Category:</label>
            <select class="form-select w-full mt-1 rounded-lg">
              <option>ULTIMATE EXPIRIENCE (DIPANGKU CHRIS MARTIN)</option>
              <option>MY UNIVERSE</option>
              <option>FESTIVAL</option>
              <option>CAT 1</option>
              <option>CAT 2</option>
              <option>CAT 3</option>
              <option>CAT 4</option>
              <option>CAT 5</option>
              <option>CAT 6</option>
              <option>CAT 7</option>
              <option>CAT 8</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <button
              className={`px-4 py-2 w-1/2 rounded-lg bg-pink-400 text-white ${inter.className}`}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

"use client";
import { Box } from "./Box";

import { Canvas } from "@react-three/fiber";
import StarRating from "./StarRating";
import { StylingModal } from "./StylingModal";

/**
 * Left pad hack for multiline strings (code snippets)
 */
function leftPad(lines: string) {
  return lines
    .split("\n")
    .map((line, index) => (index === 0 ? line : "  " + line))
    .join("\n");
}

const starsCode = leftPad(`<div className="rating">
  <input type="radio" 
  name="rating-1"
  className="mask mask-star" />

  <input type="radio" 
  name="rating-1"
  className="mask mask-star"
   checked />
  <input type="radio"
   name="rating-1"
   className="mask mask-star" />
  <input type="radio" name="rating-1"
   className="mask mask-star" />
  <input type="radio" name="rating-1" 
  className="mask mask-star" />
</div>};`);

const boxCode = leftPad(`<Canvas>
  <ambientLight />
  <pointLight position={[10, 10, 10]} />
  <Box position={[-1.2, 0, 0]} />
  <Box position={[1.2, 0, 0]} />
</Canvas>`);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-slate-100">
              Hello World
            </h1>

            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <Canvas className="max-h-[300px]">
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                  </Canvas>
                  <StarRating />
                  <div className="flex flex-col w-full gap-5 px-12">
                    <StylingModal
                      buttonText="See box styling"
                      libraryName="React-three-fiber"
                      link="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
                      code={boxCode}
                    />

                    <StylingModal
                      buttonText="See stars Styling"
                      libraryName="Daisy UI rating stars"
                      code={`${starsCode}`}
                      link={"https://daisyui.com/components/rating/"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

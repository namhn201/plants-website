import { Button, Carousel } from "@material-tailwind/react";

const DashboardComponent = () => {
  const titleImage_1 = "Text Reveal Animation 💫";
  const titleImage_2 = "Text Reveal Animation_2 💫";

  return (
    <div>
      <Carousel className="rounded-sm w-full max-w-full h-full">
        {/* Image 1 */}
        <div className="relative w-full">
          <img
            src="https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/31.webp"
            alt="image 1"
            className="h-full w-full "
          />
          {/* Nội dung chiếm một nửa chiều rộng bên phải */}
          <div className="absolute top-0 right-0 w-1/2 h-full text-black p-6 flex flex-col justify-center items-center">
            <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
              {titleImage_1.match(/./gu)!.map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="mt-2">Mô tả cho ảnh này</p>
            <Button  className="bg-[#014e37]">Shop Now</Button>

          </div>
        </div>

        {/* Image 2 */}
        <div className="relative h-full w-full">
          <img
            src="https://envatopixel.com/wordpress/plantlish/wp-content/uploads/2021/07/31.webp"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          {/* Nội dung chiếm một nửa chiều rộng bên phải */}
          <div className="absolute top-0 right-0 w-1/2 h-full text-black p-6 flex flex-col justify-center items-center">
            <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
              {titleImage_2.match(/./gu)!.map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="mt-2">Mô tả cho ảnh này</p>
            <Button  className="bg-[#014e37]">Shop Now</Button>

          </div>
        </div>
      </Carousel>
      <div>Welcome</div>
    </div>
  );
};
export default DashboardComponent;

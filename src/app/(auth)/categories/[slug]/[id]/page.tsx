"use client";

import { CartContext } from "@/components/Context";
import { Categories, categories } from "@/components/Mocks";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Id = ({ params }: { params: { slug: string; id: string } }) => {
  const images = ["/bM.jpg", "/hO.jpg", "/hm.jpg", "/hO.jpg"];
  const router = useRouter();
  const [plane, setPlane] = useState("");
  const [cuurrentImg, setCurrentImg] = useState(images?.[0]);
  const { addToCart } = useContext(CartContext);
  const getCategoryById = categories.filter((items) => items.id === params.id);
  const filterPlans = getCategoryById[0].price.find(
    (plan) => plan.plane === plane
  );
  const handleAdd = (category: Categories) => {
    if (plane === "") {
      return alert("Necessario escolher um plano !");
    }
    const { id, name } = category;
    const newCart = { id, name, ...[filterPlans] };
    addToCart(newCart);
  };
  const handleAddFromBuy = async (category: Categories) => {
    if (plane === "") {
      return alert("Necessario escolher um plano !");
    }
    const { id, name } = category;
    const newCart = { id, name, ...[filterPlans] };
    addToCart(newCart);
    await router.push("/cart");
  };
  return (
    <section className=" body-font overflow-hidden bg-black">
      {getCategoryById.map((category, index: number) => (
        <div className="container px-5 py-24 mx-auto" key={index}>
          <div className="lg:w-4/5  mx-auto flex flex-wrap">
            <div className="w-full  lg:w-[50%] flex flex-col">
              <div className="lg:max-w-full min-h-[400px] justify-center items-center flex ">
                <img src={cuurrentImg} alt="" className="w-full h-[400px] object-cover bg-red-400" />
              </div>
              {/*tumbler*/}
              <div className="flex w-full h-full gap-4 py-4 items-center justify-center">
                {images.map((img, index) => (
                  <div
                    className="w-[80px] h-[90px]"
                    onClick={() => setCurrentImg(img)}
                  >
                    <img
                      src={img}
                      alt="e-com"
                      className={
                        img === cuurrentImg
                          ? "max-w-full h-full object-cover border-2 border-[#C4A24D]"
                          : "max-w-full h-full object-cover border-2 border-[#000]"
                      }
                    />
                  </div>
                ))}
              </div>
              <div></div>
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Contratos para
              </h2>
              <h1 className="text-[#C4A24D] text-3xl title-font font-medium mb-1">
                {category.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#e6c619]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#e6c619]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#e6c619]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#e6c619]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#e6c619]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-white ml-3">4 Avaliações</span>
                </span>
              </div>
              <p className="leading-relaxed text-white">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardiganFam locavore kickstarter distillery. Mixtape chillwave
                tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
                indxgo juiceramps cornhole raw denim forage brooklyn. Everyday
                carry +1 seitan poutine tumeric. Gastropub blue bottle austin
                listicle pour-over, neutra jean shorts keytar banjo tattooed
                umami cardigan
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 ">
                <div className="flex ml-6 items-center ">
                  <span className="mr-3 text-[#C4A24D] text-xl">Planos</span>
                  <div className="relative">
                    <select
                      value={plane}
                      onChange={(e) => setPlane(e.target.value)}
                      className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-[#e6c619] text-base pl-3 pr-10"
                    >
                      <option>Selecione um plano</option>
                      {category.price.map((plans, index: number) => (
                        <option key={index} value={plans.plane}>
                          {plans.plane}
                        </option>
                      ))}
                    </select>
                    <span className="title-font font-medium text-2xl pl-4 text-[#e6c619]">
                  {filterPlans?.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5">
               
                <button
                  onClick={() => handleAddFromBuy(category)}
                  className="flex  text-white bg-black border-2 border-[#e6c619] py-2 px-6 focus:outline-none hover:bg-[#C4A24D] rounded"
                >
                  Comprar
                </button>
                <button
                  onClick={() => handleAdd(category)}
                  className="flex text-white bg-black border-2 border-[#e6c619] py-2 px-6 focus:outline-none hover:bg-[#C4A24D] rounded"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </section>
  );
};

export default Id;

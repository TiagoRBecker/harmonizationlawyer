"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { categories, Categories } from "@/components/Mocks";
import { CartContext } from "@/components/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const Category = ({ params }: { params: { slug: string } }) => {
  const findCategoryName = categories.filter(
    (category: Categories) => category.Slug === params.slug
  );
  const { addToCart, cart } = useContext(CartContext);
  const handleAddToCart = (category: any, plans: any) => {
    const { id, name } = category;
    const newCArt = { id, name, ...[plans] };
    addToCart(newCArt);
  };

  return (
    <section className=" container w-full h-full py-10 mx-auto">
      {findCategoryName.map((category: Categories, index: number) => (
        <div className="w-full h-full" key={index}>
          <h1 className="w-full text-center text-3xl text-gray-700 py-10 ">
            Contratos Específicos para {category.name}
          </h1>
          <div className=" w-full h-full  lg:flex  gap-4">
            <div className="w-full lg:w-[40%] h-[480px] flex  rounded-sm">
              <img
                src={category.img}
                alt={category.Slug}
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="w-full lg:w-[60%] bg-slate-400 py-5 px-5 rounded-sm">
              <p className=" text-lg  text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione reiciendis deserunt necessitatibus odit animi soluta
                nihil repellendus iusto, vitae impedit consectetur
                exercitationem ut atque totam pariatur facilis. Iste, a
                provident Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ratione reiciendis deserunt necessitatibus odit animi
                soluta nihil repellendus iusto, vitae impedit consectetur
                exercitationem ut atque totam pariatur facilis. Iste, a
                provident. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ratione reiciendis deserunt necessitatibus odit animi
                soluta nihil repellendus iusto, vitae impedit consectetur
                exercitationem ut atque totam pariatur facilis. Iste, a
                provident. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ratione reiciendis deserunt necessitatibus odit animi
                soluta nihil repellendus iusto, vitae impedit consectetur
                exercitationem ut atque totam pariatur facilis. Iste, a
                provident. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ratione reiciendis deserunt necessitatibus odit animi
                soluta nihil repellendus iusto, vitae impedit consectetur
                exercitationem ut atque totam pariatur facilis. Iste, a
                provident. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ratione reiciendis deserunt necessitatibus odit animi
                soluta nihil repellendus iusto, vitae impedit consectetur
                exercitationem ut atque totam pariatur facilis. Iste, a
                provident.
              </p>
            </div>
            <button></button>
          </div>
          <div>
            <h1 className="w-full text-center text-3xl text-gray-700 py-10">
              Conheça nossos planos{" "}
            </h1>
            <div className="grid grid-cols-1  justify-items-center py-20 md:grid-cols-3 row-auto gap-5">
              {category.price.map((plans, index) => (
                <div
                  key={index}
                  className="w-full  lg:flex  items-center justify-around flex-col h-full px-5 py-5 bg-gray-200 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                >
                  <Link href={`/categories/${category.Slug}/${category.id}`}>
                    <div className=" py-2 px-16 bg-blue-400 rounded-full text-1xl text-white text-center">
                      <h1 className="">{plans.plane}</h1>
                    </div>
                  </Link>
                  <div className="py-5 text-center w-full">
                    <span className=" text-xl text-gray-900 font-bold  ">
                      {plans.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-center items-center py-5">
                    <ul className="flex flex-col gap-5">
                      <li className="list">Lorem ipsum dolor sit amet</li>
                      <li className="list">Lorem ipsum dolor sit amet</li>
                      <li className="list">Lorem ipsum dolor sit amet</li>
                      <li className="list">Lorem ipsum dolor sit amet</li>
                      <li className="list">Lorem ipsum dolor sit amet</li>
                    </ul>
                  </div>
                  <div className="w-full flex items-center justify-center py-5">
                    <button
                      onClick={() => handleAddToCart(category, plans)}
                      className="py-2 px-16 bg-blue-600 rounded-full text-1xl text-white"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </section>
  );
};

export default Category;

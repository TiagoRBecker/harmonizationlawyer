"use client"
import { categories } from "@/components/Mocks/index";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
type FormData = {
  name: string
  email: string
  phone: string
  message: string
}
const Home = () => {
    const schema = z.object({
        name: z.string().min(1, { message: "Necessário  preencher o campo nome" }),
        email: z
          .string()
          .email({ message: "Insira um email válido" })
          .min(1, { message: "Necessário  preencher o email" }),
        phone: z
          .string()
          .min(11, { message: "Necessário  preencher o campo telefone com 11 dígitos" }),
    
        message: z.string().min(1, { message: "Necessário prrencher o campo mensagem" }),
      });
    type schema = z.infer<typeof schema>;
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<FormData>({
      mode: "all",
      resolver:zodResolver(schema)
      
    });
    console.log(errors)
    const onSubmit = handleSubmit((data,e) => {
    e?.preventDefault()
    console.log('ok')
    console.log(data)})
    
  return (
    <section className="w-full -full">
      <div className=" w-full h-screen bg-gray-600 flex justify-center items-center">
        <h1 className="text-white text-xl ">Video explicativo</h1>
      </div>

      <div className="flex w-full h-screen bg-gray-300 py-5 px-5 gap-2">
        <div className="w-[50%] flex items-center justify-center rounded-lg bg-white">
          Colocar Imagem
        </div>
        <div className="w-[50%] flex items-center justify-center rounded-lg bg-white">
          Box para falar um pouco sobre a importância de adquirir um contrato
        </div>
      </div>
      <div className="w-full h-screen container bg-gray-500 mx-auto">
        <h1 className=" text-center text-3xl py-5 text-white">
          {" "}
          Aqui pode ser colocado alguns produto hotmart
        </h1>
        <div className="grid grid-cols-4 gap-5 px-5">
          <div className="bg-white w-full rounded-lg h-80 flex flex-col items-center justify-around">
            <h1>Nome do produto</h1>
            <div>Imagem</div>
            <div>
              <button className="py-1 px-8 bg-blue-500 rounded-lg text-white">
                Comprar
              </button>
            </div>
          </div>
          <div className="bg-white w-full rounded-lg h-80 flex flex-col items-center justify-around">
            <h1>Nome do produto</h1>
            <div>Imagem</div>
            <div>
              <button className="py-1 px-8 bg-blue-500 rounded-lg text-white">
                Comprar
              </button>
            </div>
          </div>
          <div className="bg-white w-full rounded-lg h-80 flex flex-col items-center justify-around">
            <h1>Nome do produto</h1>
            <div>Imagem</div>
            <div>
              <button className="py-1 px-8 bg-blue-500 rounded-lg text-white">
                Comprar
              </button>
            </div>
          </div>
          <div className="bg-white w-full rounded-lg h-80 flex flex-col items-center justify-around">
            <h1>Nome do produto</h1>
            <div>Imagem</div>
            <div>
              <button className="py-1 px-8 bg-blue-500 rounded-lg text-white">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto">
        <h1 className="text-gray-800 text-xl py-5 text-center">
          {" "}
          Aqui pode exibir as categorias
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full overflow-hidden gap-0.5">
          {categories.map((category, index) => (
            <div
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                maxWidth: "100%",
                height: "100vh",
              }}
              className="bg-category "
            >
              <div className="bg-category-descript">
                <h1 className="bg-category-title">{category.name}</h1>
                <button className="py-1 px-8 bg-blue-400 text-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Link href={`/categories/${category.Slug}`}>Saiba mais</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  flex-col w-full h-screen bg-gray-300 py-5 px-5 ">
        <h1 className="text-gray-800 text-xl text-center">Sobre Nós</h1>
        <div className="flex gap-5">
          <div className="w-[50%] h-[500px]  flex items-center justify-center rounded-lg bg-white">
            Colocar Imagem
          </div>
          <div className="w-[50%] h-[500px] flex items-center justify-center rounded-lg bg-white">
            Box para falar um pouco sobre empresa os afiliados
          </div>
        </div>
      </div>
      <div className="container mx-auto h-screen bg-gray-400 flex items-center justify-center flex-col gap-8">
        <h1 className="text-xl text-gray-800">Seção para o depoimento</h1>
        <div className="grid grid-cols-3 gap-5 px-5">
          <div className="bg-white w-full rounded-lg h-80 flex flex-col items-center justify-around  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-5 px-5">
            <div>
              <img src="/q.png" alt="" />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro enim, debitis rerum dolorum sint praesentium
            </p>
            <div className="w-16 h-16 rounded-full border-2 border-gray-400">
              <img
                src="/man.webp"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1> Nome do cliente</h1>
          </div>
          <div className="bg-white w-full rounded-lg h-80 flex flex-col items-center justify-around shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-5 px-5">
            <div>
              <img src="/q.png" alt="" />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro enim, debitis rerum dolorum sint praesentium
            </p>
            <div className="w-16 h-16 rounded-full border-2 border-gray-400">
              <img
                src="/man.webp"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1> Nome do cliente</h1>
          </div>
          <div className="bg-white w-full rounded-lg h-80 flex flex-col items-center justify-around shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-5 px-5">
            <div>
              <img src="/q.png" alt="" />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laudantium porro enim, debitis rerum dolorum sint praesentium
            </p>
            <div className="w-16 h-16 rounded-full border-2 border-gray-400">
              <img
                src="/man.webp"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1> Nome do cliente</h1>
          </div>
        </div>
      </div>
      <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex h-full gap-5">
          <div className="w-[50%] h-[600px] bg-gray-500">
            <h1>
              Box usada para respresentar endereço , email , outras formas de
              contato e social midias{" "}
            </h1>
          </div>
          <div className="w-[50%]">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contato
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Entre em contato conosco 
              </p>
            </div>
            <form
              
              
              className="mx-auto mt-16 max-w-xl sm:mt-20"
              onSubmit={onSubmit}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nome
                  </label>
                  <div className="mt-2.5">
                    <input
                    {...register("name")}
                      type="text"
                      id="first-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.name  && <p className="text-red-600 text-sm">{errors?.name.message}</p>}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                    {...register("email")}
                      type="email"
                     
                      id="email"
                      
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email  && <p className="text-red-600 text-sm">{errors?.email.message}</p>}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Telefone
                  </label>
                  <input
                  {...register("phone")}
                    type="text"
                   
                    id="phone-number"
                   
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.phone  && <p className="text-red-600 text-sm">{errors?.phone.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Mensagem
                  </label>
                  <div className="mt-2.5">
                    <textarea
                     {...register("message")}
                     
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                    {errors.message  && <p className="text-red-600 text-sm">{errors?.message.message}</p>}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

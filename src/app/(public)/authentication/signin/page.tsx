"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter} from "next/navigation"
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorC, setErrorC] = useState(false)
  const [ errorCred ,setErrorCred] = useState(false)

  const router = useRouter();
  const handleLoginFake = (e:any) => {
    setErrorC(false)
    e.preventDefault()
  
    if (email === "" && password === "") {
     
      setErrorC(true)
      return;
    }
    if (email === "teste@gmail.com" && password === "12345") {
     
      router.push('/')
     
      return
    }
    else{
      setErrorCred(true)
    }
    
    
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Entrar em sua conta
            </h1>
            <form className="space-y-4 md:space-y-6"   onSubmit={handleLoginFake}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3b82f6] dark:focus:border-[#3b82f6]"
                  placeholder="name@company.com"
                />
                { errorC && <p className="text-red-500">{"Necessário preencher campo email"}</p>}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                 value={password}
                 onChange={e=>setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3b82f6] dark:focus:border-[#3b82f6]"
                />
                 { errorC && <p className="text-red-500">{"Necessário preencher campo password"}</p>}
              </div>
              { errorCred && <p className="text-red-500">{"Email ou senha inválidos"}</p>}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <p className="text-base font-light text-gray-500 dark:text-gray-400">
                    <Link
                      href={"/authentication/signup"}
                      className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]"
                    >
                      Cadastrar
                    </Link>
                  </p>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] dark:focus:ring-[#1e40af]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;

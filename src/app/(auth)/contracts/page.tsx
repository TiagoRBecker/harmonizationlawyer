import { Categories, categories } from "@/components/Mocks";
import Link from "next/link";

const Contract = () => {
  return (
    <section className="w-full h-full container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full overflow-hidden gap-0.5">
        {categories.map((category: Categories, _index: number) => (
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
              <Link href={`/categories/${category.Slug}`}>
                Saiba mais
              </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contract;

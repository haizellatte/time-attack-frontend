import ChildrenType from "@/types/ChildrenType";

function Page({ children, title }: ChildrenType) {
  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      {title && (
        <h1 className="font-bold text-3xl text-center my-12">{title}</h1>
      )}
      {children}
    </main>
  );
}

export default Page;

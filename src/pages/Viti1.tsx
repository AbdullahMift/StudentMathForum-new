import React from "react";

const Viti1 = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 select-none">
      <div className="flex items-center">
        <h1 className=" font-semibold text-2xl">Viti 1</h1>
      </div>
      <div
        className="h-full border border-dashed shadow-sm rounded"
        x-chunk="dashboard-02-chunk-1"
      >
        {/* <div className="flex flex-wrap items-start justify-center sm:justify-start py-8 px-8 rounded-lg gap-8 ">
      {vitet.map((item) => (
        <Link
          to={item.path}
          className="max-w-[400px] w-full sm:w-[250px]"
        >
          <Card className=" w-full hover:cursor-pointer hover:shadow-lg">
            <CardHeader className="h-[120px] flex justify-center p-0 relative">
              <img
                src={item.imgUrl}
                className="absolute w-full h-full top-0 z-10 object-cover rounded-t-md"
                alt={item.name}
              />
              <CardTitle className="z-20 p-5 text-slate-800 text-3xl font-bold first:mt-0">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex py-0 flex-col px-0">
              <div className="py-2 px-5 border-b-2 border-slate-200">
                <CardDescription className="font-medium">
                  123 detyra të zgjidhura
                </CardDescription>
              </div>
              <div className="py-1 flex justify-end px-3">
                <FolderClosed className="text-slate-500 hover:fill-slate-400 " />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div> */}
      </div>
    </main>
  );
};

export default Viti1;

import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430] flex-col justify-center space-y-12">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={82}
              height={82}
              className="h-auto"
            />
            <span className="text-white text-4xl font-bold">Nube</span>
          </div>

          <div className="space-y-5 text-white mt-5">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              This is a place where you can store all your documents
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105 "
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/icons/logo-brand.svg"
              alt="logo"
              width={82}
              height={82}
              className="h-auto"
            />
            <span className="text-brand text-4xl font-semibold">Nube</span>
          </div>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;

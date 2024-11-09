import Image from "next/image";
import Header from "@/app/ui/components/Header";
import InputWithButton from "./ui/components/InputWithButton";

import {
  ArrowBigRightIcon,
  NotebookPen,
  LibraryBig,
  CircleUserRound,
  ShieldCheck,
  Quote,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const BlogCard = () => {
  return (
    <div className="w-72 md:w-56 bg-white h-full justify-center items-center rounded-md xl:rounded-lg xl:w-72">
      <Image
        src="/blog-image.jpg"
        width={350}
        height={250}
        alt="A book"
        className="rounded-t-md"
      />
      <div className="font-semibold px-5 py-10">
        <span className="text-sm font-normal">1</span>
        <p className="text-base w-full">
          Shaping Futures: Innovation in curriculum development.
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-full h-full bg-white flex justify-between items-center py-10 md:py-20 rounded-b-3xl">
        <section className="text-primary_text flex flex-col justify-center items-center w-full mx-10 md:mx-20 xl:items-start">
          <Image
            src="/dots.svg"
            alt="decoration"
            width={60}
            height={200}
            className="absolute  md:hidden left-10 top-8 z-40 rotate-90"
          />
          <Image
            src="/hero.png"
            alt="Hero Section"
            width={250}
            height={75}
            className="bg-secondary md:hidden rounded-3xl z-20 mb-10"
          />
          <h1 className="text-3xl w-full lg:text-4xl text-center md:text-left lg:text-justify  font-bold pb-10 ">
            Unlock Your <span className="text-tertiary">Potential</span> With Us
          </h1>
          <p className="text-justify pb-10 text-sm md:text-base  max-w-3xl">
            Welcome to Darul Najah, where learning knows no bounds. We believe
            that education is the key to personal and professional growth, and
            we're here to guide you on your journey to success.
          </p>

          <Button className="bg-tertiary">
            <ArrowBigRightIcon /> Join Us
          </Button>
        </section>
        <section className="mx-20 hidden md:block">
          <Image
            src="/dots.svg"
            alt="decoration"
            width={80}
            height={100}
            className="absolute hidden md:block right-60 lg:right-72 top-24 z-0"
          />
          <Image
            src="/hero.png"
            alt="Hero Section"
            width={550}
            height={700}
            className="bg-secondary hidden md:block rounded-3xl z-20"
          />
          <Image
            src="/dots.svg"
            alt="decoration"
            width={80}
            height={100}
            className="absolute hidden md:block right-10 top-64 z-0"
          />
        </section>
      </div>

      <section className="w-full py-10 px-10 md:px-20">
        <h2 className="text-primary_text text-3xl md:text-4xl font-bold text-center pb-10">
          What Are We?
        </h2>
        <p className="text-sm text-justify md:text-base justify-center md:text-center pb-10">
          We are premier provider of education resourced and professional
          development for K-12 educators, dedicated to fostering collaborative
          learning and continuous improvement. Our mission is to transform
          classrooms and empower educators through innovative solutions and
          expert support.
        </p>
        <section className=" flex flex-row justify-center items-center">
          <Image
            src="/woman.png"
            alt="image"
            height={400}
            width={400}
            className="w-[30%] hidden md:block"
          />
          <div className="w-full md:w-[70%] md:mx-10 flex flex-col justify-center items-center ">
            <table className="w-full   flex flex-row md:justify-center md:items-center pb-10 border-b-2">
              <tbody>
                <tr className="flex flex-col md:flex-row  w-full  md:mx-5">
                  <td className="flex flex-row items-center w-full mb-3 md:mb-0">
                    <LibraryBig className="bg-pink-400 rounded-md p-1 w-10 h-10 text-background" />
                    <span className="font-semibold pl-4">
                      Educational Purposes
                    </span>
                  </td>
                  <td className="flex flex-row items-center w-full mb-3 md:mb-0">
                    <NotebookPen className="bg-orange-400 rounded-md p-1 w-10 h-10 text-background" />
                    <span className="font-semibold pl-4">
                      Content Development
                    </span>
                  </td>
                </tr>
                <tr className="flex flex-col md:flex-row w-full md:mt-10 md:mx-5">
                  <td className="flex flex-row items-center w-full mb-3 md:mb-0">
                    <CircleUserRound className="bg-secondary rounded-md p-1 w-10 h-10 text-background" />
                    <span className="font-semibold pl-4">Online Training</span>
                  </td>
                  <td className="flex flex-row items-center w-full mb-3 md:mb-0">
                    <ShieldCheck className="bg-lime-600 rounded-md p-1 w-10 h-10 text-background" />
                    <span className="font-semibold pl-4">Certification</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <Button className="bg-tertiary mt-10 font-semibold">
              Learn More
            </Button>
          </div>
        </section>
      </section>
      <section className="bg-white text-primary_text flex flex-col justify-center w-full items-center py-10 px-10 md:py-20 rounded-3xl">
        <h2 className="text-primary_text text-3xl md:text-4xl font-bold text-center pb-10">
          Our Values
        </h2>
        <div className="flex flex-row items-center w-full justify-between lg:px-32">
          <div className="mr-10 text-justify">
            <ul>
              <li className="mb-5 md:mb-3 max-w-lg">
                <h4 className="font-semibold ">Innovation</h4>
                <span className="font-extralight  text-sm w-full">
                  We our pioneers in our field, constantly exploring new ideas
                  and pusing boundaries.
                </span>
              </li>
              <li className="mb-5 md:mb-3 max-w-lg">
                <h4 className="font-semibold ">Customer-Centric</h4>
                <span className="font-extralight text-sm w-full">
                  Our clients are at the heart of everything we do. We are
                  committed to delivering value and exceeding expectations.
                </span>
              </li>
              <li className="mb-5 md:mb-3 max-w-lg">
                <h4 className="font-semibold ">Expertise</h4>
                <span className="font-extralight text-sm w-full">
                  Our team consists of industry experts who bring a wealth of
                  knowledge and experience to each project.
                </span>
              </li>
              <li className="mb-5 md:mb-3 max-w-lg">
                <h4 className="font-semibold ">Integrity</h4>
                <span className="font-extralight text-sm w-full">
                  We operate with the highest level of integrity, ensuring
                  transparency, honesty, and ethical conduct in all our
                  endeavors.
                </span>
              </li>
            </ul>
          </div>
          <Image
            src="/man.png"
            alt="Man with laptop"
            height={500}
            width={500}
            className="ml-10 hidden md:block w-52 h-52 xl:w-auto xl:h-auto"
          />
        </div>
      </section>
      <section className="flex flex-col text-primary_text justify-center w-full items-center py-10 md:py-20">
        <h2 className="text-primary_text text-3xl md:text-4xl font-bold text-center pb-10">
          What's new?
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center w-full  px-10  lg:px-32">
          <div className="md:mr-5">
          <BlogCard />
          </div>
          <div className="hidden md:block md:mr-5">
            <BlogCard />
          </div>
          <div className="hidden md:block">
            <BlogCard />
          </div>
        </div>
      </section>
      <section className="bg-white text-primary_text flex flex-col justify-center items-center py-10 md:py-20 rounded-3xl">
      <h2 className="text-primary_text text-3xl md:text-4xl font-bold text-center pb-10">Testimonials</h2>
        <Quote className="w-7 h-7 md:w-10 md:h-10 mb-3" />
        <div className="flex flex-row justify-between w-full items-center">
          <ArrowLeft className="ml-5 md:ml-32" />
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-sm md:text-base my-3">
              I really like buying books from here! It has saved me a lot of
              time.
            </p>
            <Image
              src="https://randomuser.me/api/portraits/med/men/46.jpg"
              width={40}
              height={40}
              alt="Picture of a man"
              className="rounded-full my-3"
            />
            <span className="font-light text-xs">Ashley Wilson</span>
          </div>
          <ArrowRight className="mr-5 md:mr-32" />
        </div>
      </section>
      <section className="flex flex-row text-primary_text justify-between w-full items-center py-10 md:py-20 px-10 md:px-32">
        <div className="justify-center items-center">
          <Image
            src="/hero.png"
            alt="Hero Section"
            width={450}
            height={200}
            className="bg-secondary rounded-3xl z-20 hidden md:block"
          />
        </div>
        <div className="w-full flex flex-col justify-start md:justify-center items-center md:mx-10">
          <div className="pb-10">
          <h2 className="text-primary_text text-3xl text-start md:text-4xl font-bold md:text-center pb-7 md:pb-10">
              Become a Part of Us!
            </h2>
            <span className="text-sm md:text-base">Join us to make some difference!</span>
          </div>
          <InputWithButton />
        </div>
      </section>
    </main>
  );
}

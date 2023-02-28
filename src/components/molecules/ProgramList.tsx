import React from "react";
import CardContents from "../atoms/Cards";
import Button from "../atoms/Button";
import Cards from "../atoms/Cards";

const List = [
  {
    image: "/static/image/Container1.png",
    caption: "Pelatihan manajemen organısası bagı pengurus dan anggota SEHJIRA",
  },
  {
    image: "/static/image/Container2.png",
    caption: "Kelas Kursus Komputer tingkat dasar dan Mahir",
  },
  {
    image: "/static/image/Container3.png",
    caption: "Kelas bahasa Isyarat Bisindo dan ASL/ISL",
  },
  {
    image: "/static/image/Container4.png",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
];

const ProgramList = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-10 gap-5  ">
      <div className=" text-center">
        <h1>Program Unggulan SEHJIRA</h1>
      </div>
      <div className=" flex flex-wrap items-center justify-center gap-5">
        {List.map((e, i) => {
          return <Cards key={i} image={e.image} caption={e.caption} />;
        })}
      </div>
      <div className="ml-5  text-[#843C74] w-auto rounded mt-5 mb-14 h-14    ">
        <Button style="p-4 pb-20 " title="Lihat Semua Program Unggulan" />
      </div>
    </div>
  );
};

export default ProgramList;

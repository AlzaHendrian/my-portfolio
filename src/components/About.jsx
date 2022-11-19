import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          quam odio tempore, ullam accusantium praesentium quo, dolores natus
          voluptatem quas voluptate commodi quae rem incidunt alias corrupti in
          recusandae libero facilis, officia nisi. Quibusdam aut rerum cumque
          fuga ullam, nemo delectus! Vero aliquam pariatur earum veritatis totam
          est repudiandae nobis!
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          explicabo fugit, molestiae facere consequatur aspernatur sint vitae
          repellat corrupti iste dolorum culpa in pariatur. Culpa quod eum
          ducimus consequatur possimus molestias labore cumque nisi enim quidem!
          Asperiores, cupiditate? Esse ducimus dignissimos dolorum quas atque a
          officia numquam voluptatum accusamus molestias!
        </p>
      </div>
    </div>
  );
};

export default About;

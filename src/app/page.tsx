import Card from "@/app/Card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Card />
      <main>
        <h1 className="text-4xl text-center">Hello world</h1>
        <Image
          src={"/images/suffer.png"}
          alt=""
          width={500}
          height={200}
          quality={100}
        />
        <Image
          src={
            "https://images.pexels.com/photos/5511553/pexels-photo-5511553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          width={500}
          height={200}
          quality={100}
        />
      </main>
    </>
  );
}

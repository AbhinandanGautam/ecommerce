import { getSession } from "next-auth/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      <main className=" max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ItemsFeed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://ecommerce-zeta-peach.vercel.app/api/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    }
  }
}

import productDesktop from "../assets/images/image-product-desktop.jpg";
import productMobile from "../assets/images/image-product-mobile.jpg";

function Main() {
  return (
    <div className="flex flex-col sm:flex-row justify-center max-w-[850px] w-[90%] mx-auto bg-white">
      <img
        className="h-[550px] w-full object-cover sm:block hidden"
        src={productDesktop}
        alt=""
      />
      <img
        className="sm:hidden min-h-[350px] object-cover"
        src={productMobile}
        alt=""
      />

      <section className="py-8 px-4 max-w-[400px] flex flex-col gap-8 font-josefin">
        <h2 className="tracking-widest text-xl text-gray-500">PERFUME</h2>
        <p className="text-3xl font-bold">Gabrielle Essence Eau De Parfum</p>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <section className="flex gap-6">
          <p className="text-4xl font-semibold text-green-600">$449</p>
          <p className="text-md line-through">$169.99</p>
        </section>
        <button className="w-full bg-green-800 text-white px-4 py-3 rounded-md hover:bg-green-900">
          Add to Cart
        </button>
      </section>
    </div>
  );
}

export default Main;

export default function AboutUsPage() {
  return (
    <div className="p-8 md:px-24 flex flex-col gap-8 text-center">
      <h2 className="text-2xl font-semibold">WELCOME TO MADBOULDER</h2>
      <p className="text-sm">
        We are a dedicated team working towards a future where outdoor climbing
        is accessible to everyone while creating a positive and sustainable
        impact on climbing areas and their surroundings.
      </p>
      <p className="text-sm">
        As outdoor enthusiasts ourselves, we understand the importance of
        high-quality information tailored to our community&apos;s needs.
        That&apos;s why our platform stands out by providing valuable resources
        that enhance the entire climbing journey. We pride ourselves on
        delivering exceptional content and adapting to the unique preferences
        and requirements of climbers.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mx-auto">
        <div className="flex flex-col justify-center h-24 w-44 rounded text-white font-semibold  text-center text-xl bg-cover bg-[url('/images/example.jpeg')]">
          <h4>237</h4>
          <h4>AREAS</h4>
        </div>
        <div className="flex flex-col justify-center h-24 w-44 rounded text-white font-semibold  text-center text-xl bg-cover bg-[url('/images/example.jpeg')]">
          <h4>8893</h4>
          <h4>VIDEOS</h4>
        </div>
        <div className="flex flex-col justify-center h-24 w-44 rounded text-white font-semibold  text-center text-xl bg-cover bg-[url('/images/example.jpeg')]">
          <h4>591</h4>
          <h4>CONTRIBUTORS</h4>
        </div>
      </div>
      <p className="text-sm">
        Join MadBoulder and make outdoor climbing sustainable and accessible for
        all!
      </p>
      <button className="bg-yellow-400  text-neutral-700 font-semibold rounded w-fit px-4 py-2 mx-auto">
        JOIN THE TEAM
      </button>
    </div>
  );
}

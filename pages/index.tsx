import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  const handleClick = () => alert('Button clicked!');

  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to the ALX Listing App</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Modern Apartment"
            imageSrc="/assets/house1.jpeg"
            description="A beautiful apartment in the city center."
          />
          <Card
            title="Cozy Cottage"
            imageSrc="/assets/house2.jpeg"
            description="Enjoy the countryside with this peaceful retreat."
          />
        </div>

        <div className="mt-8">
          <Button label="Explore More" onClick={handleClick} />
        </div>
      </main>
    </div>
  );
}

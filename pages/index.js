import Card from '../components/Card';
import BouncingBall from '../components/BouncingBall';
import Neumorphism from '../components/Neumorphism';

export default function Home() {
  return (
    <div className='bg-gradient-bg min-h-screen'>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 "
      >
        <Card />
        <BouncingBall />
        <Neumorphism />
      </div>
    </div >
  );
}

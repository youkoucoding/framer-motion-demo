import Card from '../components/Card';
import BouncingBall from '../components/BouncingBall';

export default function Home() {
  return (
    <div className='bg-gradient-bg min-h-screen'>
      <div
        className="flex items-center justify-center"
      >
        <div className='w-1/3 mr-12'>
          <Card />
        </div>
        <div className='w-1/3 mx-12 px-20'>

          <BouncingBall />
        </div>
      </div>
    </div>
  );
}

import { Tracker } from '@/components';

function HomePage() {
  return (
    <div className="px-5 pt-[calc((100dvh-400px)/2)] tracker:mx-auto tracker:w-fit">
      <Tracker className="tracker:w-[400px]" />
    </div>
  );
}

export default HomePage;

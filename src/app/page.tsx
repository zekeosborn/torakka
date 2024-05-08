import { Tracker } from '@/components';

function HomePage() {
  return (
    <div className="mb-8 px-6 pt-[calc(((100dvh-400px)/2)-80px)] tracker:mx-auto tracker:w-fit">
      <Tracker className="tracker:w-[400px]" />
    </div>
  );
}

export default HomePage;

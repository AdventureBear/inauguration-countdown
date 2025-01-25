// app/page.tsx
import Countdown from '../components/Countdown';
import Events from "@/components/Events";

export default function Home() {
  return (
      <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
              Trumps Second Term Ends in ... days!
          </h1>
        <h2 className="text-xl font-bold text-center mb-8">
          Next US Presidential Inauguration Countdown
        </h2>

         <Countdown eventDate="2029-01-20"/>
          <Events />

      </main>
  );
}
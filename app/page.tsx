// app/page.tsx
import Countdown from '../components/Countdown';
import Events from "@/components/Events";

export default function Home() {
  return (
      <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Countdown to the Next US Presidential Inauguration 
          </h1>
        

         <Countdown eventDate="2029-01-20"/>
         
          <Events />

      </main>
  );
}
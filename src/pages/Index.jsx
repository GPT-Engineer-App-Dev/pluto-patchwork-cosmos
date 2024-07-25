import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Mountain, Clock, Ruler } from "lucide-react";

const MarsFacts = [
  { icon: <Ruler className="h-4 w-4" />, title: "Diameter", content: "4,212 miles (6,779 km)" },
  { icon: <Mountain className="h-4 w-4" />, title: "Highest Peak", content: "Olympus Mons (21.9 km)" },
  { icon: <Thermometer className="h-4 w-4" />, title: "Avg. Temperature", content: "-63°C (-81°F)" },
  { icon: <Clock className="h-4 w-4" />, title: "Day Length", content: "24 hours, 37 minutes" },
];

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Discover Mars: The Red Planet</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img src="/placeholder.svg" alt="Mars" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">The Fourth Planet from the Sun</h2>
          <p className="text-lg mb-4">
            Mars, often called the Red Planet, is the fourth planet from the Sun in our solar system. It's known for its reddish appearance, thin atmosphere, and potential for harboring past or present microbial life.
          </p>
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Learn More"}
          </Button>
        </div>
      </div>

      {showMore && (
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Fascinating Mars Facts</CardTitle>
            <CardDescription>Discover some intriguing details about the Red Planet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {MarsFacts.map((fact, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-3 mb-2">
                    {fact.icon}
                  </div>
                  <h3 className="font-semibold">{fact.title}</h3>
                  <p className="text-sm">{fact.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mars Overview</CardTitle>
            <CardDescription>Key information about the Red Planet</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth. It is the site of Olympus Mons, the largest known volcano and highest known mountain in the Solar System, and of Valles Marineris, one of the largest canyons in the Solar System.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Exploration of Mars</CardTitle>
            <CardDescription>Missions and discoveries</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Mars has been explored by several uncrewed spacecraft. Mariner 4 was the first spacecraft to visit Mars, making its closest approach in 1964. The first spacecraft to successfully land on Mars was Viking 1 in 1976. More recently, Mars rovers like Spirit, Opportunity, Curiosity, and Perseverance have significantly advanced our understanding of the planet. The latest missions include NASA's Perseverance rover and China's Tianwen-1 mission, both launched in 2020.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Potential for Life on Mars</CardTitle>
            <CardDescription>The search for past or present life</CardDescription>
          </CardHeader>
          <CardContent>
            <p>The possibility of life on Mars is a subject of significant interest to astrobiologists due to its proximity and similarities to Earth. To date, no proof has been found of past or present life on Mars. However, evidence has been found that suggests there was liquid water on the surface in ancient times, and the discovery of traces of methane in the atmosphere may indicate the presence of microbial life. Ongoing missions continue to search for biosignatures and habitable environments on the Red Planet.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

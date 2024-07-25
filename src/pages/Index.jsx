import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wind, Zap, Ruler, Scale } from "lucide-react";

const JupiterFacts = [
  { icon: <Ruler className="h-4 w-4" />, title: "Diameter", content: "88,846 miles (142,984 km)" },
  { icon: <Scale className="h-4 w-4" />, title: "Mass", content: "1.9 x 10^27 kg (318 Earths)" },
  { icon: <Wind className="h-4 w-4" />, title: "Atmosphere", content: "Hydrogen and Helium" },
  { icon: <Zap className="h-4 w-4" />, title: "Magnetic Field", content: "14 times stronger than Earth's" },
];

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Discover Jupiter: The Giant Planet</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img src="/placeholder.svg" alt="Jupiter" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">The Largest Planet in Our Solar System</h2>
          <p className="text-lg mb-4">
            Jupiter, the fifth planet from the Sun, is a gas giant and the largest planet in our solar system. It's known for its impressive size, powerful magnetic field, and the Great Red Spot, a giant storm that has been raging for centuries.
          </p>
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Learn More"}
          </Button>
        </div>
      </div>

      {showMore && (
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Fascinating Jupiter Facts</CardTitle>
            <CardDescription>Discover some intriguing details about this gas giant</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {JupiterFacts.map((fact, index) => (
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

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="exploration">Exploration</TabsTrigger>
          <TabsTrigger value="moons">Moons</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Jupiter Overview</CardTitle>
              <CardDescription>Key information about the gas giant</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Jupiter is primarily composed of hydrogen and helium, similar to the Sun. It lacks a solid surface and is characterized by colorful bands and spots caused by strong winds in its upper atmosphere. The planet's rapid rotation (a day lasts only about 10 hours) creates strong jet streams, separating its clouds into dark belts and bright zones.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exploration">
          <Card>
            <CardHeader>
              <CardTitle>Exploration of Jupiter</CardTitle>
              <CardDescription>Missions and discoveries</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Several spacecraft have visited Jupiter, including Pioneer 10 and 11, Voyager 1 and 2, Ulysses, Cassini, New Horizons, and Juno. The Galileo mission, which arrived in 1995, dropped a probe into Jupiter's atmosphere and conducted extended observations of the planet and its moons. Currently, NASA's Juno spacecraft is orbiting Jupiter, providing new insights into the planet's composition, gravity field, magnetic field, and polar magnetosphere.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="moons">
          <Card>
            <CardHeader>
              <CardTitle>Jupiter's Moons</CardTitle>
              <CardDescription>The satellites orbiting Jupiter</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Jupiter has a vast system of moons, with 79 known satellites. The four largest moons, known as the Galilean moons, are Io, Europa, Ganymede, and Callisto. Io is the most volcanically active body in the solar system, Europa may have an ocean beneath its icy surface, Ganymede is the largest moon in the solar system, and Callisto is heavily cratered. These moons are each unique worlds with fascinating characteristics that continue to intrigue scientists.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;

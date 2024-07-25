import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Info, MapPin, Thermometer } from "lucide-react";

const PlutoFacts = [
  { icon: <MapPin className="h-4 w-4" />, title: "Distance from Sun", content: "3.7 billion miles" },
  { icon: <Thermometer className="h-4 w-4" />, title: "Surface Temperature", content: "-387°F to -369°F" },
  { icon: <Info className="h-4 w-4" />, title: "Diameter", content: "1,477 miles (2,377 km)" },
  { icon: <Camera className="h-4 w-4" />, title: "Discovered", content: "February 18, 1930" },
];

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Discover Pluto: The Dwarf Planet</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img src="/placeholder.svg" alt="Pluto" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">The Mysterious World at the Edge of Our Solar System</h2>
          <p className="text-lg mb-4">
            Pluto, once considered the ninth planet, is now classified as a dwarf planet. Despite its small size, it continues to captivate scientists and space enthusiasts alike with its unique characteristics and mysterious nature.
          </p>
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Learn More"}
          </Button>
        </div>
      </div>

      {showMore && (
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Fascinating Pluto Facts</CardTitle>
            <CardDescription>Discover some intriguing details about this distant world</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PlutoFacts.map((fact, index) => (
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
              <CardTitle>Pluto Overview</CardTitle>
              <CardDescription>Key information about the dwarf planet</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pluto is a complex world with mountains, valleys, plains, craters, and perhaps glaciers. Its surface is composed of a mixture of rock and various ices (water, methane, and nitrogen). It has a thin atmosphere that expands when it comes closer to the Sun and collapses as it moves farther away.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exploration">
          <Card>
            <CardHeader>
              <CardTitle>Exploration of Pluto</CardTitle>
              <CardDescription>Missions and discoveries</CardDescription>
            </CardHeader>
            <CardContent>
              <p>The New Horizons spacecraft, launched in 2006, provided humanity's first close-up view of Pluto and its moons in July 2015. This flyby revolutionized our understanding of Pluto, revealing a world far more complex than previously imagined, with diverse landscapes and potential geological activity.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="moons">
          <Card>
            <CardHeader>
              <CardTitle>Pluto's Moons</CardTitle>
              <CardDescription>The satellites orbiting Pluto</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pluto has five known moons: Charon (the largest, discovered in 1978), Nix, Hydra (both discovered in 2005), Kerberos (discovered in 2011), and Styx (discovered in 2012). Charon is so large that Pluto and Charon are sometimes referred to as a double dwarf planet system.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;

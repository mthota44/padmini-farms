import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Search, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hen1 from "@/assets/hen-1.jpg";
import hen2 from "@/assets/hen-2.jpg";

const hensData = [
  {
    id: 1,
    name: "Rosie",
    breed: "Rhode Island Red",
    age: "2 years",
    eggs: "Brown",
    location: "Green Valley Farm",
    image: hen1,
    description: "Friendly and social, loves morning treats",
  },
  {
    id: 2,
    name: "Pearl",
    breed: "Sussex",
    age: "1.5 years",
    eggs: "Cream",
    location: "Sunshine Acres",
    image: hen2,
    description: "Gentle and curious, enjoys exploring",
  },
  {
    id: 3,
    name: "Cinnamon",
    breed: "Buff Orpington",
    age: "3 years",
    eggs: "Light Brown",
    location: "Green Valley Farm",
    image: hen1,
    description: "Calm and affectionate, great with kids",
  },
  {
    id: 4,
    name: "Snowflake",
    breed: "Leghorn",
    age: "1 year",
    eggs: "White",
    location: "Morning Dew Ranch",
    image: hen2,
    description: "Energetic and active, loves to forage",
  },
  {
    id: 5,
    name: "Ginger",
    breed: "New Hampshire Red",
    age: "2.5 years",
    eggs: "Brown",
    location: "Sunshine Acres",
    image: hen1,
    description: "Productive layer with sweet temperament",
  },
  {
    id: 6,
    name: "Daisy",
    breed: "Plymouth Rock",
    age: "2 years",
    eggs: "Light Brown",
    location: "Green Valley Farm",
    image: hen2,
    description: "Friendly and docile, excellent for families",
  },
];

const Hens = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Our Happy Hens
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl animate-slide-up">
              Every hen has a unique personality and story. Watch their videos, learn about their breed, and find your perfect match.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-background py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name or breed..." 
                  className="pl-10"
                />
              </div>
              <select className="px-4 py-2 border border-input rounded-md bg-background">
                <option>All Breeds</option>
                <option>Rhode Island Red</option>
                <option>Sussex</option>
                <option>Buff Orpington</option>
                <option>Leghorn</option>
              </select>
              <select className="px-4 py-2 border border-input rounded-md bg-background">
                <option>All Locations</option>
                <option>Green Valley Farm</option>
                <option>Sunshine Acres</option>
                <option>Morning Dew Ranch</option>
              </select>
            </div>
          </div>
        </section>

        {/* Hens Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hensData.map((hen) => (
                <Card key={hen.id} className="overflow-hidden shadow-card hover:shadow-soft transition-smooth group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={hen.image} 
                      alt={`${hen.name} - ${hen.breed}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                      <div className="bg-white rounded-full p-4">
                        <Play className="h-8 w-8 text-primary" />
                      </div>
                    </button>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{hen.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {hen.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <Badge className="bg-primary">{hen.breed}</Badge>
                      <Badge variant="outline">{hen.age}</Badge>
                      <Badge variant="outline">{hen.eggs} eggs</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {hen.description}
                    </p>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Video
                      </Button>
                      <Button variant="outline">Details</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hens;

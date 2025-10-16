import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Award, Calendar, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const farmersData = [
  {
    id: 1,
    name: "Sarah Johnson",
    farm: "Green Valley Farm",
    location: "Countryside, CA",
    experience: "15 years",
    hens: 45,
    specialty: "Heritage Breeds",
    certifications: ["Organic Certified", "Humane Certified"],
    bio: "Passionate about preserving heritage chicken breeds and sustainable farming practices. Our farm has been in the family for three generations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    farm: "Sunshine Acres",
    location: "Green Hills, OR",
    experience: "8 years",
    hens: 30,
    specialty: "Free-Range Systems",
    certifications: ["Organic Certified", "Animal Welfare Approved"],
    bio: "Former software engineer turned farmer. Committed to technology-enhanced natural farming and transparent food systems.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    farm: "Morning Dew Ranch",
    location: "Valley View, WA",
    experience: "12 years",
    hens: 38,
    specialty: "Rotational Grazing",
    certifications: ["Organic Certified", "Regenerative Certified"],
    bio: "Pioneer in regenerative agriculture techniques. Focused on soil health, biodiversity, and creating thriving ecosystems.",
  },
  {
    id: 4,
    name: "David Thompson",
    farm: "Meadow Brook Farm",
    location: "Rolling Hills, CA",
    experience: "20 years",
    hens: 52,
    specialty: "Multi-Species Integration",
    certifications: ["Organic Certified", "Biodynamic Certified"],
    bio: "Expert in integrated farming systems. Our hens work alongside sheep and cattle in a harmonious ecosystem.",
  },
];

const Farmers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Meet Our Farmers
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl animate-slide-up">
              The passionate people behind every egg. Get to know the farmers who care for our hens with dedication and love.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Our Farming Philosophy</h2>
              <p className="text-muted-foreground">
                Every farmer in the Padmini Farms network shares our commitment to ethical, sustainable practices. 
                We believe in transparency, animal welfare, and building direct connections between farmers and families.
              </p>
            </div>
          </div>
        </section>

        {/* Farmers Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {farmersData.map((farmer) => (
                <Card key={farmer.id} className="overflow-hidden shadow-card hover:shadow-soft transition-smooth">
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl font-bold text-primary">
                          {farmer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{farmer.name}</h3>
                        <p className="text-lg font-medium text-primary mb-2">{farmer.farm}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {farmer.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {farmer.bio}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Experience</div>
                          <div className="font-medium">{farmer.experience}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🐔</span>
                        <div>
                          <div className="text-xs text-muted-foreground">Hens</div>
                          <div className="font-medium">{farmer.hens} birds</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Specialty: {farmer.specialty}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {farmer.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            ✓ {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-primary">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact {farmer.name.split(' ')[0]}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center shadow-soft">
              <h2 className="text-3xl font-bold mb-4">Join Our Farmer Network</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Are you a passionate farmer committed to ethical, organic practices? 
                Join Padmini Farms and connect directly with customers who value quality and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary">
                  Apply to Join
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Farmers;

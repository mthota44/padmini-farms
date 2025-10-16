import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Play, ShoppingCart, CheckCircle, Sprout, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-farm.jpg";
import hen1 from "@/assets/hen-1.jpg";
import hen2 from "@/assets/hen-2.jpg";
import freshEggs from "@/assets/fresh-eggs.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Meet Your Hens.<br />Love Your Eggs.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 animate-slide-up">
              Connect with local farmers, watch happy hens living naturally, and bring home the freshest organic eggs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/hens">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-soft">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Hens
                </Button>
              </Link>
              <Link to="/eggs">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Fresh Eggs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose Padmini Farms?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in transparency, care, and connection. Every hen has a story, and every egg matters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-card transition-smooth hover:shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Raised with Love</h3>
                <p className="text-muted-foreground">
                  Our hens roam free in natural pastures, fed organic grains, and cared for by passionate farmers.
                </p>
              </Card>

              <Card className="p-6 shadow-card transition-smooth hover:shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Organic</h3>
                <p className="text-muted-foreground">
                  No hormones, no antibiotics, no GMOs. Just pure, natural nutrition from farm to table.
                </p>
              </Card>

              <Card className="p-6 shadow-card transition-smooth hover:shadow-soft">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Meet the Farmers</h3>
                <p className="text-muted-foreground">
                  Know exactly where your food comes from. Watch videos, read stories, and connect directly.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Hens Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Featured Happy Hens
                </h2>
                <p className="text-lg text-muted-foreground">
                  Meet some of our star residents
                </p>
              </div>
              <Link to="/hens">
                <Button variant="outline">View All Hens</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-card hover:shadow-soft transition-smooth">
                <img 
                  src={hen1} 
                  alt="Beautiful brown heritage hen" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary">Rhode Island Red</Badge>
                    <Badge variant="outline">2 years old</Badge>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Rosie</h3>
                  <p className="text-muted-foreground mb-4">
                    A friendly, award-winning hen who loves morning treats. Produces beautiful brown eggs daily.
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden shadow-card hover:shadow-soft transition-smooth">
                <img 
                  src={hen2} 
                  alt="Beautiful white speckled hen" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary">Sussex</Badge>
                    <Badge variant="outline">1.5 years old</Badge>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Pearl</h3>
                  <p className="text-muted-foreground mb-4">
                    Gentle and curious, Pearl enjoys exploring the garden. Known for her large, cream-colored eggs.
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Fresh Eggs CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={freshEggs} 
                  alt="Basket of fresh organic eggs" 
                  className="rounded-2xl shadow-soft w-full"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-accent text-accent-foreground">Fresh Daily</Badge>
                <h2 className="text-4xl font-bold mb-6">
                  Farm-Fresh Organic Eggs
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Delivered straight from our farms to your kitchen. Rich, golden yolks from hens living their best lives.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>100% Certified Organic</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Free-Range & Pasture-Raised</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Weekly Subscription Available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Delivered Fresh to Your Door</span>
                  </li>
                </ul>
                <Link to="/eggs">
                  <Button size="lg" className="bg-primary">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Shop Eggs Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Happy Hens</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Local Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">5⭐</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

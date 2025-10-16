import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, CheckCircle, Truck, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import freshEggs from "@/assets/fresh-eggs.jpg";

const products = [
  {
    id: 1,
    name: "Half Dozen Organic Eggs",
    price: "$6.99",
    image: freshEggs,
    description: "6 fresh organic eggs from free-range hens",
    features: ["Free-range", "Organic certified", "Rich golden yolks"],
  },
  {
    id: 2,
    name: "Dozen Organic Eggs",
    price: "$11.99",
    image: freshEggs,
    description: "12 premium organic eggs, perfect for families",
    features: ["Free-range", "Organic certified", "Farm fresh daily"],
    popular: true,
  },
  {
    id: 3,
    name: "Weekly Egg Subscription",
    price: "$45.99/month",
    image: freshEggs,
    description: "1 dozen eggs delivered weekly to your door",
    features: ["Auto-delivery", "Save 10%", "Cancel anytime"],
  },
];

const Eggs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Fresh Organic Eggs
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl animate-slide-up">
              Golden yolks, rich flavor, and pure nutrition from happy, pasture-raised hens.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Free Local Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Orders over $25 ship free within 30 miles
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Freshness Guaranteed</h3>
                  <p className="text-sm text-muted-foreground">
                    Collected daily, delivered within 48 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Flexible Subscriptions</h3>
                  <p className="text-sm text-muted-foreground">
                    Pause, skip, or cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <Card key={product.id} className={`relative overflow-hidden shadow-card hover:shadow-soft transition-smooth ${product.popular ? 'border-2 border-primary' : ''}`}>
                  {product.popular && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10">
                      Most Popular
                    </Badge>
                  )}
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-primary">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Quality Promise</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every egg from Padmini Farms comes from hens living in natural, stress-free environments. 
                We never use antibiotics, hormones, or synthetic chemicals. What you get is pure, wholesome nutrition—the way nature intended.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Badge variant="outline" className="px-4 py-2 text-base">🌾 Organic Certified</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">🐔 Free-Range</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">🚫 No GMOs</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">💚 Humane Raised</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Eggs;

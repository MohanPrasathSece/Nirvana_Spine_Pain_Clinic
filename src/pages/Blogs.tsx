import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogsData } from "@/data/blogs";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blogs | Nirvana Spine & Pain Clinic"
        description="Read the latest healthcare insights, tips, and news from Nirvana Spine & Pain Clinic experts."
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container-medical text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, advice, and updates from our pain management experts to help you live a healthier, pain-free life.
            </p>
          </div>
        </section>

        {/* Blogs List Section */}
        <section className="py-16 md:py-24">
          <div className="container-medical">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogsData.map((blog) => (
                <Link to={`/blogs/${blog.id}`} key={blog.id} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Image */}
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-bold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <User className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{blog.author}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group/btn" asChild>
                        <span>
                          Read More 
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;

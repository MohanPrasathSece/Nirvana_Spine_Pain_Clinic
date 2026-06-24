import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogsData } from "@/data/blogs";
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const blog = blogsData.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
            <Button onClick={() => navigate("/blogs")}>Back to Blogs</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = blogsData.filter((b) => blog.relatedArticles.includes(b.id));

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${blog.title} | Nirvana Spine & Pain Clinic`}
        description={blog.excerpt}
      />
      <Header />

      <main className="flex-grow">
        <article className="pb-16 md:pb-24">
          {/* Header Image & Title */}
          <div className="w-full relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center py-20 mt-16 md:mt-20">
            <div className="absolute inset-0 bg-foreground/60 z-10" />
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-20 container-medical text-center px-4 md:px-6">
              <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full mb-6">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl mx-auto mb-6" style={{ lineHeight: 1.5 }}>
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/90 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-medical mt-12">
            <div className="max-w-3xl mx-auto">
              <Button variant="ghost" className="mb-8 -ml-4" asChild>
                <Link to="/blogs">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to all blogs
                </Link>
              </Button>

              {/* Content */}
              <div className="px-4 md:px-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground" style={{ lineHeight: 1.4 }}>
                  {blog.title}
                </h2>
                <div 
                  className="prose md:prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h3:text-xl md:prose-h3:text-2xl prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>

              {/* Author Bio (Optional) */}
              <div className="mt-12 md:mt-16 p-6 md:p-8 bg-primary/5 rounded-2xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 mx-4 md:mx-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Written by {blog.author}</h4>
                  <p className="text-muted-foreground text-sm mt-2 md:mt-1">
                    Expert pain management specialist dedicated to providing personalized care and lasting relief for patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container-medical">
              <h2 className="text-3xl font-heading font-bold mb-10 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
                {relatedArticles.map((relatedBlog) => (
                  <Link to={`/blogs/${relatedBlog.id}`} key={relatedBlog.id} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 block">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={relatedBlog.imageUrl}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-bold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        <span>
                          {relatedBlog.title}
                        </span>
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{relatedBlog.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

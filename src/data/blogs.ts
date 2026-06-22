import sciaticaImg from "@/assets/sciatica_spine.png";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  relatedArticles: string[]; // array of IDs
}

export const blogsData: BlogPost[] = [
  {
    id: "best-non-surgical-treatment-sciatica",
    title: "Best Non-Surgical Treatment for Sciatica in Hyderabad",
    excerpt: "Sciatica is one of the most common causes of leg pain, often starting in the lower back and radiating down the leg. Many patients in Hyderabad assume surgery is the only solution - but that's not true.",
    content: `
      <p>Sciatica is one of the most common causes of leg pain, often starting in the lower back and radiating down the leg. Many patients in Hyderabad assume surgery is the only solution - but that’s not true.</p>
      
      <p>At Nirvana Spine & Pain Clinic, Kokapet, advanced non-surgical treatments for sciatica help patients recover faster with minimal downtime.</p>
      
      <h3>What Causes Sciatica?</h3>
      <p>Sciatica occurs when the sciatic nerve is compressed due to:</p>
      <ul>
        <li>Slip disc (herniated disc)</li>
        <li>Spinal stenosis</li>
        <li>Muscle tightness or inflammation</li>
      </ul>
      
      <h3>Can Sciatica Be Treated Without Surgery?</h3>
      <p>Yes. In most cases, surgery is NOT required.</p>
      <p>Modern pain management treatments include:</p>
      <ul>
        <li>Image-guided injections</li>
        <li>Nerve block procedures</li>
        <li>Physiotherapy-based rehabilitation</li>
      </ul>
      <p>These treatments directly target the root cause of pain instead of just masking symptoms.</p>
      
      <h3>Fastest Way to Relieve Sciatica Pain</h3>
      <p>Early diagnosis and targeted treatment are key. Ignoring symptoms can worsen nerve compression.</p>
      <p>If you are in Kokapet, Financial District, or Gachibowli, consulting a pain specialist early can prevent long-term complications.</p>
      
      <h3>When Should You See a Doctor?</h3>
      <ul>
        <li>Pain lasting more than 1 week</li>
        <li>Numbness or tingling in legs</li>
        <li>Difficulty walking or sitting</li>
      </ul>
      
      <h3>Why Choose Nirvana Spine & Pain Clinic?</h3>
      <ul>
        <li>Non-surgical pain management approach</li>
        <li>Advanced interventional treatments</li>
        <li>Personalized care for each patient</li>
      </ul>
      
      <h3>FAQs</h3>
      <h4>Can sciatica go away on its own?</h4>
      <p>Mild cases may improve, but persistent pain needs medical attention.</p>
      
      <h4>Is bed rest good for sciatica?</h4>
      <p>No, prolonged rest can worsen the condition.</p>
      
      <h4>Who is the best doctor for sciatica in Hyderabad?</h4>
      <p>A qualified pain management specialist is the best choice for non-surgical treatment.</p>
    `,
    author: "Dr. Vamshi Bharadwaj",
    date: "June 22, 2026",
    readTime: "3 min read",
    imageUrl: sciaticaImg,
    category: "Sciatica",
    relatedArticles: []
  }
];

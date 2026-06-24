import sciaticaImg from "@/assets/sciatica_spine.png";
import slipDiscImg from "@/assets/condition-slip-disc.jpg";
import backPainImg from "@/assets/condition-back-pain.jpg";
import officePainImg from "@/assets/office_back_pain.png";

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
    excerpt: "Sciatica is one of the most common causes of leg pain, often starting in the lower back and radiating down the leg. Many patients in Hyderabad assume surgery is the only solution—but that’s not true.",
    content: `
      <p>Sciatica is one of the most common causes of leg pain, often starting in the lower back and radiating down the leg. Many patients in Hyderabad assume surgery is the only solution—but that’s not true.</p>
      
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
    relatedArticles: ["slip-disc-treatment-without-surgery", "ignoring-back-neck-pain"]
  },
  {
    id: "slip-disc-treatment-without-surgery",
    title: "Slip Disc Treatment Without Surgery: Is It Possible?",
    excerpt: "A slip disc (herniated disc) is one of the leading causes of back pain in working professionals across Hyderabad. The biggest myth? Surgery is the only solution.",
    content: `
      <p>A slip disc (herniated disc) is one of the leading causes of back pain in working professionals across Hyderabad.</p>
      <p>The biggest myth? Surgery is the only solution.</p>
      
      <h3>What is a Slip Disc?</h3>
      <p>It occurs when the soft cushion between spinal bones bulges out and presses on nerves, causing:</p>
      <ul>
        <li>Back pain</li>
        <li>Leg pain</li>
        <li>Numbness or weakness</li>
      </ul>
      
      <h3>Can a Slip Disc Heal Without Surgery?</h3>
      <p>Yes. Most cases can be treated without surgery using advanced pain management techniques.</p>
      
      <h3>Non-Surgical Treatment Options</h3>
      <p>Modern interventional pain management offers highly targeted therapies, including:</p>
      <ul>
        <li>Epidural steroid injections</li>
        <li>Nerve root blocks</li>
        <li>Targeted physiotherapy</li>
      </ul>
      <p>These treatments reduce inflammation and relieve nerve pressure effectively, allowing the disc to heal naturally over time.</p>
      
      <h3>Why Avoid Immediate Surgery?</h3>
      <p>Surgery is only required in severe cases (such as progressive loss of bowel/bladder control or severe muscle weakness). Non-surgical options are:</p>
      <ul>
        <li><strong>Safer:</strong> Minimal risk compared to major spinal surgery.</li>
        <li><strong>Faster recovery:</strong> No hospital stays or long downtime.</li>
        <li><strong>Cost-effective:</strong> Significantly lower healthcare expenses.</li>
      </ul>
      
      <h3>When Should You Seek Treatment?</h3>
      <ul>
        <li>Pain lasting more than 10 days</li>
        <li>Pain spreading to legs (referred pain/sciatica)</li>
        <li>Difficulty in daily activities like walking or sitting</li>
      </ul>
      <p>If you are located near Gachibowli, Kokapet, or Financial District, early treatment can prevent worsening and protect nerve function.</p>
      
      <h3>FAQs</h3>
      <h4>Is walking good for slip disc?</h4>
      <p>Yes, gentle walking on flat surfaces can help maintain mobility, but only under professional guidance and avoiding painful movements.</p>
      <h4>Can slip disc be cured permanently?</h4>
      <p>With proper targeted treatment, posture correction, and lifestyle changes, long-term pain-free relief is highly achievable.</p>
      <h4>Which doctor should I consult for slip disc in Hyderabad?</h4>
      <p>A qualified interventional pain management specialist is ideal for non-surgical care and advanced spine care.</p>
    `,
    author: "Dr. Vamshi Bharadwaj",
    date: "June 22, 2026",
    readTime: "3 min read",
    imageUrl: slipDiscImg,
    category: "Slip Disc",
    relatedArticles: ["best-non-surgical-treatment-sciatica", "working-long-hours-pain"]
  },
  {
    id: "ignoring-back-neck-pain",
    title: "Ignoring Back or Neck Pain? Here’s What Most People in Hyderabad Don’t Realize",
    excerpt: "“I thought it was just normal pain.” That’s how most people describe their condition when they finally visit a doctor. Ignoring recurring back or neck pain is a common mistake that can lead to chronic complications.",
    content: `
      <p>“I thought it was just normal pain.”</p>
      <p>That’s how most people describe their condition when they finally visit a doctor.</p>
      <p>In fast-paced areas like Kokapet, Gachibowli, and Financial District, long working hours and sedentary lifestyles have made back and neck pain extremely common. But common doesn’t mean normal.</p>

      <h3>Why Does Pain Keep Coming Back?</h3>
      <p>Pain usually starts small—a slight discomfort after long sitting or working. Over time, it becomes frequent. Common causes include:</p>
      <ul>
        <li>Muscle strain from poor posture</li>
        <li>Slip disc (disc bulge)</li>
        <li>Nerve compression</li>
        <li>Cervical or lumbar issues</li>
      </ul>
      <p>Ignoring these early signs often leads to chronic pain conditions that are much harder to treat later.</p>

      <h3>The Biggest Mistake: Relying on Painkillers</h3>
      <p>Painkillers may give temporary relief, but they don’t treat the root cause. With repeated use:</p>
      <ul>
        <li>Pain returns again and again</li>
        <li>Dependency and tolerance increase</li>
        <li>Underlying condition worsens silently</li>
      </ul>
      <p>This is why many patients feel stuck in a cycle of pain, getting temporary fixes without actual healing.</p>

      <h3>When Should You Take Pain Seriously?</h3>
      <p>You should consult a specialist if:</p>
      <ul>
        <li>Pain lasts more than a few days</li>
        <li>It keeps coming back (recurring episodes)</li>
        <li>Pain spreads to arms or legs</li>
        <li>You feel numbness, tingling, or weakness</li>
      </ul>
      <p>Early treatment can prevent long-term complications and structural spine damage.</p>

      <h3>Can Pain Be Treated Without Surgery?</h3>
      <p>Yes—most cases do NOT require surgery.</p>
      <p>Modern pain management focuses on:</p>
      <ul>
        <li>Targeted, non-surgical treatments</li>
        <li>Image-guided procedures (for precise targeting)</li>
        <li>Addressing the exact source of pain</li>
      </ul>
      <p>This approach helps patients recover faster and avoid unnecessary surgery.</p>

      <h3>Why Choosing the Right Clinic Matters</h3>
      <p>Many general treatments only focus on symptoms. A specialized pain clinic focuses on:</p>
      <ul>
        <li>✔ Identifying the root cause</li>
        <li>✔ Providing targeted treatment</li>
        <li>✔ Preventing recurrence</li>
      </ul>
      <p>For people living near Kokapet and Financial District, choosing a nearby specialized clinic also ensures better follow-up and faster recovery.</p>

      <h3>FAQs</h3>
      <h4>Is daily back or neck pain normal?</h4>
      <p>No. Persistent pain is a sign of an underlying issue that requires clinical evaluation.</p>
      <h4>Can back pain go away on its own?</h4>
      <p>Mild cases due to temporary fatigue may improve, but recurring pain needs medical attention.</p>
      <h4>What is the best treatment for chronic pain in Hyderabad?</h4>
      <p>Non-surgical, targeted treatments offered by pain specialists are highly effective and have minimal downtime.</p>

      <h3>Final Thought</h3>
      <p>Pain is your body’s warning signal.</p>
      <p>Ignoring it may seem easy today—but it often leads to bigger problems tomorrow. If you’re dealing with recurring pain in Hyderabad, choosing the right treatment early can make all the difference.</p>
    `,
    author: "Dr. Vamshi Bharadwaj",
    date: "June 24, 2026",
    readTime: "4 min read",
    imageUrl: backPainImg,
    category: "Spine Care",
    relatedArticles: ["working-long-hours-pain", "slip-disc-treatment-without-surgery"]
  },
  {
    id: "working-long-hours-pain",
    title: "Working Long Hours? Here’s Why Your Body Is Paying the Price",
    excerpt: "8–10 hours of sitting. Back-to-back meetings. Minimal movement. For many professionals in Gachibowli, Hitech City, and Financial District, this desk job routine comes at a high physical cost.",
    content: `
      <p>8–10 hours of sitting.</p>
      <p>Back-to-back meetings.</p>
      <p>Minimal movement.</p>
      <p>For many professionals in Gachibowli, Hitech City, and Financial District, this has become a daily routine.</p>
      <p>But your body is quietly keeping track.</p>

      <h3>The Hidden Impact of a Desk Job</h3>
      <p>What starts as slight discomfort can slowly turn into:</p>
      <ul>
        <li>Persistent back pain</li>
        <li>Neck stiffness</li>
        <li>Shoulder tightness</li>
        <li>Pain radiating to arms or legs</li>
      </ul>
      <p>Most people ignore these signs, assuming it’s just part of their job. It’s not.</p>

      <h3>Why Does Sitting Cause So Much Pain?</h3>
      <p>Long sitting hours put constant pressure on your spine.</p>
      <p>Over time, this can lead to:</p>
      <ul>
        <li>Poor posture habits (slouching)</li>
        <li>Muscle imbalance and core weakness</li>
        <li>Disc-related issues (like slip disc)</li>
        <li>Nerve compression</li>
      </ul>
      <p>This is why many IT professionals experience recurring pain even at a young age. One of the biggest mistakes is delaying treatment. People usually try temporary fixes like pain relief sprays, painkillers, or heat patches, but these only mask the pain—not solve it.</p>

      <h3>When Should You Be Concerned?</h3>
      <p>If you notice:</p>
      <ul>
        <li>Pain after every workday</li>
        <li>Difficulty sitting for long hours</li>
        <li>Pain spreading to arms or legs</li>
        <li>Stiffness even after rest</li>
      </ul>
      <p>…it’s time to take it seriously.</p>

      <h3>Can This Be Treated Without Surgery?</h3>
      <p>Yes. Most work-related pain conditions can be treated without surgery.</p>
      <p>Modern pain management focuses on:</p>
      <ul>
        <li>Identifying the exact cause</li>
        <li>Targeted, non-surgical treatments</li>
        <li>Long-term relief, not temporary fixes</li>
      </ul>
      <p>Early intervention can reverse many of these issues before they require surgical care.</p>

      <h3>Why Location Matters for Treatment?</h3>
      <p>For professionals working in Kokapet, Gachibowli, and Financial District, choosing a nearby pain clinic helps in:</p>
      <ul>
        <li>Regular, convenient follow-ups</li>
        <li>Faster recovery and less travel stress</li>
        <li>Consistent care coordination</li>
      </ul>

      <h3>FAQs</h3>
      <h4>Why do I get back pain after sitting for long hours?</h4>
      <p>Prolonged sitting puts pressure on the spine, compresses the discs, and weakens supporting back and core muscles.</p>
      <h4>Is work-related back pain serious?</h4>
      <p>If ignored, it can develop into chronic conditions like a herniated slip disc or nerve issues.</p>
      <h4>What is the best treatment for office-related pain in Hyderabad?</h4>
      <p>Non-surgical, targeted treatments provided by pain specialists, combined with ergonomic corrections, are highly effective.</p>
    `,
    author: "Dr. Vamshi Bharadwaj",
    date: "June 24, 2026",
    readTime: "3 min read",
    imageUrl: officePainImg,
    category: "Lifestyle",
    relatedArticles: ["ignoring-back-neck-pain", "slip-disc-treatment-without-surgery"]
  }
];


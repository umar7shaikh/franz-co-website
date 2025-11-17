import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';
import Blog4 from '../../assets/Blog4.webp';

const blogs = [
  {
    image: Blog1,
    category: 'Category',
    readTime: '30 min read',
    title: 'Why Modern Homebuyers Prioritize Fitness Amenities [White Paper]',
    href: 'https://www.koltepatil.com/blog/why-an-active-lifestyle-is-key-in-modern-residential-projects'
  },
  {
    image: Blog2,
    category: 'Category',
    readTime: '25 min read',
    title: 'Compliance Checklist: Setting Up Commercial Gyms in India',
    href: 'https://mindbodyonline.com/business/education/blog/gym-design-fitness-entrepreneurs'
  },
  {
    image: Blog3,
    category: 'Category',
    readTime: '10 min read',
    title: 'Maintenance Best Practices for Community Fitness Centers',
    href: 'https://againfaster.eu/blogs/industry-news/steal-these-20-commercial-gym-design-ideas'
  },
  {
    image: Blog4,
    category: 'Category',
    readTime: '15 min read',
    title: 'ROI Analysis: Gym Amenities vs. Other Community Facilities',
    href: 'https://poetreehomes.com/blog/luxury-real-estate-trends'
  }
];

const BlogSection = () => (
  <section
    style={{
      width: '100%',
      minHeight: 620,
      padding: '84px 0 70px 0',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        width: 1280,
        maxWidth: 1280,
        margin: '0 auto'
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 38 }}>
        <div className="font-poppins" style={{
          color: '#C34A36',
          fontWeight: 600,
          fontSize: 15,
          marginBottom: 10,
          letterSpacing: 1
        }}>
          Blog
        </div>
        <h2 className="font-unbounded" style={{
          fontWeight: 700,
          fontSize: 45,
          color: '#3B2327',
          marginBottom: 0,
          lineHeight: "1.1"
        }}>
          Insights for Real Estate<br />Professionals
        </h2>
      </div>

      {/* Blog Cards */}
      <div style={{
        display: 'flex',
        gap: 32,
        marginBottom: 15,
        marginTop: 15
      }}>
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            style={{
              background: '#fff',
              borderRadius: 17,
              boxShadow: '0 2px 12px 0 rgba(60,38,32,0.02)',
              width: 292,
              minWidth: 228,
              maxWidth: 296,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              overflow: 'hidden',
              border: '1px solid #f5e9e2'
            }}
          >
            <a href={blog.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%' }}>
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: '100%',
                  height: 154,
                  objectFit: 'cover',
                  borderTopLeftRadius: 17,
                  borderTopRightRadius: 17
                }}
              />
              <div style={{ padding: '18px 18px 13px 18px', background: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                  <span style={{
                    color: '#C34A36', fontWeight: 600, fontSize: 13, fontFamily: 'Poppins'
                  }}>{blog.category}</span>
                  <span style={{
                    color: '#bdb1af', fontWeight: 400, fontSize: 13, marginLeft: 4
                  }}>{blog.readTime}</span>
                </div>
                <div className="font-poppins" style={{
                  fontWeight: 600,
                  fontSize: 16,
                  color: '#18191A',
                  marginBottom: 18
                }}>
                  {blog.title}
                </div>
                <div className="font-poppins"
                  style={{
                    color: '#C34A36',
                    fontSize: 14,
                    fontWeight: 500,
                    marginTop: 10,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Read more
                  <span style={{ marginLeft: 6, fontSize: 20, display: 'inline-block', lineHeight: 1 }}>&#8250;</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination dots (placeholder, as in your screenshot) */}
      <div style={{
        display: 'flex',
        gap: 8,
        marginTop: 26,
        marginLeft: 7
      }}>
        <div style={{
          width: 20, height: 7, borderRadius: 6, background: "#C34A36", opacity: 0.88
        }} />
        <div style={{
          width: 9, height: 7, borderRadius: 6, background: "#f4ded7", opacity: 1
        }} />
        <div style={{
          width: 9, height: 7, borderRadius: 6, background: "#f4ded7", opacity: 1
        }} />
      </div>
    </div>
  </section>
);

export default BlogSection;

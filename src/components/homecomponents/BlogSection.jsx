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
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .blog-section {
            padding: 48px 16px !important;
            min-height: auto !important;
          }

          .blog-main-container {
            width: 100% !important;
            max-width: 100% !important;
          }

          .blog-header {
            margin-bottom: 20px !important;
            text-align: left !important;
          }

          .blog-label {
            font-size: 12px !important;
            margin-bottom: 8px !important;
            line-height: 1.3 !important;
          }

          .blog-title {
            font-size: 24px !important;
            line-height: 1.2 !important;
            margin-bottom: 0 !important;
          }

          .blog-cards-container {
            flex-direction: column !important;
            gap: 16px !important;
            margin-top: 12px !important;
            margin-bottom: 12px !important;
          }

          .blog-card {
            width: 100% !important;
            max-width: 100% !important;
            min-width: auto !important;
            border-radius: 12px !important;
            padding: 0 !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
          }

          .blog-image {
            height: 180px !important;
            border-radius: 12px 12px 0 0 !important;
          }

          .blog-card-content {
            padding: 16px !important;
            background: #fff !important;
          }

          .blog-meta-row {
            gap: 6px !important;
            margin-bottom: 8px !important;
            align-items: center !important;
          }

          .blog-category-mobile {
            font-size: 12px !important;
            font-weight: 600 !important;
            color: #C34A36 !important;
          }

          .blog-read-time-mobile {
            font-size: 12px !important;
            color: #bdb1af !important;
            margin-left: 4px !important;
          }

          .blog-title-mobile {
            font-size: 16px !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
            font-weight: 600 !important;
            color: #18191A !important;
          }

          .blog-read-more-mobile {
            font-size: 13px !important;
            margin-top: 8px !important;
            padding: 8px 12px !important;
            background: none !important;
            border: 1px solid #C34A36 !important;
            border-radius: 6px !important;
            color: #C34A36 !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            align-items: center !important;
            gap: 4px !important;
          }

          .blog-pagination {
            gap: 6px !important;
            margin-top: 16px !important;
            margin-left: 0 !important;
            justify-content: flex-start !important;
          }

          .blog-pagination-dot-active {
            width: 16px !important;
            height: 6px !important;
            background: #C34A36 !important;
            opacity: 0.88 !important;
          }

          .blog-pagination-dot-inactive {
            width: 6px !important;
            height: 6px !important;
            background: #f4ded7 !important;
          }
        }
      `}
    </style>

    <section
      className="blog-section"
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
        className="blog-main-container"
        style={{
          width: 1280,
          maxWidth: 1280,
          margin: '0 auto'
        }}
      >
        {/* Header */}
        <div className="blog-header" style={{ marginBottom: 38 }}>
          <div className="font-poppins blog-label" style={{
            color: '#C34A36',
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 10,
            letterSpacing: 1
          }}>
            Blog
          </div>
          <h2 className="font-unbounded blog-title" style={{
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
        <div className="blog-cards-container" style={{
          display: 'flex',
          gap: 32,
          marginBottom: 15,
          marginTop: 15
        }}>
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="blog-card"
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
                  className="blog-image"
                  style={{
                    width: '100%',
                    height: 154,
                    objectFit: 'cover',
                    borderTopLeftRadius: 17,
                    borderTopRightRadius: 17
                  }}
                />
                <div className="blog-card-content" style={{ padding: '18px 18px 13px 18px', background: '#fff' }}>
                  <div className="blog-meta-row" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                    <span className="blog-category-mobile" style={{
                      color: '#C34A36', fontWeight: 600, fontSize: 13, fontFamily: 'Poppins'
                    }}>{blog.category}</span>
                    <span className="blog-read-time-mobile" style={{
                      color: '#bdb1af', fontWeight: 400, fontSize: 13, marginLeft: 4
                    }}>{blog.readTime}</span>
                  </div>
                  <div className="font-poppins blog-title-mobile" style={{
                    fontWeight: 600,
                    fontSize: 16,
                    color: '#18191A',
                    marginBottom: 18
                  }}>
                    {blog.title}
                  </div>
                  <div className="font-poppins blog-read-more-mobile"
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
                    <span style={{ marginLeft: 6, fontSize: 18, display: 'inline-block', lineHeight: 1 }}>&#8250;</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="blog-pagination" style={{
          display: 'flex',
          gap: 8,
          marginTop: 26,
          marginLeft: 7
        }}>
          <div className="blog-pagination-dot-active" style={{
            width: 20, height: 7, borderRadius: 6, background: "#C34A36", opacity: 0.88
          }} />
          <div className="blog-pagination-dot-inactive" style={{
            width: 9, height: 7, borderRadius: 6, background: "#f4ded7", opacity: 1
          }} />
          <div className="blog-pagination-dot-inactive" style={{
            width: 9, height: 7, borderRadius: 6, background: "#f4ded7", opacity: 1
          }} />
        </div>
      </div>
    </section>
  </>
);

export default BlogSection;

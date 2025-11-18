import { FiInstagram, FiLinkedin, FiYoutube, FiFacebook, FiTwitter } from "react-icons/fi";
// import Logo from '../../assets/Logo.png'; // If you have a logo asset

const footerMenus = [
  {
    heading: "Company",
    links: ["About us", "Our team", "Careers", "Contact", "Press"],
  },
  {
    heading: "Services",
    links: [
      "Residential",
      "Corporate", 
      "Hospitality",
      "Private estates",
      "Consulting",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Blog",
      "Case studies",
      "Guides",
      "Equipment catalog",
      "Webinars",
    ],
  },
  {
    heading: "Legal",
    links: ["Terms", "Privacy", "Disclaimer", "Compliance", "Sitemap"],
  },
  {
    heading: "Connect",
    links: [
      "LinkedIn profile",
      "Instagram page",
      "YouTube channel",
      "Twitter updates",
      "Facebook page",
    ],
  },
];

const Footer = () => {
  return (
    <>
      {/* MOBILE-ONLY RESPONSIVE STYLES */}
      <style>
        {`
          @media (max-width: 767px) {
            .footer-container {
              padding: 24px 12px 0 12px !important;
              gap: 16px !important;
            }

            .footer-newsletter {
              flex-direction: column !important;
              gap: 16px !important;
              align-items: stretch !important;
            }

            .footer-form {
              flex-direction: column !important;
              gap: 12px !important;
              min-width: 100% !important;
              align-items: stretch !important;
            }

            .footer-input-row {
              flex-direction: column !important;
              gap: 12px !important;
            }

            .footer-input {
              width: 100% !important;
              height: 40px !important;
            }

            .footer-submit-btn {
              width: 100% !important;
              height: 40px !important;
              align-self: stretch !important;
            }

            .footer-grid {
              margin: 24px auto !important;
              gap: 32px !important;
              padding: 24px 12px 20px 12px !important;
            }

            .footer-logo {
              flex: none !important;
              margin-right: 0 !important;
              margin-bottom: 16px !important;
              text-align: left !important;
            }

            .footer-menus {
              gap: 32px !important;
              min-width: auto !important;
              justify-content: flex-start !important;
              flex-direction: column !important;
              align-items: flex-start !important;
            }

            .footer-menu-col {
              min-width: 100% !important;
              margin-bottom: 24px !important;
            }

            .footer-bottom {
              flex-direction: column !important;
              gap: 16px !important;
              align-items: flex-start !important;
              padding: 16px 12px 20px 12px !important;
            }

            .footer-bottom-copyright {
              width: 100% !important;
              order: 1 !important;
            }

            .footer-bottom-links {
              width: 100% !important;
              gap: 16px !important;
              order: 2 !important;
              justify-content: flex-start !important;
              flex-wrap: wrap !important;
            }

            .footer-social {
              width: 100% !important;
              justify-content: flex-start !important;
              gap: 16px !important;
              order: 3 !important;
            }

            .footer-spacer {
              height: 16px !important;
            }

            /* Privacy policy text */
            .footer-privacy-text {
              align-self: flex-start !important;
            }
          }
        `}
      </style>

      <footer
        style={{
          width: "100%",
          background: "#fff",
          color: "#18191A",
          borderTop: "1px solid #eee",
          fontFamily: "Poppins,sans-serif",
          fontSize: 15,
          marginTop: 0
        }}
      >
        {/* Newsletter */}
        <div
          className="footer-container"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "32px 20px 0 20px",
            display: "flex",
            flexDirection: "column",
            gap: 18
          }}
        >
          <div
            className="footer-newsletter"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 32
            }}
          >
            <div>
              <div
                style={{
                  color: "#C34A36",
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 8,
                  marginTop: 5,
                }}
              >
                Join our newsletter
              </div>
              <div style={{ fontSize: 14, color: "#444" }}>
                Stay updated with fitness solutions for developers
              </div>
            </div>
            <form
              className="footer-form"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                minWidth: 455,
                alignItems: "flex-end"
              }}
              onSubmit={e => e.preventDefault()}
            >
              <div className="footer-input-row" style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email"
                  placeholder="Email"
                  className="footer-input"
                  style={{
                    width: 455,
                    height: 40,
                    borderRadius: 6,
                    border: "1px solid #eee",
                    padding: "8px 12px",
                    fontSize: 15,
                    background: "#FAFAFA",
                    outline: "none"
                  }}
                />
                <button
                  className="footer-submit-btn"
                  style={{
                    background: "#f1eeed",
                    color: "#C34A36",
                    border: "none",
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: 15,
                    height: 40,
                    padding: "0 18px",
                    cursor: "pointer",
                    transition: ".2s"
                  }}
                >
                  Subscribe
                </button>
              </div>
              <div
                className="footer-privacy-text"
                style={{
                  fontSize: 12,
                  color: "#908888",
                  marginTop: 5,
                  alignSelf: "flex-start"
                }}
              >
                By subscribing, you agree to our{' '}
                <a
                  href="http://localhost:5173/"
                  style={{ color: "#9a6078", textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Main Grid */}
        <div
          className="footer-grid"
          style={{
            margin: "36px auto",
            maxWidth: 1280,
            display: "flex",
            justifyContent: "space-between",
            gap: 8,
            borderTop: "1px solid #ececec",
            padding: "40px 20px 24px 20px"
          }}
        >
          {/* Logo */}
          <div
            className="footer-logo"
            style={{ flex: "0 0 120px", fontFamily: "cursive", fontWeight: 600, fontSize: 26, marginRight: 10, marginTop: 3 }}
          >
            Logo
            {/* <img src={Logo} width={80} alt="Logo" /> */}
          </div>
          {/* Menus */}
          <div
            className="footer-menus"
            style={{
              display: "flex",
              gap: 54,
              flex: 1,
              justifyContent: "space-between",
              minWidth: 850,
            }}
          >
            {footerMenus.map(menu => (
              <div key={menu.heading} className="footer-menu-col" style={{ minWidth: 130 }}>
                <div
                  style={{
                    color: "#C34A36",
                    fontWeight: 600,
                    fontSize: 15,
                    marginBottom: 10,
                  }}
                >
                  {menu.heading}
                </div>
                {menu.links.map(link => (
                  <div
                    key={link}
                    style={{
                      color: "#333",
                      fontWeight: 400,
                      fontSize: 14,
                      marginBottom: 8,
                      cursor: "pointer",
                      wordBreak: "break-word"
                    }}
                    tabIndex={0}
                  >
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid #ececec",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "11px 18px 26px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            minHeight: 42
          }}
        >
          <div className="footer-bottom-copyright" style={{ fontSize: 12, color: "#333" }}>
            © 2025 FranzCo Fitness Solutions. All rights reserved.
          </div>
          <div className="footer-bottom-links" style={{ display: "flex", gap: 11, fontSize: 13, color: "#A6735B" }}>
            <a href="http://localhost:5173/" style={{ color: "inherit", textDecoration: "underline" }}>
              Privacy policy
            </a>
            <a href="http://localhost:5173/" style={{ color: "inherit", textDecoration: "underline" }}>
              Terms of service
            </a>
            <a href="http://localhost:5173/" style={{ color: "inherit", textDecoration: "underline" }}>
              Cookie settings
            </a>
          </div>
          <div className="footer-social" style={{ display: "flex", gap: 12, fontSize: 18, marginTop: 4 }}>
            <a href="#"><FiFacebook color="#C34A36" /></a>
            <a href="#"><FiTwitter color="#C34A36" /></a>
            <a href="#"><FiInstagram color="#C34A36" /></a>
            <a href="#"><FiLinkedin color="#C34A36" /></a>
            <a href="#"><FiYoutube color="#C34A36" /></a>
          </div>
        </div>
        {/* Space at the very bottom */}
        <div className="footer-spacer" style={{ height: 24 }} />
      </footer>
    </>
  );
};

export default Footer;

import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const ContactDetails = () => (
  <>
    {/* MOBILE-ONLY STYLES */}
    <style>
      {`
        @media (max-width: 767px) {
          .contact-section {
            padding: 40px 16px !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .contact-item {
            width: 100% !important;
            max-width: 100% !important;
            align-items: center !important;
            text-align: center !important;
            padding: 0 8px !important;
          }

          .contact-icon {
            width: 48px !important;
            height: 48px !important;
            margin-bottom: 16px !important;
          }

          .contact-heading {
            font-size: 20px !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
            text-align: center !important;
          }

          .contact-desc {
            font-size: 14px !important;
            line-height: 1.5 !important;
            margin-bottom: 16px !important;
            text-align: center !important;
            max-width: 100% !important;
          }

          .contact-link {
            font-size: 14px !important;
            line-height: 1.4 !important;
            text-align: center !important;
            display: block !important;
            margin-bottom: 4px !important;
            word-break: break-word !important;
          }

          .contact-phone-links {
            display: flex !important;
            flex-direction: column !important;
            gap: 4px !important;
            align-items: center !important;
            margin-top: 8px !important;
          }

          .contact-divider {
            margin: 32px 0 !important;
          }

          .contact-social {
            gap: 20px !important;
            justify-content: center !important;
            flex-wrap: wrap !important;
          }

          .contact-social-icon {
            width: 40px !important;
            height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
          }

          .contact-social-icon:hover {
            transform: scale(1.1) !important;
          }
        }
      `}
    </style>

    <section className="w-full bg-[#F8F6F5] py-16 px-4 contact-section">
      <div className="max-w-[1280px] mx-auto">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 contact-grid">
          {/* Email */}
          <div className="flex flex-col items-start contact-item">
            <Mail className="text-black mb-4 contact-icon" size={40} strokeWidth={1.5} />
            <div className="font-bold text-[#C34A36] text-xl mb-3 contact-heading">Email</div>
            <div className="text-sm text-[#9A736B] mb-4 leading-relaxed contact-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in ero.
            </div>
            <a
              className="text-sm text-black hover:text-[#C34A36] transition-colors underline contact-link"
              href="mailto:projects@franzco.in"
            >
              projects@franzco.in
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-start contact-item">
            <Phone className="text-black mb-4 contact-icon" size={40} strokeWidth={1.5} />
            <div className="font-bold text-[#C34A36] text-xl mb-3 contact-heading">Phone</div>
            <div className="text-sm text-[#9A736B] mb-4 leading-relaxed contact-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in ero.
            </div>
            <a className="text-sm text-black hover:text-[#C34A36] transition-colors underline contact-link" href="tel:+912067884500">
              +91 20 6788 4500
            </a>
            <a className="text-sm text-black hover:text-[#C34A36] transition-colors underline contact-link" href="tel:+919876543210">
              +91 98765 43210
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-start contact-item">
            <MapPin className="text-black mb-4 contact-icon" size={40} strokeWidth={1.5} />
            <div className="font-bold text-[#C34A36] text-xl mb-3 contact-heading">Location</div>
            <div className="text-sm text-[#9A736B] mb-4 leading-relaxed contact-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in ero.
            </div>
            <a
              className="text-sm text-black hover:text-[#C34A36] transition-colors underline contact-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/8Y6sNntXFbykwFyH8"
            >
              FranzCo Fitness Solutions Pvt. Ltd., Cerebrum IT Park, Kalyani Nagar Pune – 411014
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#DDD1CE] my-12 contact-divider" />

        {/* Social Icons */}
        <div className="flex gap-6 justify-center contact-social">
          <a 
            href="#" 
            aria-label="Facebook"
            className="text-black hover:text-[#C34A36] transition-colors contact-social-icon"
          >
            <FaFacebookF size={20} />
          </a>
          <a 
            href="#" 
            aria-label="Instagram"
            className="text-black hover:text-[#C34A36] transition-colors contact-social-icon"
          >
            <FaInstagram size={20} />
          </a>
          <a 
            href="#" 
            aria-label="X"
            className="text-black hover:text-[#C34A36] transition-colors contact-social-icon"
          >
            <FaXTwitter size={20} />
          </a>
          <a 
            href="#" 
            aria-label="LinkedIn"
            className="text-black hover:text-[#C34A36] transition-colors contact-social-icon"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a 
            href="#" 
            aria-label="YouTube"
            className="text-black hover:text-[#C34A36] transition-colors contact-social-icon"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </section>
  </>
);

export default ContactDetails;

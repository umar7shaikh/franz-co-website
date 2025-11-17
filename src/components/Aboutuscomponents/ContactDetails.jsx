import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const ContactDetails = () => (
  <section className="w-full bg-[#F8F6F5] py-16 px-4">
    <div className="max-w-[1280px] mx-auto">
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Email */}
        <div className="flex flex-col items-start">
          <Mail className="text-black mb-4" size={40} strokeWidth={1.5} />
          <div className="font-bold text-[#C34A36] text-xl mb-3">Email</div>
          <div className="text-sm text-[#9A736B] mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in ero.
          </div>
          <a
            className="text-sm text-black hover:text-[#C34A36] transition-colors underline"
            href="mailto:projects@franzco.in"
          >
            projects@franzco.in
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-start">
          <Phone className="text-black mb-4" size={40} strokeWidth={1.5} />
          <div className="font-bold text-[#C34A36] text-xl mb-3">Phone</div>
          <div className="text-sm text-[#9A736B] mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in ero.
          </div>
          <a className="text-sm text-black hover:text-[#C34A36] transition-colors underline" href="tel:+912067884500">
            +91 20 6788 4500
          </a>
          <a className="text-sm text-black hover:text-[#C34A36] transition-colors underline mt-1" href="tel:+919876543210">
            +91 98765 43210
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-start">
          <MapPin className="text-black mb-4" size={40} strokeWidth={1.5} />
          <div className="font-bold text-[#C34A36] text-xl mb-3">Location</div>
          <div className="text-sm text-[#9A736B] mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in ero.
          </div>
          <a
            className="text-sm text-black hover:text-[#C34A36] transition-colors underline leading-relaxed"
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/8Y6sNntXFbykwFyH8"
          >
            FranzCo Fitness Solutions Pvt. Ltd., Cerebrum IT Park, Kalyani Nagar Pune – 411014
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#DDD1CE] my-12" />

      {/* Social Icons */}
      <div className="flex gap-6 justify-center">
        <a 
          href="#" 
          aria-label="Facebook"
          className="text-black hover:text-[#C34A36] transition-colors"
        >
          <FaFacebookF size={20} />
        </a>
        <a 
          href="#" 
          aria-label="Instagram"
          className="text-black hover:text-[#C34A36] transition-colors"
        >
          <FaInstagram size={20} />
        </a>
        <a 
          href="#" 
          aria-label="X"
          className="text-black hover:text-[#C34A36] transition-colors"
        >
          <FaXTwitter size={20} />
        </a>
        <a 
          href="#" 
          aria-label="LinkedIn"
          className="text-black hover:text-[#C34A36] transition-colors"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a 
          href="#" 
          aria-label="YouTube"
          className="text-black hover:text-[#C34A36] transition-colors"
        >
          <FaYoutube size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default ContactDetails;

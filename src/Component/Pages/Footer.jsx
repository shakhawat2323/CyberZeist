import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Logo from "../../assets/Logo/Loaoa1.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
  FaPlay,
} from "react-icons/fa";

const Footer = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9t6rs8", // ✅ Replace with your service ID
        "template_v0yuh7f", // ✅ Replace with your template ID
        form.current,
        "wgbAeHujHtgqFvWjm" // ✅ Replace with your public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("❌ Failed to send email.");
        }
      );
  };

  return (
    <footer className="bg-[#111] pt-20 pb-10 px-6 md:px-20 text-gray-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-cyan-400 p-2 rounded-full">
              {/* <FaPlay className="text-white" /> */}
              <img className="w-16" src={Logo} alt="" />
            </div>
            <h2 className="text-2xl font-bold text-white">CyberZeist</h2>
          </div>
          <p className="mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Best Services",
              "Events",
              "About Our Company",
              "Business Contact",
              "Make An Appointment",
            ].map((link, i) => (
              <li key={i} className="hover:text-cyan-400 cursor-pointer">
                - {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Contacts
          </h3>
          <p className="mb-2">Address: 27 Division St, Berakuti, NY</p>
          <p className="mb-2">Phone: +8 1440 456 782</p>
          <p className="mb-2">Email: CyberZeist@mail.com</p>
          <p>Website: yourwebsite.com</p>
        </div>

        {/* Newsletter Form */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="mb-4">Get our latest updates directly to your inbox.</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-full bg-[#1e1e1e] text-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-5 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full"
              >
                SEND
              </button>
            </div>
            {isSent && (
              <p className="text-green-400 mt-2">✅ Email sent successfully!</p>
            )}
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-center">
          Copyright ©CyberZeist all rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <p className="hover:text-cyan-400 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-cyan-400 cursor-pointer">About</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

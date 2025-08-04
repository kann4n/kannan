import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const list = [
    { name: "About Me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    {
      name: <FaInstagram />,
      href: "https://instagram.com/k.a.n.n.a_n",
      external: true,
    },
    {
      name: <FaLinkedin />,
      href: "https://linkedin.com/to-be-updated",
      external: true,
    },
    { name: <FaGithub />, href: "https://github.com/kann4n", external: true },
  ];
  return (
    <div className="fixed top-0 left-0 z-50 h-16 w-full bg-black/20">
      <nav className="fixed top-0 left-0 z-10 w-full bg-transparent">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <div className="text-2xl font-bold text-white">Aravind K.B</div>
          <ul className="flex space-x-6">
            {list.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="flex items-center text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            {socialLinks.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xl text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

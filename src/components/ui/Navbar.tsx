import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
    const list = [
        { name: "About Me", href: "#about-me" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];
    const socialLinks = [
        { name: <FaInstagram />, href: "https://instagram.com/k.a.n.n.a_n", external: true },
        { name: <FaLinkedin />, href: "https://linkedin.com/to-be-updated", external: true },
        { name: <FaGithub />, href: "https://github.com/kann4n", external: true },
    ];
    return (
        <div className="w-full h-16 bg-black/20 fixed top-0 left-0 z-50">
            <nav className="fixed top-0 left-0 w-full bg-transparent z-10">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">Aravind K.B</div>
                    <ul className="flex space-x-6">
                        {list.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.href}
                                    className="text-white hover:text-gray-300 flex items-center"
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
                                    className="text-white hover:text-gray-300 text-xl flex items-center"
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
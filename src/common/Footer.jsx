import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-zinc-200 text-zinc-600 p-4">
            <div className="container px-20 py-14 mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">Ascent</h2>
                        <p>Desarrollo y Consultoría</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/inicio" className="hover:text-gray-400">
                            Inicio
                        </Link>
                        <Link href="/servicios" className="hover:text-gray-400">
                            Servicios
                        </Link>
                        <Link href="/nosotros" className="hover:text-gray-400">
                            Nosotros
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



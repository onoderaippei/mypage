import Link from "next/link";
import Container from "@/components/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-base font-semibold tracking-tight text-black">
            Ippei Onodera
          </Link>
          <nav>
            <ul className="flex items-center gap-6 text-sm text-gray-700">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-black">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

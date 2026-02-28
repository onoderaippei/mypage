import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-8">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ippei Onodera</p>
      </Container>
    </footer>
  );
}

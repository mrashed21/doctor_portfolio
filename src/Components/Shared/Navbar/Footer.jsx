import Container from "@/Components/Container/Container";

export default function Footer() {
  return (
    <footer className="bg-deep text-white mt-12">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-2xl font-bold">Logo</div>
          <p className="mt-3 text-sm text-gray-200">
            Trusted healthcare services for women’s wellness & reproductive
            health.
          </p>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-200">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#appointment">Appointment</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="mt-3 text-sm text-gray-200">info@doctor.com</p>
          <p className="text-sm text-gray-200 mt-1">+880 1234 567 890</p>
          <p className="text-sm text-gray-200 mt-1">Dhaka, Bangladesh</p>
        </div>
      </Container>

      <div className="text-center text-sm text-gray-300 py-4 border-t border-deep/20">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
}

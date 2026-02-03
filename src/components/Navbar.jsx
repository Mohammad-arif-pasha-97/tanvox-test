export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-[#2B1B12] text-[#F5EFE6]">
      <h1 className="text-2xl font-bold">Tanvox Technology</h1>
      <ul className="flex gap-6">
        <li>Home</li><li>Services</li><li>About</li><li>Contact</li>
      </ul>
    </nav>
  );
}

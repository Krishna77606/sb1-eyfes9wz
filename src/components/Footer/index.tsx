import { FooterLinks } from './FooterLinks';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <FooterLinks />
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Private Theater. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
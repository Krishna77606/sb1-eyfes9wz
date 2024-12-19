import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

const sections: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Services', href: '#' },
      { label: 'Gallery', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'Private Screenings', href: '#' },
      { label: 'Birthday Celebrations', href: '#' },
      { label: 'Anniversary Events', href: '#' },
      { label: 'Corporate Events', href: '#' },
    ],
  },
];

const socialLinks = [
  { Icon: Facebook, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Youtube, href: '#' },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Private Theater</h3>
        <p className="text-sm text-gray-300">
          Creating memorable entertainment experiences for your special occasions.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links and Services */}
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
        <div className="text-gray-300 space-y-2">
          <p>Email: contact@privatetheater.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Theater Street, Bangalore</p>
        </div>
      </div>
    </div>
  );
}
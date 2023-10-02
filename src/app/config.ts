export interface INavItem {
  label: string;
  href: string;
  replace?: boolean;
}

export const navItems = [
  {
    label: 'Buy',
    href: '/properties/sale'
  },
  {
    label: 'Rent',
    href: '/properties/rent'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact Us',
    href: '/contact-us'
  },
]
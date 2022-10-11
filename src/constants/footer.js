import { FacebookOutlined, GitHub, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import { Typography } from "@mui/material";

const content = {
  brand: {
    name: "LUCANI COMPANY",
    description: "The next generation of design systems.",
    image: "https://htmldemo.net/lukani/lukani/assets/img/logo/logo.png",
  },
  socials: [
    {
      icon: <FacebookOutlined />,
      link: "#",
    },
    {
      icon: <Twitter />,
      link: "#",
    },
    {
      icon: <Instagram />,
      link: "#",
    },
    {
      icon: <Pinterest />,
      link: "#",
    },
    {
      icon: <GitHub />,
      link: "#",
    },
  ],
  menus: [
    {
      name: "OPENING TIME",
      items: [
        { name: "Mon - Fri: 8AM - 10PM", href: "#" },
        { name: "Sat: 9AM-8PM", href: "#" },
        { name: "Suns: 14hPM-18hPM", href: "#" },
        { name: "We Work All The Holidays", href: "#" },
      ],
    },
    {
      name: "INFORMATION",
      items: [
        { name: "About Us", href: "#" },
        { name: "Checkout", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Frequently Questions", href: "#" },
        { name: "Wishlist", href: "#" },
      ],
    },
    {
      name: "MY ACCOUNT",
      items: [
        { name: "My Account", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Shopping cart", href: "#" },
        { name: "Checkout", href: "#" },
        { name: "Shop", href: "#" },
        { name: "Order History", href: "#" },
      ],
    },
    {
      name: "CUSTOMER SERVICE",
      items: [
        { name: "Contact Us", href: "#" },
        { name: "Terms of use", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Site Map", href: "#" },
        { name: "My Account", href: "#" },
        { name: "Returns", href: "#" },
      ],
    },
  ],
  copyright: (
    <Typography variant="button">
      Copyright &copy; 2022 Material Design by{" "}
      <Typography component="a" href="#" target="_blank" rel="noreferrer" variant="button">
        DamNam
      </Typography>
      .
    </Typography>
  ),
};

export default content;

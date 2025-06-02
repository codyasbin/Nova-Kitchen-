"use client";

import {useState} from "react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {ThemeToggle} from "@/components/layout/ThemeToggle";

import {Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {Menu, Search, Phone, X, ChevronRight, ChevronDown} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {FaWhatsapp, FaViber} from "react-icons/fa";
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";

interface NavItem {
  name: string;
  href: string;
  subMenu?: NavGroup[];
}

interface NavGroup {
  title: string;
  items: NavLink[];
}

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  {name: "Home", href: "/"},
  {
    name: "Products",
    href: "/products",
    subMenu: [
      {
        title: "Modular Kitchens",
        items: [
          {
            name: "L-Shaped Kitchens",
            href: "/products?category=Modular Kitchen&type=L-Shaped Kitchens",
          },
          {
            name: "U-Shaped Kitchens",
            href: "/products?category=Modular Kitchen&type=U-Shaped Kitchens",
          },
          {
            name: "Parallel Kitchens",
            href: "/products?category=Modular Kitchen&type=Parallel Kitchens",
          },
          {
            name: "Island Kitchens",
            href: "/products?category=Modular Kitchen&type=Island Kitchens",
          },
        ],
      },
      {
        title: "Appliances",
        items: [
          {
            name: "Chimneys",
            href: "/products?category=Appliances&type=Chimneys",
          },
          {
            name: "Gas Stoves",
            href: "/products?category=Appliances&type=Gas Stoves",
          },
          {name: "Sinks", href: "/products?category=Appliances&type=Sinks"},
          {name: "Ovens", href: "/products?category=Appliances&type=Ovens"},
          {
            name: "Dishwashers",
            href: "/products?category=Appliances&type=Dishwashers",
          },
          {
            name: "Refrigerators",
            href: "/products?category=Appliances&type=Refrigerators",
          },
        ],
      },
      {
        title: "Other Products",
        items: [
          {
            name: "Water Purifiers",
            href: "/products?category=Water Purifiers",
          },
          {
            name: "Kitchen Accessories",
            href: "/products?category=Kitchen Accessories",
          },
          {name: "Interior Solutions", href: "/products?category=Interior Solutions"},
          {name: "Air Conditioners", href: "/products?category=Air Conditioners"},
        ],
      },
    ],
  },
  {name: "Gallery", href: "/gallery"},
  {name: "About", href: "/about"},
  {name: "Contact", href: "/contact"},
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const toggleCategoryExpanded = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-playfair text-2xl font-bold">
              <span>Nova</span>
              <span className="text-primary"> Kitchen</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) =>
                  link.subMenu ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid grid-cols-3 gap-3 p-4 w-[600px]">
                          {link.subMenu.map((group) => (
                            <div key={group.title} className="space-y-2">
                              <h4 className="text-sm font-medium mb-2">{group.title}</h4>
                              <ul className="space-y-1">
                                {group.items.map((item) => (
                                  <li key={item.name}>
                                    <Link href={item.href} className="block p-2 text-sm rounded-md transition-colors hover:bg-accent hover:text-accent-foreground">
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <Link href={link.href} className={cn(navigationMenuTriggerStyle(), pathname === link.href ? "font-medium" : "")}>
                        {link.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>

            {/* Desktop Contact Buttons */}
            <div className="hidden md:flex space-x-2">
              <Button variant="outline" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline">056-596428</span>
              </Button>
              <a href="https://wa.me/9779802146865" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="text-green-600">
                  <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp
                </Button>
              </a>
              {/* <a href="viber://chat?number=9779805868705" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="text-purple-600 hover:text-white hover:bg-purple-600">
                  <FaViber className="mr-2 h-4 w-4" /> Viber
                </Button>
              </a> */}
              <Link href={"/contact"}>
                <Button size="sm">Book Consultation</Button>
              </Link>
            </div>

            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[320px] p-0">
                <SheetHeader className="px-4 py-5 border-b">
                  <SheetTitle className="flex items-center justify-between">
                    <div className="font-playfair text-xl">
                      <span>Nova</span>
                      <span className="text-primary"> Kitchen</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <nav className="h-[calc(65vh)] overflow-y-auto px-2 py-2">
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <div key={link.name} className="mb-1">
                        {link.subMenu ? (
                          <Collapsible className="w-full" open={expandedCategories[link.name]} onOpenChange={() => toggleCategoryExpanded(link.name)}>
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" className="w-full px-3 font-normal justify-between text-md rounded-lg h-auto py-3">
                                {link.name}
                                {expandedCategories[link.name] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-1">
                              {link.subMenu.map((group) => (
                                <div key={group.title} className="mb-3">
                                  <div className="text-sm font-medium text-primary px-3 py-2">{group.title}</div>
                                  <ul className="space-y-1 pl-2">
                                    {group.items.map((item) => (
                                      <li key={item.name}>
                                        <Link href={item.href} className="flex items-center text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <Link
                            href={link.href}
                            className={cn(
                              "flex items-center w-full px-3 py-3 rounded-lg transition-colors",
                              pathname === link.href ? "bg-primary text-primary-foreground font-medium" : "hover:bg-accent"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Contact Buttons */}
                <div className="border-t p-4 space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Consultation</Button>

                  <div className="grid grid-cols-3 gap-2">
                    <a href="tel:056596428">
                      <Button variant="outline" size="sm">
                        <Phone className="mr-2 h-4 w-4" />
                        <span className="hidden lg:inline">056-596428</span>
                      </Button>
                    </a>
                    <a href="https://wa.me/9779802146865" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" size="sm" className="w-full bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700">
                        <FaWhatsapp className="h-4 w-4" />
                      </Button>
                    </a>
                    {/* <a href="viber://chat?number=910000000000" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" size="sm" className="w-full bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100 hover:text-purple-700">
                        <FaViber className="h-4 w-4" />
                      </Button>
                    </a> */}
                  </div>

                  <div className="text-xs text-center text-muted-foreground">Call or message us: 056-596428</div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        <div className={cn("overflow-hidden transition-all duration-300", isSearchOpen ? "max-h-20 opacity-100 py-4" : "max-h-0 opacity-0")}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const searchInput = e.currentTarget.querySelector("input") as HTMLInputElement;
              const searchTerm = searchInput.value.trim();
              if (searchTerm) {
                // Check if we're already on the products page
                if (pathname === "/products") {
                  // Force a full navigation to refresh the page with new search params
                  window.location.href = `/products?search=${encodeURIComponent(searchTerm)}`;
                } else {
                  // Use router for normal navigation
                  router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
                }
                setIsSearchOpen(false);
                searchInput.value = "";
              }
            }}
            className="flex items-center"
          >
            <Input type="search" name="search" placeholder="Search for products..." className="flex-1" autoFocus={isSearchOpen} />
            <Button type="submit" className="ml-2">
              Search
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}

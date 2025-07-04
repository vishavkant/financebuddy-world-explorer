
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Building2, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  userType?: 'personal' | 'business';
}

const Navigation = ({ userType }: NavigationProps) => {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              FinanceBuddy
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-600 to-purple-600 p-6 no-underline outline-none focus:shadow-md"
                          to="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            FinanceBuddy
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Your comprehensive partner for business and personal finance
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-1">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/business"
                          className="flex items-center gap-2 text-sm font-medium select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <Building2 className="w-4 h-4" />
                          Business Solutions
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/personal"
                          className="flex items-center gap-2 text-sm font-medium select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <User className="w-4 h-4" />
                          Personal Finance & Mortgage
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px]">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/blog"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <BookOpen className="w-4 h-4" />
                          All Blogs
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse all our expert articles and insights
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/blog/business"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Building2 className="w-4 h-4" />
                          Business Solutions
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Company setup, bookkeeping, and business optimization
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/blog/finance"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <User className="w-4 h-4" />
                          Personal Finance & Mortgage
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Investment guides, mortgage solutions, and financial planning
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Link to="/blog">
              <Button variant="outline">Blog</Button>
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

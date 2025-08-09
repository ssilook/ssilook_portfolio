import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ExternalLink } from 'lucide-react';

function Header() {
  return (
    <>
      <NavigationMenu viewport={false} className="max-w-auto p-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/Introduce">New Portfolio</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href="https://ssilook.github.io/SINOOK_CONTENTS/" target="_blank" rel="noopener noreferrer">Old Portfolio
              </a>
            </NavigationMenuLink>
            <ExternalLink size={24} className="m-auto" />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

export default Header
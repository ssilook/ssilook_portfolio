import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function Header() {
  return (
    <>
      <div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList
            style={{ 
              display: 'flex',
              justifyContent: 'space-around',
              padding: '5px',
              borderBottom: '1px solid #dee2e6',
            }}>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/first-birthday-party/type1">Type1</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/first-birthday-party/type2">Type2</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  )
}

export default Header
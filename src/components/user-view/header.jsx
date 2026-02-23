import { Link, useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/store/auth-slice";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { House, LogOut, Menu, ShieldUser } from "lucide-react";
import { Button } from "../ui/button";
import { userHeaderMenuItems } from "@/config";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";


function MenuItems() {

  const navigate = useNavigate()

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home"
        ? {
          category: [getCurrentMenuItem.id],
        }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    navigate(getCurrentMenuItem.path);
  }

  return <nav className='flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row'>
    {
      userHeaderMenuItems.map(menuItem => (
        <Label
          onClick={() => handleNavigate(menuItem)} className='text-sm font-medium cursor-pointer' key={menuItem.id} >
          {menuItem.label}
        </Label>
      ))
    }
  </nav>
}

function HeaderRightContent() {

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser())
  }

  return <div className='flex lg:items-center lg:flex-row flex-colga4'>
    
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='bg-black'>
          <AvatarFallback className='bg-black text-white font-extrabold'>
            {user.UserName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent side='right' className='w-56'>
        <DropdownMenuLabel>
          Logged in as {user?.UserName}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/user/account')}>
          <ShieldUser className='mr-2 h-4 w-4' />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className='mr-2 h-4 w-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
}

const Header = () => {

  const { isAuthenticted } = useSelector(state => state.auth)

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='flex h-16 items-center justify-between px-4 md:px-6'>
        <Link to="/user/home" className='flex items-center gap-2'>
          <House className="h-6 w-6" />
          <span className='font-bold'>Apna Jobs</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className="w-full max-w-xs px-6 py-6">
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className='hidden lg:block'>
          <MenuItems />
        </div>
        <div className='hidden lg:block'>
          <HeaderRightContent />
        </div>
      </div>
    </header>
  )
}

export default Header
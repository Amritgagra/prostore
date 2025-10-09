'use client';
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,DropdownMenuCheckboxItem,DropdownMenuLabel,DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ToggleMode = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost">
                {theme === "light" ? <SunIcon/> : theme === "dark" ? <MoonIcon/> : <SunMoon/>}
            </Button>
        </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white dark:bg-gray-900'>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-gray-500'/>
                <DropdownMenuCheckboxItem checked={theme === "system"} onCheckedChange={() => setTheme("system")}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === "light"} onCheckedChange={() => setTheme("light")}>
                    Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === "dark"} onCheckedChange={() => setTheme("dark")}>
                    Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleMode
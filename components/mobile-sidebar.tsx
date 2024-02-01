"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
    apiLimitCount: number;
};

const MobileSidebar = ({ apiLimitCount }: MobileSidebarProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        // to prevent hydration error
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant='ghost' size='icon' className='md:hidden'>
                    <Menu />
                </Button>
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className="p-0">
                <Sidebar apiLimitCount={apiLimitCount}/>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;
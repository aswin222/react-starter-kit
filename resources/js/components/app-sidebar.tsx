import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid ,ShieldCheck , Activity, Bot, BadgeHelpIcon, HelpCircle, TerminalSquare, Files} from 'lucide-react';
import AppLogo from './app-logo';
import { Tag } from "lucide-react";

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Plans',
        url: '/plans',
        icon: ShieldCheck, 
    },
    {

        title: 'Market Pulse',
        url: '/market-pulse',
        icon: Activity, 
    },
    {
        title: (
            <span className="flex items-center">
                AI Analysis 
                <span className="flex items-center text-blue-600 text-xs font-semibold bg-blue-100 px-2 py-0.5 rounded-md ml-3">
                    <Tag className="h-3 w-3 mr-1" /> Beta
                </span>
            </span>
        ),
        
        url: '/ai-analysis',
        icon: Bot, 
    
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Help Center',
        url: '#',
        icon: BadgeHelpIcon,
    },
    {
        title: 'Privacy Policy & TC',
        url: '#',
        icon: Files,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

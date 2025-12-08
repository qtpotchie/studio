"use client";
import { useMobileSidebar as useSidebarContext } from '@/context/mobile-sidebar-context';

export const useMobileSidebar = () => {
    return useSidebarContext();
}

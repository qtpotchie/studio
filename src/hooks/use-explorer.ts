"use client";
import { useExplorer as useExplorerContext } from '@/context/explorer-context';

export const useExplorer = () => {
    return useExplorerContext();
}

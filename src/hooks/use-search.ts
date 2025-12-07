import { useSearch as useSearchContext } from '@/context/search-context';

export const useSearch = () => {
    return useSearchContext();
}

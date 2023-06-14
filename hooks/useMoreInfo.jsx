import fetcher from "@/libs/fetcher";
import { useQuery,useQueryClient } from 'react-query';
 

const useMoreInfo = (platform=""  ) => {
  const queryClient = useQueryClient()
    let url='https://api.github.com/users/rahulj9a'
    if(platform=="Github"){
        url = 'https://api.github.com/users/edimoyaa'
    }
    
    let { data, error, refetch, isError, isLoading } = useQuery('useMoreInfo', () => fetcher(url),{staleTime:0})
     
    return {data,error,refetch,isError,isLoading}
};

export default useMoreInfo;

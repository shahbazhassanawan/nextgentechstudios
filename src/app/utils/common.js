export const truncateString = (input,len)=>{
    if (input?.length > len){
        return input?.substring(0,len) + '...';
    }else{
        return input
    }
}
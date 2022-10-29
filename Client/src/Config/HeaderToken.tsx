export const HeaderToken =(token:string | null)=> {
    headers: 
      Authorization: `Bearer ${token}`
}


 const Authheader = () => {
    const user=JSON.parse(localStorage.getItem("token"));

    if(user && user.token)
    {
        return { Authorization: 'Bearer ' + user.token };
    }
    else{
        return {};
    }
 
};
export default Authheader;

const getLego = async () =>{
  try{
    const response = await fetch("https://rebrickable.com/api/v3/lego/sets/?key=4ceb4c32cef2f6f95d6b204c5840ff00")
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response.json()
  } catch (error) {
    return error.message;
    }
};

export {getLego};
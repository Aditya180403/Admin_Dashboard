const authenticateUser = async (username, password) => {
 
  if (username === 'user1' && password === 'password1') {
    return true; 
  } else {
    return false;
  }
};

export default authenticateUser;

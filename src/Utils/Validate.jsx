export const checkValidate = (email , password , name) => {
    const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[0-9]).{9,}$/.test(password);
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isNameValid) return "Enter valid name";
    
    return null;
};
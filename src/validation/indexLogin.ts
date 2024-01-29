export const LoginValidation = (login: { userName: string, password: string }) => {
    const errors: { userName: string, password: string } = {
        userName: "",
        password: "",
    };

    if (!login.userName) {
        errors.userName = "Username is required";
    } else if (login.userName.length < 3) {
        errors.userName = "Username must be at least 3 characters long";
    } 

    if (!login.password) {
        errors.password = "Password is required";
    } else if (login.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    } 
    return errors;
}

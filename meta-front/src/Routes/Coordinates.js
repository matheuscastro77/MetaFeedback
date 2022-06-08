export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToHome = (navigate) => {
    navigate("/home")
}

export const goToSignOptions = (navigate) => {
    navigate("/signUpOptions")
}

export const goToSignUp = (navigate) => {
    navigate("/signUp")
}

export const goToSignUpManager = (navigate) => {
    navigate("/signUpManager")
}

export const goToSignUpTeam = (navigate) => {
    navigate("/signUpTeam")
}

export const goToEditLeaguer = (navigate, id) => {
    navigate(`/editLeaguer/${id}`)
}

export const goToCreateForm = (navigate, id) => {
    navigate(`/createForm/${id}`)
}

export const goToSendForm = (navigate) => {
    navigate("/sendForm")
}

export const goToForm = (navigate, id) => {
    navigate(`/update/form${id}`)
}

export const goToManagement = (navigate) => {
    navigate("/management")
}
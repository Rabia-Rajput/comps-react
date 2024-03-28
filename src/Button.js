function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}){
    // if ( primary && secondary){
    //     throw new Error('only one of primary and secondary shloud be provided')
    // }
    return <button>{children}</button>;
}

export default Button;
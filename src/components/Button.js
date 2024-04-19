import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
    // if ( primary && secondary){
    //     throw new Error('only one of primary and secondary shloud be provided')
    // }
    const classes = twMerge(
        className(rest.className,' flex items-center  px-3 py-1.5 border my-1.5 ml-3', {
          'border-blue-500 bg-blue-500 text-white': primary,
          'border-gray-900 bg-blue-600 text-white': secondary,
          'border-green-500 bg-green-500 text-white': success,
          'border-yellow-400 bg-yellow-400 text-white': warning,
          'border-red-500 bg-red-500 text-white': danger,
          'rounded-full': rounded,
          'bg-white': outline,
          'text-blue-500': outline && primary,
          'text-gray-900': outline && secondary,
          'text-green-500': outline && success,
          'text-yellow-400': outline && warning,
          'text-red-500': outline && danger
        })
      );

    return <button {...rest} className={classes}>{children}</button>;
}
Button.propTypes ={
    checkVariationValue: ({primary,secondary,
        success,
        warning,
        danger})=>{

            const count = Number(!!primary)+
            Number(!!secondary)+
            Number(!!warning)+
            Number(!!success)+
            Number(!!danger)
            if (count>1)
     {
        return new Error ('only one can be true');
    }
    },
    

};

export default Button;
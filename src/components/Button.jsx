import classNames from 'classnames';
import { twMerge } from 'tailwind-merge'

function Button({
    children,
    className,
    active,
    done,
    danger,
    submit,
    ...rest
    }) {


    const classes = twMerge(classNames("text-black-700 bg-gray-300 font-bold text-lg border-2 p-2 cursor-pointer hover:opacity-70", {
        "bg-red-600" : danger,
        "bg-green-200" : done,
        "bg-emerald-600" : active,
        "bg-blue-300" : submit,
        "opacity-50 hover:opacity-50" : rest.disabled
    }, className))


    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    )

}

export default Button
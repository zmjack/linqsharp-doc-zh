import React, { useEffect, useRef, useState } from 'react';

interface TypeDefinition {
    'note': string[],
    'tip': string[],
    'important': string[],
    'warning': string[],
}

const types: TypeDefinition = {
    'note': ['md-alert-info', 'docon-memo', '备注'],
    'tip': ['md-alert-success', 'docon-lightbulb', '提示'],
    'important': ['md-alert-primary', 'docon-information', '重要'],
    'warning': ['md-alert-warning', 'docon-warning', '警告'],
};

export default function Alert(props: {
    type: keyof TypeDefinition,
    children?: React.ReactNode,
}) {
    const [className, setClassName] = useState('');
    const [title, setTitle] = useState(<></>);

    useEffect(() => {
        const type = types[props.type];
        if (type) {
            setClassName(type[0]);
            setTitle(
                <p className="alert-title">
                    <span className={`docon ${type[1]}`} aria-hidden="true"> &nbsp; </span>
                    {type[2]}
                </p>
            );
        } else {
            setTitle(<></>);
        }
    }, [props.type]);

    return (
        <div className={`nx-mt-6 ${className}`}>
            {title}
            {props.children}
        </div>
    );
}

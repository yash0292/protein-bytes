import React from 'react';


interface Props {
    title: string,
}

const SubHeading = ({ title }: Props) => (
    <div className='mb-4'>
        <p className=" text-protienWhite font-alkatra t1 capitalize font-bold text-2xl tracking-wider">{title}</p>
        {/* <img src={images.spoon} alt="spoon_image" className="spoon__img" /> */}
    </div>
);

export default SubHeading;

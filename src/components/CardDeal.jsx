import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in a few, easy steps</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Kindly read the instructions, go through every option and select the package that fits your needs, business and lifestyle.</p>
                <Button styles='mt-10' />
            </div>
            <div className={layout.sectionImg}>
                <img className='w-[100%] h-[100%]' src={card} alt="card" />
            </div>
        </section>
    )
}

export default CardDeal;
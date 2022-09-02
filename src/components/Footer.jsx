import React from 'react';
import { logo } from '../assets';
import { footerLinks } from '../constants';
import styles from '../styles';

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <img className='w-[266px] h-[72px] object-contain' src={logo} alt="hoobank" />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>The best way to make easy, secure and reliable payments.</p>
                </div>
                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((footerLink) => (
                        <div className='flex flex-col ss:my-0 my-4 min-w-[150px]' key={footerLink.key}>
                            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
                            <ul className='list-none mt-4'>
                                {footerLink.links.map((link, index) => (
                                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`} key={link.name}>{link.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer;
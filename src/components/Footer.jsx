import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
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
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
                <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>2022 Hoobank. All Rights Reserved.</p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {socialMedia.map((social, index) => (
                        <img className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} src={social.icon} alt={social.id} key={social.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer;
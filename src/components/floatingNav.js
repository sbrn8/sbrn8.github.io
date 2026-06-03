import React, { useState, useEffect, useRef } from 'react';

const links = [
    { label: 'About Me',    href: '#about' },
    { label: 'Projects',    href: '#projects' },
    { label: 'Design',      href: '#design' },
    { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/sabrinalfang/', external: true },
    { label: 'Resume',      href: 'https://drive.google.com/file/d/1BNLHVx61buuU3VxU-DMCsx3LdFgsdV9o/view?usp=sharing', external: true },
];

const FloatingNav = ({ navbarRef }) => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen]       = useState(false);
    const menuRef               = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (!navbarRef?.current) return;
            const bottom = navbarRef.current.getBoundingClientRect().bottom;
            setVisible(bottom < 0);
            if (bottom >= 0) setOpen(false);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [navbarRef]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        };
        if (open) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    if (!visible) return null;

    return (
        <div className="floating-nav" ref={menuRef}>
            <button
                className={`floating-hamburger ${open ? 'open' : ''}`}
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>

            {open && (
                <ul className="floating-menu">
                    {links.map(({ label, href, external }) => (
                        <li key={label}>
                            {external ? (
                                <a href={href} target="_blank" rel="noopener noreferrer"
                                    onClick={() => setOpen(false)}>{label}</a>
                            ) : (
                                <a href={href} onClick={() => setOpen(false)}>{label}</a>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FloatingNav;

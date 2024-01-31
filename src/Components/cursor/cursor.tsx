import React from 'react';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { CursorProps } from '../../types';

const Cursor: React.FC<CursorProps> = ({isHovered}) => {
    const [mousePos, setMousePos] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [isActive, setIsActive] = useState<boolean>(false);

    const cursor = useRef<HTMLDivElement>(null);
    const customCursor = useRef<HTMLDivElement>(null);
    const cursorStalker = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if the device is touch screen or not
        if(window.matchMedia('(pointer: fine)').matches) {
            window.addEventListener('mouseover', () => {
                setIsActive(true);
            });
        }
        return () => {
            window.removeEventListener('mouseover', () => {
                setIsActive(false);
            });
        }
    }, []);

    return (
        <div className={styles.cursor} ref={cursor}>
            <div 
                className={classNames(styles.cursor__triangle, {[styles['active']]: isActive})} 
                ref={customCursor} 
                style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`}}
                >
                <div></div>
                <div></div>
            </div>
            <div 
                className={classNames(styles.cursor__stalker, {[styles['active']]: isActive})} 
                ref={cursorStalker}
                style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`}}
            >
                <div className="container">
                    <div className={styles['cursor__stalker--circle']}></div>
                    <p className={styles['cursor__stalker--text']}>Mail Me!</p>
                </div>
            </div>
        </div>
    )
}

export default Cursor;
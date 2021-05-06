import React from 'react';

import css from './cursor.module.scss';

// Refactor to functional component
// https://css-tricks.com/using-requestanimationframe-with-react-hooks/
// https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3/
// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
// https://codepen.io/Danziger/pen/VyOZpy
// Use this https://tympanus.net/Tutorials/CustomCursors/index3.html

class Cursor extends React.Component {
    cursor: React.RefObject<any>;
    cursorTrailing: React.RefObject<any>;
    animationFrame: number;

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            mouseX: 0,
            mouseY: 0,
            trailingX: 0,
            trailingY: 0,
        };

        this.cursor = React.createRef<HTMLDivElement>();
        this.cursorTrailing = React.createRef<HTMLDivElement>();
        this.animationFrame = 0;
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove);
        this.moveCursor();
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
        cancelAnimationFrame(this.animationFrame);
    }

    onMouseMove = (evt: { clientX: any; clientY: any }) => {
        const { clientX, clientY } = evt;
        this.setState({
            mouseX: clientX,
            mouseY: clientY,
        });
    };

    linear = (duration: number, range: number, current: number) => {
        return ((duration * 2) / Math.pow(range, 2)) * current;
    };

    animateValue = (
        value: number,
        start = 0,
        duration = 1000,
        easing: (
            arg0: number,
            arg1: number,
            arg2: number,
        ) => number | undefined,
    ) => {
        const end = 0.7;
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;

        var step = function () {
            current += increment;
            value = current;

            if (current != end) {
                setTimeout(step, easing(duration, range, current));
            }
        };

        setTimeout(step, easing(duration, range, start));
    };

    moveCursor = () => {
        const { mouseX, mouseY, trailingX, trailingY } = this.state;
        const diffX = mouseX - trailingX;
        const diffY = mouseY - trailingY;
      
        //  Number in expression is coeficient of the delay. 10 for example. You can play with it.
        this.setState(
            {
                trailingX: trailingX + diffX / 20,
                trailingY: trailingY + diffY / 20,
            },
            () => {
                // Using refs and transform for better performance.
                this.cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
                this.cursorTrailing.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0)`;
                this.animationFrame = requestAnimationFrame(this.moveCursor);
            },
        );

        document.documentElement.style.setProperty(
            '--cursorX',
            trailingX + 'px',
        );
        document.documentElement.style.setProperty(
            '--cursorY',
            trailingY + 'px',
        );
    };

    render = () => {
        return (
            <div className={css.container}>
                <div className={css.cursors}>
                    <div className={css.cursor} ref={this.cursor} />
                    <div className={css.cursor} ref={this.cursorTrailing} />
                </div>
            </div>
        );
    };
}
export default Cursor;


import React, { Component } from 'react';

import log from 'inspc';

import './Pos.scss';

import manipulation from 'nlab/manipulation';

import cumulativeOffset, { CO_PADDING, CO_MARGIN } from '../cumulativeOffset';

class Pos extends Component {
    componentDidMount() {
        const m = document.createElement('div');
        manipulation.append(document.body, m);
        m.classList.add('mouse');
        document.addEventListener('mousemove', this.mousemove = e => {
            const x = e.clientX + window.scrollX
            const y = e.clientY + window.scrollY;
            m.innerText     = x + ':' + y;
            m.style.left    = x + 20 + 'px';
            m.style.top     = y + 20 + 'px';
        });

        document.addEventListener('mouseover', this.mouseover = e => {
            target = e.target;
        });

        let target;
        let old;
        document.addEventListener('keydown', this.keydown = e => {

            if (e.key !== 'Shift') {

                return;
            }

            if (target) {

                target.classList.add('shadow');
                // const c = cumulativeOffset(target, CO_MARGIN);
                const c = cumulativeOffset(target);
                old = m.innerText;
                m.innerText     = c.left + ':' + c.top;
                m.classList.add('tmp');
            }
        });

        document.addEventListener('keyup', this.keyup = e => {

            if (e.key !== 'Shift') {

                return;
            }

            if (target) {

                m.innerText = old;
                target.classList.remove('shadow');
                m.classList.remove('tmp');
            }
        });

        this.m = m;
    }
    componentWillUnmount() {

        this.m && manipulation.remove(this.m);
        this.m = false;

        function unbind(name, fn) {
            this[name] && document.removeEventListener(name, fn);
            this[name] = false;
        }
        unbind('mousemove', this.mousemove);
        unbind('mouseover', this.mouseover);
        unbind('keydown', this.keydown);
        unbind('keyup', this.keyup);
    }
    render() {
        return (
            <div className="pos">
                <p style={{color: 'red'}}>mouseover any element and click 'shift' button</p>
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="30%" valign="top">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue elit, vulputate eget nisl quis, accumsan accumsan lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pretium magna eu quam accumsan posuere at et urna. Nullam ut turpis condimentum, iaculis magna id, suscipit lorem. In vitae quam convallis lacus lobortis aliquam. Nulla facilisi. Mauris iaculis magna eget mauris pulvinar pharetra. Nullam sit amet dignissim quam. Suspendisse commodo egestas volutpat. Nunc ex elit, auctor eget venenatis at, venenatis vitae ligula. Praesent tristique diam in porttitor ullamcorper. Nullam mattis semper augue, sed dapibus lectus auctor placerat.</p>

                            <div style={{
                                top: '30px',
                                left: '29px',
                                margin: '10px',
                                border: '30px solid transparent',
                            }}>
                                <div style={{
                                    top: '20px',
                                    left: '19px',
                                    margin: '20px',
                                    border: '40px solid transparent',
                                }}>
                                    <div className="test">plain</div>
                                </div>
                            </div>
                        </td>
                        <td width="30%" className="test2" valign="top">
                            <div className='rel' style={{
                                top: '25px',
                                left: '15px`',
                                margin: '23px',
                                border: '6px solid transparent',
                            }}>
                                <div className="abs" style={{
                                    top: '20px',
                                    left: '19px',
                                    margin: '20px',
                                    border: '4px solid transparent',
                                }}>
                                    <div className='rel' style={{
                                        top: '27px',
                                        left: '17px`',
                                        margin: '26px',
                                        border: '9px solid transparent',
                                    }}>
                                        <div className="test" style={{
                                            top: '24px',
                                            left: '18px',
                                        }}>abs in rel, in abs</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td width="30%" valign="top">
                            <div className='rel' style={{
                                top: '25px',
                                left: '15px`',
                                margin: '23px',
                                border: '6px solid transparent',
                            }}>
                                <div className="abs" style={{
                                    top: '20px',
                                    left: '19px',
                                    margin: '20px',
                                    border: '4px solid transparent',
                                }}>
                                    <div className='rel' style={{
                                        top: '27px',
                                        left: '17px`',
                                        margin: '26px',
                                        border: '9px solid transparent',
                                    }}>
                                        <div className="test" style={{
                                            top: '24px',
                                            left: '18px',
                                        }}>abs in rel, in abs</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Pos;

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
            m.innerText     = e.clientX + ':' + e.clientY;
            m.style.left    = e.clientX + 20 + 'px';
            m.style.top     = e.clientY + 20 + 'px';
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
                const c = cumulativeOffset(target, CO_MARGIN);
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

                            <div className="test">plain</div>
                        </td>
                        <td width="30%" className="test2" valign="top">
                            <div className='rel' style={{
                                top: '20px',
                                left: '15px`',
                            }}>
                                <div className="abs" style={{
                                    top: '-20px',
                                    left: '19px',
                                }}>
                                    <div className='rel' style={{
                                        top: '20px',
                                        left: '15px',
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

                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Pos;
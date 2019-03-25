
import React, { Component } from 'react';

import log from 'inspc';

import './Pos.scss';

import manipulation from 'nlab/manipulation';

import cumulativeOffset from '../cumulativeOffset';

class Pos extends Component {
    componentDidMount() {
        const m = document.createElement('div');
        manipulation.append(document.body, m);
        m.classList.add('mouse');
        document.addEventListener('mousemove', this.event = e => {
            m.innerText     = e.clientX + ':' + e.clientY;
            m.style.left    = e.clientX + 20 + 'px';
            m.style.top     = e.clientY + 20 + 'px';
        });

        (() => {
            let t, m;
            document.addEventListener('mousedown', this.mousedown = e => {

                t = false;

                if ( ! e.target ) {

                    return;
                }

                t = e.target;

                t.classList.add('shadow');

                m = document.createElement('div');
                manipulation.append(document.body, m);
                m.classList.add('tmp');
                const c = cumulativeOffset(t);
                m.innerText     = c.left + ':' + c.top;
                m.style.left    = e.clientX + 20 + 'px';
                m.style.top     = e.clientY + 20 + 'px';


                log(e.shiftKey)
            });
            document.addEventListener('mouseup', this.mouseup = e => {

                if ( ! t ) {

                    return;
                }

                t.classList.remove('shadow');

                m && manipulation.remove(m);
                m = false;

            });
        })();

        this.m = m;
    }
    componentWillUnmount() {
        this.m && manipulation.remove(this.m);
        this.m = false;
        this.event && document.removeEventListener('mousemove', this.event);
        this.event = false;
        this.mousedown && document.removeEventListener('mousedown', this.mousedown);
        this.mousedown = false;
        this.mouseup && document.removeEventListener('mouseup', this.mouseup);
        this.mouseup = false;
    }
    render() {
        return (
            <div className="pos">
                <p style={{color: 'red'}}>hold 'shift' and click individual elements on the page to see its position</p>
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
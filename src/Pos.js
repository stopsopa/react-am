
import React, { Component } from 'react';

import log from 'inspc';

import './Pos.scss';

import manipulation from 'nlab/manipulation';

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

        this.m = m;
    }
    componentWillUnmount() {
        this.m && manipulation.remove(this.m);
        this.m = false;
        this.event && document.removeEventListener('mousemove', this.event);
        this.event = false;
    }

    render() {
        return (
            <div className="pos">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue elit, vulputate eget nisl quis, accumsan accumsan lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pretium magna eu quam accumsan posuere at et urna. Nullam ut turpis condimentum, iaculis magna id, suscipit lorem. In vitae quam convallis lacus lobortis aliquam. Nulla facilisi. Mauris iaculis magna eget mauris pulvinar pharetra. Nullam sit amet dignissim quam. Suspendisse commodo egestas volutpat. Nunc ex elit, auctor eget venenatis at, venenatis vitae ligula. Praesent tristique diam in porttitor ullamcorper. Nullam mattis semper augue, sed dapibus lectus auctor placerat.</p>

                <p>Pellentesque tempor dapibus nulla ut maximus. Etiam a venenatis mauris. Praesent laoreet aliquam mi, mollis viverra ipsum cursus nec. Praesent nec laoreet ligula. In non metus et nibh dignissim sagittis sed eu felis. Suspendisse ut ornare magna. Vivamus in rhoncus nisi, ut semper ex. Donec varius, lorem nec bibendum dapibus, elit justo congue nunc, non rhoncus est mi non quam. Vestibulum augue lectus, semper quis aliquam et, molestie eu tellus.</p>

                <p>Aenean maximus tempor enim id posuere. Etiam euismod egestas magna vel aliquam. Fusce at ullamcorper justo. Vestibulum quis libero quis metus dictum congue quis sit amet lacus. Donec consequat tempor ipsum, at efficitur odio vestibulum ac. Ut hendrerit consequat sem id auctor. Donec quis erat hendrerit felis finibus varius quis at massa. Pellentesque id velit nec velit pharetra bibendum.</p>

                <p>Sed est massa, imperdiet sit amet luctus nec, ultricies eget nibh. Sed ut pulvinar elit. In ullamcorper massa ligula, ut lacinia massa fringilla sed. Curabitur dolor libero, malesuada imperdiet dui vitae, eleifend rutrum est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eu risus lobortis, vestibulum nunc vel, dignissim massa. Nunc ante urna, dignissim id nunc at, pellentesque lacinia enim. Praesent rutrum efficitur leo, et sollicitudin lorem cursus ut. Nunc quis tincidunt nisl.</p>
                <div className="test">plain</div>
            </div>
        );
    }
}

export default Pos;
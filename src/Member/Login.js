import React from 'react';

const Login = () => (
    <div className="login-wrap">
        <strong>새롭게 선보이는 그룹웨어!</strong>
        <p>로그인을 위해 아이디와 비밀번호를 입력해주세요</p>
        <div className="login-form">
            <div className="field">
                <select>
                    <option>기업을 선택해 주세요.</option>
                </select>
            </div>
            <div className="field">
                <input type="text" placeholder="User ID"/>
            </div>
            <div className="field">
                <input type="password" placeholder="Password"/>
            </div>
            <div className="field">
                <span className="chk">
                    <input />
                    <label>아이디 저장</label>
                </span>
            </div>
            <div className="field">
                <button>Sign in</button>
            </div>
        </div>
    </div>
);

export default Login;

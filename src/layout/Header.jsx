/* Header.jsx */
import React from 'react';


export default function Header (){

  return (
    <div className="header">
      <div className="auth-links">
          <a className="nav-link" id="login" href="#">로그인</a> 
          <a className="nav-link" id="signup" href="#">회원가입</a> 
      </div>
      <h1 className="glossy">Glossy</h1>
        <nav class="nav flex-column flex-sm-row text-white py-3">
        <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Best</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">New</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">Collection</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
    </div>
    
  );
}

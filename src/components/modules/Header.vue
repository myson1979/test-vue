<template>
    <div>
      <!--ハンバーガーメニューのボタン-->
      <div 
        class="hamburger-btn"
        @click='active=!active'
      >
        <span 
          class="line line-top"
          :class="{'rotate-top':active}"
        ></span>
        <span 
          class="line line-middle"
          :class="{'rotate-middle':active}"
        ></span>
        <span 
          class="line line-bottom"
          :class="{'rotate-bottom':active}"
        ></span>
  
        <!--ハンバーガーメニューの中身-->
        <transition name="hamburger-menu">
        <div class="hamburger-menu" v-show="active">
            <ul>
                <li><router-link to="/">Top</router-link></li> 
                <li><router-link to="/pages/profile">Profile</router-link></li> 
              <li>アイテム2</li>
              <li>アイテム3</li>
            </ul>
        </div>
      </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        active:false
      }
    }
  }
  </script>
  
  <style>
    /* ハンバーガーメニューのボタンのcss */
    .hamburger-btn {
    position: fixed;
    top: 10.5px;
    left: 100px;
    width: 70px;
    height: 72px;
    cursor: pointer;
    z-index: 50;
    }
    .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 45px;
    height: 2px;
    background: #333333;
    text-align: center;
    }
    .line-top {
    top: 16px;
    transition: 0.4s ease;
    }
    .line-middle {
    top: 26px;
    transition: 0.4s ease;
    }
    .line-bottom {
    top: 36px;
    transition: 0.4s ease;
    }
    .rotate-top {
      transform: translateY(10px) rotate(-45deg);
      transition: 0.4s ease;
    }
    .rotate-middle {
      transition: 0.4s ease;
      opacity: 0;
    }
    .rotate-bottom {
      transform: translateY(-10px) rotate(45deg);
      transition: 0.4s ease;
    }
  
    /* ハンバーガーメニューの中身のcss */
    .hamburger-menu-enter-active, .hamburger-menu-leave-active {
      opacity :0.4;
    }
    .hamburger-menu-enter, .hamburger-menu-leave-to {
      opacity: 0;
    }
    .hamburger-menu-leave, .hamburger-menu-enter-to{
      opacity: 1;
    }
    .hamburger-menu {
      background-color: rgba(197, 197, 197, 0.671);
      z-index: 30;
      padding: 2rem 1rem;
      position: fixed;
      width: 300px;
      height: 80rem;
      top: 0;
      left: 0;
    }
    ul{
      padding: 0;
      padding-top: 40px;
    }
    li {
      padding: 35px 0;
      list-style: none;
      line-height: 1;
    }
    a {
      color: rgb(66, 66, 66);
      text-decoration: none;
      font-size: 25px;
      margin: 0 4vw;
      padding-bottom: 8px;
    }
  </style>
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './Welcom.module.scss'
import logo from '../assets/icons/山竹.svg'
// console.log(logo);  ///src/assets/icons/山竹.svg

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
    <header>
        <img src={logo} />
        <h1>山竹记账</h1>
    </header>
    <main><RouterView/></main>
    
    </div>
  },
});
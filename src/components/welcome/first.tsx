import s from './welcome.module.scss';
import { FunctionalComponent,ref, watchEffect } from 'vue';
import { useSwipe } from '../../hooks/useSwipe';
import { useRouter } from 'vue-router';
export const First: FunctionalComponent = () => {
  return <div class={s.card} >
    <svg>
      <use xlinkHref='#pig'></use>
    </svg>
    <h2>会挣钱<br />还会省钱</h2>
  </div>
}

First.displayName = 'First'

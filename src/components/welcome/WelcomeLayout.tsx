import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const {slots:{icon,title,buttons}} = context
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
{/* 1,2 */}
          {icon?.()}
          {title?.()}

        </div>
        <div class={s.actions}>
{/* 3 */}
          {buttons?.()}

        </div>
      </div>
    )
  }
})
